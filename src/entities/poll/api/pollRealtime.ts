import { supabase } from '@/shared/api/supabaseClient';
import type {
	OnPollInserted,
	PollRow,
	onPollVotesCountUpdated,
} from '../model/types';

export function subscribeToNewPolls(onInserted: OnPollInserted) {
	const channel = supabase
		.channel('polls:insert')
		.on(
			'postgres_changes',
			{
				event: 'INSERT',
				schema: 'public',
				table: 'polls',
			},
			(payload) => {
				onInserted(payload.new as PollRow);
			}
		)
		.subscribe();

	return () => supabase.removeChannel(channel);
}

export function subscribeToPollVotesCount(onUpdated: onPollVotesCountUpdated) {
	const channel = supabase
		.channel('polls:update:votes_count')
		.on(
			'postgres_changes',
			{
				event: 'UPDATE',
				schema: 'public',
				table: 'polls',
			},
			(payload) => {
				const next = payload.new as PollRow;
				onUpdated({ id: next.id, votes_count: next.votes_count });
			}
		)
		.subscribe((status) => {
			console.log('realtime status:', status);
		});

	return () => {
		supabase.removeChannel(channel);
	};
}
