import { Flex } from 'antd';
import { PollList } from '@/widgets/poll-list/ui/PollList';
import styles from './FeedPage.module.css';

export function FeedPage() {
	return (
		<Flex className={styles.feed}>
			<PollList />
		</Flex>
	);
}
