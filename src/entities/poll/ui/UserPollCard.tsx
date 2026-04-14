import { Card, Space, Tag, Typography, Progress } from "antd";
import type { UserPollCardProps } from "../model/types";
import { getPercent } from "@/shared/utils/getPercent";
import styles from "./UserPollCard.module.css";

const { Text } = Typography;

export function UserPollCard({ poll, actionSlot }: UserPollCardProps) {
  const { question, poll_options, votes_count } = poll;

  const hasVotes = votes_count > 0;

  return (
    <Card className={styles.card}>
      <Space orientation="vertical" size={12} className={styles.inner}>
        <Text strong className={styles.question}>
          {question}
        </Text>

        <div className={styles.options}>
          {poll_options.map((opt) => {
            const percent = getPercent(opt.votes_count, votes_count);

            return (
              <div key={opt.id} className={styles.optionItem}>
                <div className={styles.optionHeader}>
                  <Tag className={styles.optionTag}>{opt.text}</Tag>
                  {hasVotes && (
                    <Text className={styles.optionPercent}>
                      {percent}% ({opt.votes_count})
                    </Text>
                  )}
                </div>
                {hasVotes && (
                  <Progress
                    percent={percent}
                    size="small"
                    showInfo={false}
                    strokeColor="#2f54eb"
                    railColor="#f0f0f0"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <Text type="secondary" className={styles.votes}>
            Проголосовало: {votes_count}
          </Text>

          {actionSlot}
        </div>
      </Space>
    </Card>
  );
}
