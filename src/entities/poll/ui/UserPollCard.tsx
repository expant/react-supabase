import { Card, Space, Tag, Typography } from "antd";
import type { UserPollCardProps } from "../model/types";
import styles from "./UserPollCard.module.css";

const { Text } = Typography;

export function UserPollCard({ poll, actionSlot }: UserPollCardProps) {
  const { question, poll_options, votes_count } = poll;

  return (
    <Card className={styles.card}>
      <Space orientation="vertical" size={12} className={styles.inner}>
        <Text strong className={styles.question}>
          {question}
        </Text>

        <div className={styles.options}>
          {poll_options.map((opt) => (
            <Tag key={opt.id} className={styles.optionTag}>
              {opt.text}
            </Tag>
          ))}
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