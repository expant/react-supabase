import { Flex } from 'antd';
import { PollList } from '@/widgets/poll-list/ui/PollList';
import { CreatePollButton } from '@/features/poll/create/ui/CreatePollButton';
import styles from './FeedPage.module.css';

export function FeedPage() {
	return (
		<Flex className={styles.feed}>
			<CreatePollButton />
			<PollList />
		</Flex>
	);
}
