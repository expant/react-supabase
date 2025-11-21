import { supabase } from '@/shared/api/supabaseClient';
import { AuthError } from '@supabase/supabase-js';

const handleError = (error: AuthError) => {
	const { message } = error;

	// if (message === 'User not found') {
	//   throw new Error('No account found with that email address.');
	// }

	throw new Error(message);
};

export async function sendResetEmail(email: string) {
	const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${window.location.origin}/auth/new-password`,
	});

	if (error) {
		handleError(error);
	}

	return data;
}
