import { useEffect, useState } from "react";
import { message } from "antd";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { uploadAvatar } from "@/entities/profile/api/profileApi";
import { getAvatarUrl } from "@/entities/profile/api/profileApi";
import type { UploadProps } from "antd/es/upload";

export function useUploadAvatar() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { profile } = useProfile();

  useEffect(() => {
    if (profile) setAvatarUrl(getAvatarUrl(profile.id));
  }, [profile]);

  const handleBeforeUpload = () => {};

  const handleUpload: UploadProps["onChange"] = async (info) => {
    const file = info.file.originFileObj;

    console.log(file);

    if (!file || !profile) return;

    setIsLoading(true);

    try {
      await uploadAvatar(profile.id, file);
      setAvatarUrl(getAvatarUrl(profile.id));
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка загрузки аватара");
    } finally {
      setIsLoading(false);
    }
  };

  return { avatarUrl, isLoading, handleUpload, handleBeforeUpload };
}
