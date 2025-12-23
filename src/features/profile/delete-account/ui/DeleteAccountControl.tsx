import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, message } from "antd";
import { DeleteAccountModal } from "./DeleteAcountModal";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { deleteAccount } from "@/entities/profile/api/profileApi";

export function DeleteAccountControl() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { profile } = useProfile();
  const navigate = useNavigate();

  const closeModal = () => setIsOpen(false);

  const handleDelete = async () => {
    if (!profile) throw new Error("Профиль не найден");

    setIsLoading(true);

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

  return (
    <>
      <Button danger onClick={() => setIsOpen(true)}>
        Удалить аккаунт
      </Button>
      <DeleteAccountModal
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </>
  );
}
