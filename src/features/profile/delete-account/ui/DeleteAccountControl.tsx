import { Button } from "antd";
import { DeleteAccountModal } from "./DeleteAcountModal";
import { useDeleteAccountModal } from "../model/hooks/useDeleteAccountModal";
import { useDeleteAccount } from "../model/hooks/useDeleteAccount";

export function DeleteAccountControl() {
  const { isLoading, handleDelete } = useDeleteAccount();
  const { isOpen, openModal, closeModal } = useDeleteAccountModal();

  return (
    <>
      <Button danger onClick={openModal}>
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
