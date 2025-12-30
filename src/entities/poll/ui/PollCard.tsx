import { Button, Card, Radio, Skeleton, Typography, Avatar, Flex } from "antd";
import { CheckSquareOutlined, UserOutlined } from "@ant-design/icons";
import { getPollViewModel } from "../model/lib/getPollViewModel";
import type { PollCardProps } from "../model/types";
import styles from "./PollCard.module.css";

const { Text } = Typography;

export function PollCard({
  poll,
  optionId,
  disabled,
  isLoading,
  onChange,
  onCancel,
}: PollCardProps) {
  const { author, options, question, votesCount, avatarUrl, handleChange } =
    getPollViewModel(poll, onChange);

  const cardTitle = () => (
    <div className={styles.title}>
      <Flex className={styles.author}>
        {author ? (
          <>
            <Avatar shape="circle" src={avatarUrl} icon={<UserOutlined />} />
            <Text>{author.username}</Text>
          </>
        ) : (
          <>
            <Avatar shape="circle" icon={<UserOutlined />} />
            <Text type="secondary">User Deleted</Text>
          </>
        )}
      </Flex>

      <Text className={styles.question}>{question}</Text>
    </div>
  );

  if (isLoading)
    return (
      <Card title={question} className={styles.card}>
        <Skeleton active />
      </Card>
    );

  return (
    <Card title={cardTitle()} className={styles.card}>
      <Radio.Group
        value={optionId}
        options={options}
        onChange={handleChange}
        disabled={disabled}
        className={styles.options}
      />

      {disabled && (
        <Button onClick={onCancel} className={styles.cancelButton}>
          Отменить голос
        </Button>
      )}

      <Text type="secondary" className={styles.votesCount}>
        <CheckSquareOutlined className={styles.checkSquareOutlinedIcon} />

        {votesCount}
      </Text>
    </Card>
  );
}
