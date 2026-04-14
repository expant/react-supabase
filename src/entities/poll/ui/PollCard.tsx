import {
  Button,
  Card,
  Radio,
  Skeleton,
  Typography,
  Avatar,
  Flex,
  Progress,
} from "antd";
import {
  CheckSquareOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
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
  const {
    author,
    options,
    question,
    votesCount,
    createdAt,
    avatarUrl,
    handleChange,
  } = getPollViewModel(poll, onChange);

  const handleOnCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCancel();
  };

  const cardTitle = () => (
    <div className={styles.title}>
      <Flex className={styles.info}>
        <Avatar
          shape="circle"
          src={avatarUrl}
          icon={<UserOutlined />}
          size={40}
        />
        <Flex className={styles.infoText}>
          <Text>{author ? author.username : "User Deleted"}</Text>
          <Text type="secondary">{createdAt}</Text>
        </Flex>
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
        onChange={handleChange}
        disabled={disabled}
        className={styles.options}
      >
        {options.map((opt) => (
          <Radio key={opt.id} value={opt.id} className={styles.optionRadio}>
            <div className={styles.optionRow}>
              <div className={styles.optionContent}>
                <div className={styles.optionText}>{opt.text}</div>
                {disabled && (
                  <div className={styles.optionResult}>
                    <Progress
                      percent={opt.percent}
                      size="small"
                      showInfo={false}
                      strokeColor="#1677ff"
                    />
                    <Text className={styles.optionPercent}>
                      {opt.percent}% ({opt.votes_count})
                    </Text>
                  </div>
                )}
              </div>

              {disabled && optionId === opt.id && (
                <Button
                  type="text"
                  size="small"
                  icon={<CloseOutlined />}
                  className={styles.cancelIcon}
                  aria-label="Отменить голос"
                  onClick={handleOnCancel}
                />
              )}
            </div>
          </Radio>
        ))}
      </Radio.Group>

      <Text type="secondary" className={styles.votesCount}>
        <CheckSquareOutlined className={styles.checkSquareOutlinedIcon} />

        {votesCount}
      </Text>
    </Card>
  );
}
