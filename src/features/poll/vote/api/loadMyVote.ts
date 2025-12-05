import { supabase } from '@/shared/api/supabaseClient';
import type { LoadMyVoteResult } from '../model/types';

export async function loadMyVote(pollId: number): Promise<LoadMyVoteResult> {
	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser();

	if (userError || !user) {
		return { optionId: null, isAuthenticated: false };
	}

	const { data, error } = await supabase
		.from('votes')
		.select('option_id')
		.eq('poll_id', pollId)
		.eq('user_id', user.id)
		.maybeSingle();

	if (error) {
		throw error;
	}

	return {
		optionId: data?.option_id ?? null,
		isAuthenticated: true,
	};
}
