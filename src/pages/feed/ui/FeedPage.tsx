import { Button, Flex } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { PollList } from "@/widgets/poll-list/ui/PollList";
import { usePolls } from "@/entities/poll/model/hooks/usePolls";
import styles from "./FeedPage.module.css";

export function FeedPage() {
  const { polls, userVotes, isLoading, newPollsCount, showNewPolls } =
    usePolls();

  return (
    <Flex className={styles.feed}>
      <Flex className={styles.feedContent}>
        {newPollsCount > 0 && (
          <Button
            type="dashed"
            size="small"
            shape="round"
            icon={<DownOutlined />}
            onClick={showNewPolls}
            className={styles.newPollsBtn}
          >
            Показать {newPollsCount} новых опросов
          </Button>
        )}
        <PollList polls={polls} userVotes={userVotes} isLoading={isLoading} />
      </Flex>
    </Flex>
  );
}
