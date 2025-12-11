import { supabase } from '@/shared/api/supabaseClient';

export async function createPoll(question: string, options: string[]) {
	const { data, error } = await supabase.rpc('create_poll', {
		p_question: question,
		p_options: options,
	});

	if (error) {
		throw error;
	}

	return data as number;
}
