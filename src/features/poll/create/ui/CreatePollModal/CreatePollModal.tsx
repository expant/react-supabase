import { Modal } from "antd";
import { CreatePollForm } from "../CreatePollForm/CreatePollForm";
import type { CreatePollModalProps } from "../../model/types";

export function CreatePollModal({
  isOpen,
  onClose,
  onCreated,
}: CreatePollModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      destroyOnHidden
      centered
    >
      <CreatePollForm onCloseModal={onClose} onCreated={onCreated} />
    </Modal>
  );
}
