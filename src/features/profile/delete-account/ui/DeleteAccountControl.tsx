import { useState } from "react";
import { DeleteAccountButton } from "./DeleteAccountButton";
import { DeleteAccountModal } from "./DeleteAccountModal";
import { useDeleteAccount } from "../model/hooks/useDeleteAccount";

export function DeleteAccountControl() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, handleDelete } = useDeleteAccount();

  return (
    <>
      <DeleteAccountButton onClick={() => setIsOpen(true)} />
      <DeleteAccountModal
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
}
