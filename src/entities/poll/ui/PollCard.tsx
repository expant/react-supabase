import { Button, Card, Skeleton, Typography, Avatar, Space, Tag } from "antd";
import { CheckOutlined, TeamOutlined } from "@ant-design/icons";
import { getPollViewModel } from "../model/lib/getPollViewModel";
import type { PollCardProps, PollOptionWithPercent } from "../model/types";
import styles from "./PollCard.module.css";

const { Text, Title } = Typography;

export function PollCard({
  poll,
  optionId,
  disabled,
  isLoading,
  onChange,
  // onCancel,
}: PollCardProps) {
  const { author, options, question, votesCount, createdAt, avatarUrl } =
    getPollViewModel(poll);

  // const handleOnCancel = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   onCancel();
  // };

  const VotedOption = ({
    opt,
    isChosen,
  }: {
    opt: PollOptionWithPercent;
    isChosen: boolean;
  }) => (
    <div
      className={`${styles.votedOption}${isChosen ? ` ${styles.chosen}` : ""}`}
    >
      {/* фон для варинта с голосом */}
      <div
        className={styles.votedOptionFill}
        style={{ width: `${opt.percent}%` }}
      />

      <div className={styles.votedOptionContent}>
        <div className={styles.votedOptionLabel}>
          {isChosen ? (
            <div className={styles.votedCheck}>
              <CheckOutlined />
            </div>
          ) : (
            <div className={styles.votedEmptyDot} />
          )}

          <Text className={styles.votedOptionText} ellipsis>
            {opt.text}
          </Text>
        </div>
        <span className={styles.votedPct}>{opt.percent}%</span>
      </div>
    </div>
  );

  return (
    <Card className={styles.pollCard} variant={"borderless"}>
      {/* ── Header ── */}
      <div className={styles.cardHeader}>
        <Space size={10} align="center">
          <Avatar size={34} src={avatarUrl} className={styles.authorAvatar}>
            {author?.username.charAt(0).toUpperCase()}
          </Avatar>

          <div className={styles.authorMeta}>
            <Text className={styles.authorName}>{author?.username}</Text>
            <Text className={styles.authorTime}>{createdAt}</Text>
          </div>
        </Space>

        {disabled && (
          <Tag className={styles.votedTag} icon={<CheckOutlined />}>
            Проголосовано
          </Tag>
        )}
      </div>

      {/* ── Question ── */}
      <Title level={5} className={styles.question}>
        {question}
      </Title>

      {/* ── Options ── */}
      <Space orientation="vertical" className={styles.optionsSpace} size={7}>
        {isLoading
          ? options.map((_, i) => (
              <Skeleton.Button
                key={i}
                active
                block
                className={styles.skeletonOption}
              />
            ))
          : disabled
            ? options.map((opt) => (
                <VotedOption
                  key={opt.id}
                  opt={opt}
                  isChosen={opt.id === optionId}
                />
              ))
            : options.map((opt) => (
                <Button
                  key={opt.id}
                  className={styles.optionBtn}
                  onClick={() => onChange(opt.id)}
                >
                  <div className={styles.optionDot} />
                  <span>{opt.text}</span>
                </Button>
              ))}
      </Space>

      {/* ── Footer ── */}
      <div className={styles.cardFooter}>
        <div className={styles.footerVotes}>
          <TeamOutlined />
          <Text className={styles.footerVotesText}>{votesCount} голосов</Text>
        </div>
      </div>
    </Card>
  );
}
