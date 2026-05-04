import { Modal } from "@/shared/ui/modal/Modal";
import { CreatePollForm } from "../CreatePollForm/CreatePollForm";
import type { CreatePollModalProps } from "../../model/types";

export function CreatePollModal({
  isOpen,
  onClose,
  onCreated,
}: CreatePollModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CreatePollForm onCloseModal={onClose} onCreated={onCreated} />
    </Modal>
  );
}
