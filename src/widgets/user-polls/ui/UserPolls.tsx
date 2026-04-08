import { Empty, Space, Spin } from "antd";
import { UserPollCard } from "@/entities/poll/ui/UserPollCard";
import { DeletePollButton } from "@/features/poll/delete/ui/DeletePollButton";
import { useUserPolls } from "../model/hooks/useUserPolls";
import styles from "./UserPolls.module.css";

export function UserPolls() {
  const { polls, isLoading, loadUserPolls } = useUserPolls();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {isLoading ? (
          <div className={styles.loading}>
            <Spin />
          </div>
        ) : polls.length === 0 ? (
          <Empty description="У вас пока нет опросов" />
        ) : (
          <Space orientation="vertical" size={16} className={styles.list}>
            {polls.map((poll) => (
              <UserPollCard
                key={poll.id}
                poll={poll}
                actionSlot={
                  <DeletePollButton pollId={poll.id} onDeleted={loadUserPolls} />
                }
              />
            ))}
          </Space>
        )}
      </div>
    </div>
  );
}