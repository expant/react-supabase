import { Space, Spin } from 'antd';
import { PollVoteCard } from '@/features/poll/vote/ui/PollVoteCard';
import type { PollListProps } from '../model/types';
import styles from './PollList.module.css';

export function PollList({ polls, userVotes, isLoading }: PollListProps) {
	return (
		<Space direction='vertical' size={16} className={styles.list}>
			{isLoading && <Spin className={styles.spin} />}

			{polls.map((poll) => (
				<PollVoteCard key={poll.id} poll={poll} userVote={userVotes[poll.id]} />
			))}
		</Space>
	);
}
