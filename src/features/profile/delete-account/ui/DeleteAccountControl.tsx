import { Button } from "antd";
import { DeleteAccountModal } from "./DeleteAcountModal";
import { useDeleteAccount } from "../model/hooks/useDeleteAccount";
import { useDeleteAccountModal } from "../model/hooks/useDeleteAccountModal";

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
