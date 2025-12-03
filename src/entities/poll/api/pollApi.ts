import { supabase } from '@/shared/api/supabaseClient';
import { POLL_WITH_OPTIONS_SELECT } from './selects';

export async function getPolls() {
	const { data, error } = await supabase
		.from('polls')
		.select(POLL_WITH_OPTIONS_SELECT)
		.order('created_at', { ascending: false })
		.order('position', { referencedTable: 'poll_options', ascending: true });

	if (error) {
		console.error('Error fetching polls:', error);
		return [];
	}

	return data;
}
