import { useState } from "react";
import { message } from "antd";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import {
  uploadAvatar,
  updateAvatarUpdatedAt,
} from "@/entities/profile/api/profileApi";
import type { UploadProps } from "antd/es/upload";

export function useUploadAvatar() {
  // const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { profile, refetchProfile } = useProfile();

  // useEffect(() => {
  //   if (profile) setAvatarUrl(getAvatarUrl(profile.id));
  // }, [profile]);

  const handleBeforeUpload = () => {};

  const handleUpload: UploadProps["onChange"] = async (info) => {
    const file = info.file.originFileObj;

    if (!file || !profile) return;

    setIsLoading(true);

    try {
      await uploadAvatar(profile.id, file);
      await updateAvatarUpdatedAt(profile.id);
      await refetchProfile();
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка загрузки аватара");
    } finally {
      setIsLoading(false);
    }
  };

  return { avatarUrl, isLoading, handleUpload, handleBeforeUpload };
}
