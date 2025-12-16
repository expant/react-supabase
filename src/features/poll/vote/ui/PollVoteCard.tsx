import { PollCard } from '@/entities/poll/ui/PollCard';
import { usePollVote } from '../model/hooks/usePollVote';
import type { PollVoteCardProps } from '../model/types';

export function PollVoteCard({ poll, userVote }: PollVoteCardProps) {
	const { optionId, error, isVoted, isLoading, vote, cancel } = usePollVote({
		pollId: poll.id,
		userVote,
	});

	if (error) {
		console.error(error);
	}

	return (
		<PollCard
			poll={poll}
			optionId={optionId}
			disabled={isVoted}
			isLoading={isLoading}
			onChange={vote}
			onCancel={cancel}
		/>
	);
}
