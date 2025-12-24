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
      centered
      okText="Да"
      cancelText="Нет"
      loading={isLoading}
      open={isOpen}
      onCancel={onClose}
      onOk={onDelete}
      okButtonProps={{ danger: true }}
    >
      <Text>Вы действительно хотите удалить аккаунт?</Text>
    </Modal>
  );
}
