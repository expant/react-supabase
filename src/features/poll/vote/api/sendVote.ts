import { supabase } from '@/shared/api/supabaseClient';

export async function sendVote(pollId: number, optionId: number) {
	const {
		data: { user },
		error: userError,
	} = await supabase.auth.getUser();

	if (userError || !user) {
		throw new Error('User not found');
	}

	const { error: upsertError } = await supabase.from('votes').upsert(
		{
			poll_id: pollId,
			option_id: optionId,
			user_id: user.id,
		},
		{
			onConflict: 'poll_id,user_id',
		}
	);

	if (upsertError) {
		throw upsertError;
	}
	return optionId;
}
