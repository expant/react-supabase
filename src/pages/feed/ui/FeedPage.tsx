import { Button, Flex } from 'antd';
import { PollList } from '@/widgets/poll-list/ui/PollList';
import { CreatePollButton } from '@/features/poll/create/ui/CreatePollButton';
import { useFeedPage } from '../model/hooks/useFeedPage';
import styles from './FeedPage.module.css';

export function FeedPage() {
	const { polls, newPollsCount, isLoading, showNewPolls } = useFeedPage();

	return (
		<Flex className={styles.feed}>
			<CreatePollButton onCreated={showNewPolls} />

			{newPollsCount > 0 && (
				<Button onClick={showNewPolls}>
					Показать {newPollsCount} новых опросов
				</Button>
			)}

			<PollList polls={polls} isLoading={isLoading} />
		</Flex>
	);
}
