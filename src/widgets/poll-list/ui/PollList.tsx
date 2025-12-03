import { useEffect, useState } from 'react';
import { Space, Spin } from 'antd';
import { PollCard } from '@/entities/poll/ui/PollCard';
import { getPolls } from '@/entities/poll/api/pollApi';
import type { Poll } from '@/entities/poll/model/types';
import styles from './PollList.module.css';

export function PollList() {
	const [polls, setPolls] = useState<Poll[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getPolls()
			.then((res) => {
				console.log(res);
				setPolls(res);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<Space direction='vertical' size={16} className={styles.list}>
			{isLoading && <Spin className={styles.spin} />}

			{polls.map((poll) => (
				<PollCard key={poll.id} poll={poll} />
			))}
		</Space>
	);
}
