import { useState, useEffect } from "react";
import { message, Upload } from "antd";
import {
  deleteAvatar,
  uploadAvatar,
  getAvatarUrl,
} from "@/entities/profile/api/avatarApi";
import type { UploadProps } from "antd/es/upload";
import type { UseAvatarArgs } from "../types";

const AVATAR_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function useAvatar({ profile, refetchProfile }: UseAvatarArgs) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!profile) return;

    const { id, avatar_updated_at } = profile;
    const url = getAvatarUrl(id, avatar_updated_at);

    setAvatarUrl(url);
  }, [profile]);

  const handleUpload = async (file: File) => {
    if (!profile) return;

    setIsLoading(true);

    try {
      await uploadAvatar(profile.id, file);
      await refetchProfile();
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка загрузки аватара");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBeforeUpload: UploadProps["beforeUpload"] = async (file) => {
    if (!AVATAR_TYPES.includes(file.type)) {
      message.error("Недопустимый тип файла. Допустимые типы: jpeg, png, webp");
      return Upload.LIST_IGNORE;
    }

    await handleUpload(file);
    return false;
  };

  const handleDeleteAvatar = async () => {
    if (!profile) return;

    setIsLoading(true);

    try {
      await deleteAvatar(profile.id);
      await refetchProfile();
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка удаления аватара");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    avatarUrl,
    isLoading,
    handleUpload,
    handleBeforeUpload,
    handleDeleteAvatar,
  };
}
