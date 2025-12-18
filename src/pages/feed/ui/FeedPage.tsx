import { Button, Flex } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { PollList } from '@/widgets/poll-list/ui/PollList';
import { CreatePollButton } from '@/features/poll/create/ui/CreatePollButton';
import { useFeedPage } from '../model/hooks/useFeedPage';
import styles from './FeedPage.module.css';

export function FeedPage() {
	const { polls, userVotes, newPollsCount, isLoading, showNewPolls } =
		useFeedPage();

	return (
		<Flex className={styles.feed}>
			<CreatePollButton onCreated={showNewPolls} />

			<Flex className={styles.feedContent}>
				{newPollsCount > 0 && (
					<Button
						type='dashed'
						size='small'
						shape='round'
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
