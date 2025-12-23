import { Modal, Typography } from "antd";
import type { DeleteAccountModalProps } from "../model/types";

const { Text } = Typography;

export function DeleteAccountModal({
  isOpen,
  isLoading,
  onClose,
  onDelete,
}: DeleteAccountModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      onOk={onDelete}
      okText="Удалить"
      okButtonProps={{ danger: true }}
      cancelText="Отменить"
      loading={isLoading}
    >
      <Text>Вы действительно хотите удалить аккаунт?</Text>
    </Modal>
  );
}
