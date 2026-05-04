import { useState, useEffect } from "react";
import {
  deleteAvatar,
  uploadAvatar,
  getAvatarUrl,
} from "@/entities/profile/api/avatarApi";
import type { UseAvatarArgs } from "../types";

const AVATAR_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function useAvatar({ profile, refetchProfile }: UseAvatarArgs) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!profile) return;

    const { id, avatar_updated_at } = profile;
    const url = getAvatarUrl(id, avatar_updated_at);

    setAvatarUrl(url);
  }, [profile]);

  const handleUpload = async (file: File) => {
    if (!profile) return;

    setIsLoading(true);
    setError(null);

    try {
      await uploadAvatar(profile.id, file);
      await refetchProfile();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка загрузки аватара");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = async (file: File) => {
    if (!AVATAR_TYPES.includes(file.type)) {
      setError("Недопустимый тип файла. Допустимые типы: jpeg, png, webp");
      return;
    }

    await handleUpload(file);
  };

  const handleDeleteAvatar = async () => {
    if (!profile) return;

    setIsLoading(true);
    setError(null);

    try {
      await deleteAvatar(profile.id);
      await refetchProfile();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка удаления аватара");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    avatarUrl,
    isLoading,
    error,
    handleUpload,
    handleFileChange,
    handleDeleteAvatar,
  };
}
