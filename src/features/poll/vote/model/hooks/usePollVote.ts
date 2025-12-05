import { useEffect, useState } from 'react';
import { loadMyVote } from '../../api/loadMyVote';
import type { UsePollVoteProps, UsePollVoteResult } from '../types';

export function usePollVote({ pollId }: UsePollVoteProps): UsePollVoteResult {
	const [value, setValue] = useState<number | null>(null);
	const [isVoted, setIsVoted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetch = async () => {
			setIsLoading(true);
			setError(null);

			try {
				const { optionId } = await loadMyVote(pollId);

				if (optionId) {
					setValue(optionId);
					setIsVoted(true);
				} else {
					setValue(null);
					setIsVoted(false);
				}
			} catch (e) {
				setError(e instanceof Error ? e.message : 'Ошибка загрузки голоса');
			} finally {
				setIsLoading(false);
			}
		};

		fetch();
	}, [pollId]);

	// const vote = (optionId: number) => {
	// 	setValue(optionId);
	// 	setIsVoted(true);
	// };

	// const cancel = () => {
	// 	setValue(null);
	// 	setIsVoted(false);
	// };

	return {
		value,
		isVoted,
		isLoading,
		error,
		// vote,
		// cancel,
	};
}
