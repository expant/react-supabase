import { useEffect, useMemo, useState } from "react";
import { message, Upload } from "antd";
import type { UploadProps } from "antd/es/upload";
import {
  getBackgroundUrl,
  uploadBackground,
} from "@/entities/profile/api/backgroundApi";
import type { BackgroundControlsProps } from "../types";

const BG_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function useBackground({ profile }: BackgroundControlsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [version, setVersion] = useState<number>(0);

  useEffect(() => {
    setVersion(0);
  }, [profile?.id]);

  const backgroundUrl = useMemo(() => {
    if (!profile) return null;
    const base = getBackgroundUrl(profile.id);
    const v = version === 0 ? "" : `?v=${version}`;
    return `${base}${v}`;
  }, [profile, version]);

  const handleUpload = async (file: File) => {
    if (!profile) return;
    setIsLoading(true);

    try {
      await uploadBackground(profile.id, file);
      setVersion(Date.now());
      window.dispatchEvent(new Event("profile:background-updated"));
      message.success("Фон обновлён");
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка загрузки фона");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBeforeUpload: UploadProps["beforeUpload"] = async (file) => {
    if (!BG_TYPES.includes(file.type)) {
      message.error("Недопустимый тип файла. Допустимые типы: jpeg, png, webp");
      return Upload.LIST_IGNORE;
    }

    await handleUpload(file);
    return false;
  };

  return {
    backgroundUrl,
    isLoading,
    handleBeforeUpload,
  };
}