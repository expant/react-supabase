import { useEffect, useState } from 'react';
import { sendVote, cancelVote } from '@/entities/vote/api/voteApi';
import type { UsePollVoteProps } from '../types';

export function usePollVote({ pollId, userVote }: UsePollVoteProps) {
	const [optionId, setOptionId] = useState<number | null>(null);
	const [isVoted, setIsVoted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setOptionId(userVote?.option_id ?? null);
		setIsVoted(!!userVote);
	}, [userVote]);

	const vote = async (optionId: number) => {
		setIsLoading(true);

		try {
			await sendVote(pollId, optionId);
			setOptionId(optionId);
			setIsVoted(true);
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Ошибка голосования');
		} finally {
			setIsLoading(false);
		}
	};

	const cancel = async () => {
		setIsLoading(true);

		try {
			await cancelVote(pollId);
			setOptionId(null);
			setIsVoted(false);
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Ошибка отмены голосования');
		} finally {
			setIsLoading(false);
		}
	};

	return {
		optionId,
		isVoted,
		isLoading,
		error,
		vote,
		cancel,
	};
}
