import { useState } from "react";
import { CreatePollModal } from "../CreatePollModal/CreatePollModal";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { PlusIcon } from "@/shared/ui/icons/PlusIcon";
import type { CreatePollButtonProps } from "../../model/types";
import styles from "./CreatePollButton.module.css";

export function CreatePollButton({ onCreated }: CreatePollButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useProfile();

  if (isLoading) {
    return <div className={styles.skeleton} />;
  }

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className={styles.btn} onClick={() => setIsOpen(true)}>
        <PlusIcon />
        Создать опрос
      </button>
      <CreatePollModal
        isOpen={isOpen}
        onClose={closeModal}
        onCreated={onCreated}
      />
    </>
  );
}
