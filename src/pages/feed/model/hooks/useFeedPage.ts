import { useEffect, useState } from 'react';
import { message } from 'antd';
import { getPolls } from '@/entities/poll/api/pollApi';
import { subscribeToNewPolls } from '@/entities/poll/api/pollRealtime';
import { useUser } from '@/features/auth/model/hooks/useUser';
import type { Poll } from '@/entities/poll/model/types';

export function useFeedPage() {
	const [polls, setPolls] = useState<Poll[]>([]);
	const [newPollsCount, setNewPollsCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const user = useUser();

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

		const unsubscribe = subscribeToNewPolls((row) => {
			if (row.author_id === user.id) return;

			setNewPollsCount((prev) => prev + 1);
		});

		return () => unsubscribe();
	}, [user.id]);

	const showNewPolls = async () => {
		await loadPolls();
		setNewPollsCount(0);
	};

	return {
		polls,
		newPollsCount,
		isLoading,
		showNewPolls,
	};
}
