import { Button, Popconfirm } from "antd";
import { useDeletePoll } from "../model/hooks/useDeletePoll";
import type { DeletePollButtonProps } from "../model/types";
import styles from "./DeletePollButton.module.css";

export function DeletePollButton({ pollId, onDeleted }: DeletePollButtonProps) {
  const { isLoading, handleDelete } = useDeletePoll();

  const onConfirm = async () => {
    await handleDelete(pollId);
    onDeleted();
  };

  return (
    <Popconfirm
      title="Вы уверены, что хотите удалить опрос?"
      description="Действие нельзя отменить."
      okText="Да"
      cancelText="Нет"
      okButtonProps={{ danger: true, loading: isLoading }}
      onConfirm={onConfirm}
    >
      <Button danger className={styles.button} loading={isLoading}>
        Удалить
      </Button>
    </Popconfirm>
  );
}

