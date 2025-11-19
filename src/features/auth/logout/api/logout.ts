import { supabase } from '@/shared/api/supabaseClient';

export async function logout() {
	const { error } = await supabase.auth.signOut();

	if (error) {
		throw new Error('Logout failed: ' + error.message);
	}
}
