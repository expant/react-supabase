import { useEffect, useState } from 'react';
import { message } from 'antd';
import { getPolls } from '@/entities/poll/api/pollApi';
import { getUserVotes } from '@/entities/vote/api/voteApi';
import {
	subscribeToNewPolls,
	subscribeToPollVotesCount,
} from '@/entities/poll/api/pollRealtime';
import { useUser } from '@/features/auth/model/hooks/useUser';
import type { Poll } from '@/entities/poll/model/types';
import type { Vote } from '@/entities/vote/model/types';

export function useFeedPage() {
	const [polls, setPolls] = useState<Poll[]>([]);
	const [userVotes, setUserVotes] = useState<Record<number, Vote>>({});
	const [newPollsCount, setNewPollsCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const user = useUser();

	const loadPolls = async () => {
		try {
			const data = await getPolls();
			setPolls(data);
		} catch (e) {
			message.error(
				e instanceof Error ? e.message : 'Не удалось загрузить опросы'
			);
		}
	};

	const loadUserVotes = async () => {
		try {
			const data = await getUserVotes();

			if (!data) return;

			const votes = data.reduce(
				(acc, vote) => ({ ...acc, [vote.poll_id]: vote }),
				{}
			);

			setUserVotes(votes);
		} catch (e) {
			message.error(
				e instanceof Error ? e.message : 'Не удалось загрузить голоса'
			);
		}
	};

	const loadFeed = async () => {
		setIsLoading(true);

		try {
			await Promise.all([loadPolls(), loadUserVotes()]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadFeed();

		const unsubscribe = subscribeToNewPolls((row) => {
			if (row.author_id === user.id) return;

			setNewPollsCount((prev) => prev + 1);
		});

		return () => {
			unsubscribe();
		};
	}, [user.id]);

	useEffect(() => {
		const unsubscribe = subscribeToPollVotesCount(({ id, votes_count }) => {
			setPolls((prev) =>
				prev.map((p) => (p.id === id ? { ...p, votes_count } : p))
			);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const showNewPolls = async () => {
		await loadPolls();
		setNewPollsCount(0);
	};

	return {
		polls,
		userVotes,
		newPollsCount,
		isLoading,
		showNewPolls,
	};
}
