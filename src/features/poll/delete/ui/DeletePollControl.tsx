import { useState } from "react";
import { DeletePollButton } from "./DeletePollButton";
import { DeletePollModal } from "./DeletePollModal";
import { useDeletePoll } from "../model/hooks/useDeletePoll";
import type { DeletePollControlProps } from "../model/types";

export function DeletePollControl({ pollId, onDeleted }: DeletePollControlProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, handleDelete } = useDeletePoll();

  const onDelete = async () => {
    await handleDelete(pollId);
    setIsOpen(false);
    onDeleted();
  };

  return (
    <>
      <DeletePollButton onClick={() => setIsOpen(true)} isLoading={isLoading} />
      <DeletePollModal
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={() => setIsOpen(false)}
        onDelete={onDelete}
      />
    </>
  );
}
