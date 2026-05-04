import { UserPollCard } from "@/entities/poll/ui/UserPollCard";
import { DeletePollControl } from "@/features/poll/delete/ui/DeletePollControl";
import { useUserPolls } from "../model/hooks/useUserPolls";
import styles from "./UserPolls.module.css";

export function UserPolls() {
  const { polls, isLoading, loadUserPolls } = useUserPolls();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Мои опросы</h2>
        <span className={styles.counter}>{polls.length}</span>
      </div>

      <div className={styles.content}>
        {isLoading ? (
          <div className={styles.skeleton}>
            <div className={styles.skeletonCard} />
            <div className={styles.skeletonCard} />
          </div>
        ) : polls.length === 0 ? (
          <p className={styles.empty}>У вас пока нет опросов</p>
        ) : (
          <div className={styles.list}>
            {polls.map((poll) => (
              <UserPollCard
                key={poll.id}
                poll={poll}
                actionSlot={
                  <DeletePollControl
                    pollId={poll.id}
                    onDeleted={loadUserPolls}
                  />
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
