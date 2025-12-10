import { supabase } from '@/shared/api/supabaseClient';

export async function cancelVote(pollId: number) {
	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser();

	if (userError || !user) {
		throw new Error('User not found');
	}

	const { error } = await supabase
		.from('votes')
		.delete()
		.eq('poll_id', pollId)
		.eq('user_id', user.id);

	if (error) {
		throw error;
	}
}
