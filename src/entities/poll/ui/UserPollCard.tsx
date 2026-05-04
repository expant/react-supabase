import { formatTimeAgo } from "@/shared/utils/formatTimeAgo";
import { getPercent } from "@/shared/utils/getPercent";
import { PollsIcon } from "@/shared/ui/icons/PollsIcon";
import type { UserPollCardProps } from "../model/types";
import styles from "./UserPollCard.module.css";

export function UserPollCard({ poll, actionSlot }: UserPollCardProps) {
  const { question, poll_options, votes_count, created_at } = poll;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.time}>{formatTimeAgo(created_at)}</span>
        {actionSlot}
      </div>

      <p className={styles.question}>{question}</p>

      <div className={styles.options}>
        {poll_options.map((opt) => {
          const percent = getPercent(opt.votes_count, votes_count);

          return (
            <div key={opt.id} className={styles.option}>
              <div
                className={styles.optionFill}
                style={{ width: `${percent}%` }}
              />
              <div className={styles.optionContent}>
                <span className={styles.optionText}>{opt.text}</span>
                <span className={styles.optionPct}>
                  {percent}%{" "}
                  <span className={styles.optionCount}>
                    ({opt.votes_count})
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <PollsIcon size={11} />
        <span className={styles.votes}>{votes_count} голосов</span>
      </div>
    </div>
  );
}
