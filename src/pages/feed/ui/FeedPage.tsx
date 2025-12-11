import { useEffect, useState } from 'react';
import { Flex, message } from 'antd';
import { PollList } from '@/widgets/poll-list/ui/PollList';
import { CreatePollButton } from '@/features/poll/create/ui/CreatePollButton';
import { getPolls } from '@/entities/poll/api/pollApi';
import type { Poll } from '@/entities/poll/model/types';
import styles from './FeedPage.module.css';

export function FeedPage() {
	const [polls, setPolls] = useState<Poll[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const loadPolls = async () => {
		setIsLoading(true);

		try {
			const data = await getPolls();
			setPolls(data);
		} catch (e) {
			message.error(
				e instanceof Error ? e.message : 'Не удалось загрузить опросы'
			);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadPolls();
	}, []);

	const handlePollCreated = () => {
		loadPolls();
	};

	return (
		<Flex className={styles.feed}>
			<CreatePollButton onCreated={handlePollCreated} />
			<PollList polls={polls} isLoading={isLoading} />
		</Flex>
	);
}
