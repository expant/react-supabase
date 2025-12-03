import { Flex } from 'antd';
import { PollFeed } from '@/widgets/poll-feed/ui/PollFeed';
import styles from './FeedPage.module.css';

export function FeedPage() {
	return (
		<Flex className={styles.feed}>
			<PollFeed />
		</Flex>
	);
}
