import { useState } from "react";
import { useNavigate } from "react-router";
import { message } from "antd";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { deleteAccount } from "@/entities/profile/api/profileApi";

export function useDeleteAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const { profile } = useProfile();
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsLoading(true);

    if (!profile || isLoading) return;

    try {
      await deleteAccount(profile.id);
      navigate("/auth");
    } catch (e) {
      message.error(
        e instanceof Error ? e.message : "Ошибка удаления аккаунта"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleDelete,
  };
}
