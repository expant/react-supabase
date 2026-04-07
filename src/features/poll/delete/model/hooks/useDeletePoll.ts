import { useState } from "react";
import { message } from "antd";
import { deletePoll } from "../../api/deletePoll";

export function useDeletePoll() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (pollId: number) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await deletePoll(pollId);
      message.success("Опрос удалён");
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Не удалось удалить опрос");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleDelete };
}

