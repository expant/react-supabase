import { Button, Card, Skeleton, Typography, Avatar, Space, Tag } from "antd";
// import {
//   CheckSquareOutlined,
//   UserOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";

import { CheckOutlined } from "@ant-design/icons";
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

  // const handleOnCancel = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   onCancel();
  // };

  // const cardTitle = () => (
  //   <div className={styles.title}>
  //     <Flex className={styles.info}>
  //       <Avatar
  //         shape="circle"
  //         src={avatarUrl}
  //         icon={<UserOutlined />}
  //         size={34}
  //       />
  //       <Flex className={styles.infoText}>
  //         <Text>{author ? author.username : "User Deleted"}</Text>
  //         <Text type="secondary">{createdAt}</Text>
  //       </Flex>
  //     </Flex>

  //     <Text className={styles.question}>{question}</Text>
  //   </div>
  // );

  // interface VotedOptionProps {
  //   opt: PollOptionWithPercent;
  //   pct: number;
  //   isChosen: boolean;
  // }

  // const VotedOption: React.FC<VotedOptionProps> = ({ opt, pct, isChosen }) => (
  //   <div
  //     className={`${styles.votedOption}${isChosen ? ` ${styles.chosen}` : ""}`}
  //   >
  //     {/* Background fill — width driven by vote percentage */}
  //     <div className={styles.votedOptionFill} style={{ width: `${pct}%` }} />

  //     <div className={styles.votedOptionContent}>
  //       <div className={styles.votedOptionLabel}>
  //         {isChosen ? (
  //           <div className={styles.votedCheck}>
  //             <CheckOutlined />
  //           </div>
  //         ) : (
  //           <div className={styles.votedEmptyDot} />
  //         )}

  //         {/* {opt.emoji && <span style={{ fontSize: 14, flexShrink: 0 }}>{opt.emoji}</span>} */}

  //         <Text style={{ color: "#f4f4f5", fontSize: 14 }} ellipsis>
  //           {opt.text}
  //         </Text>
  //       </div>
  //       <span className={styles.votedPct}>{pct}%</span>
  //     </div>
  //   </div>
  // );

  if (isLoading)
    return (
      <Card title={question} className={styles.card}>
        <Skeleton active />
      </Card>
    );

  return (
    <Card className={styles.pollCard} variant={"borderless"}>
      {/* ── Header ── */}
      <div className={styles.cardHeader}>
        <Space size={10} align="center">
          <Avatar
            size={34}
            src={avatarUrl}
            style={{
              background: "#2d2d35",
              color: "#71717a",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: 12,
              border: "1px solid rgba(255,255,255,0.07)",
              flexShrink: 0,
            }}
          >
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
      <Space orientation="vertical" style={{ width: "100%" }} size={7}>
        {/*
          disabled
          ? options.map((opt) => {
              return (
                <VotedOption
                  key={opt.id}
                  opt={opt}
                  pct={opt.percent}
                  isChosen={opt.}
                />
              );
            })
          :
         */}

        {options.map((opt) => (
          <Button
            key={opt.id}
            className={styles.optionBtn}
            // onClick={handleChange}
          >
            <div className={styles.optionDot} />
            <span>{opt.text}</span>
          </Button>
        ))}
      </Space>

      {/* <Radio.Group
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
      </Text> */}
    </Card>
  );
}
