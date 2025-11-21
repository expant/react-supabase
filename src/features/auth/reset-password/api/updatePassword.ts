import { supabase } from '@/shared/api/supabaseClient';
import { AuthError } from '@supabase/supabase-js';

const handleError = (error: AuthError) => {
	// const { message } = error;

	throw new Error(error.message);
};

export async function updatePassword(password: string) {
	const { data, error } = await supabase.auth.updateUser({ password });

	if (error) {
		handleError(error);
	}

	return data;
}
