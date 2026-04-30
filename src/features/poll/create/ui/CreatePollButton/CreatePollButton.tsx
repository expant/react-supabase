import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CreatePollModal } from "../CreatePollModal/CreatePollModal";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
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
      <Button
        className={styles.btn}
        onClick={() => setIsOpen(true)}
        size="large"
        type="primary"
      >
        <PlusOutlined className={styles.btnIcon} />
        Создать опрос
      </Button>
      <CreatePollModal
        isOpen={isOpen}
        onClose={closeModal}
        onCreated={onCreated}
      />
    </>
  );
}
