import { supabase } from '@/shared/api/supabaseClient';
import type { OnPollInserted, PollRow } from '../model/types';

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

	return () => {
		supabase.removeChannel(channel);
	};
}
