import { Flex } from "antd";
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
          <button className={styles.newPollsBtn} onClick={showNewPolls}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.newPollsIcon}
            >
              <path
                d="M7 2v5M7 2L4.5 4.5M7 2L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 9.5c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.newPollsText}>Новых опроса</span>
            <span className={styles.newPollsBadge}>{newPollsCount}</span>
          </button>
        )}
        <PollList polls={polls} userVotes={userVotes} isLoading={isLoading} />
      </Flex>
    </Flex>
  );
}
