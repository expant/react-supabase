import { Button, Flex } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { PollList } from "@/widgets/poll-list/ui/PollList";
import { CreatePollButton } from "@/features/poll/create/ui/CreatePollButton";
// import { PollFilter } from "@/features/poll/filter/ui/PollFilter";
import { useFeedPage } from "../model/hooks/useFeedPage";
// import { usePollFilter } from "@/features/poll/filter/model/hooks/usePollFilter";
import styles from "./FeedPage.module.css";

export function FeedPage() {
  const { polls, userVotes, newPollsCount, isLoading, showNewPolls } =
    useFeedPage();

  // const { filteredPolls, handleFilterChange } = usePollFilter(polls);

  return (
    <Flex className={styles.feed}>
      {/* <PollFilter onFilterChange={handleFilterChange} /> */}

      <CreatePollButton onCreated={showNewPolls} />

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
