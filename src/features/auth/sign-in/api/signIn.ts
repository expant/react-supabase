import { supabase } from '@/shared/api/supabaseClient';
import type { AuthError } from '@supabase/supabase-js';
import type { SignInFormValues } from '../model/types';

const handleError = (error: AuthError) => {
	const { message } = error;

	if (message === 'Invalid login credentials') {
		throw new Error('Неверный логин или пароль');
	}

	throw new Error(message);
};

export async function signIn(values: SignInFormValues) {
	const { email, password } = values;
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		handleError(error);
	}

	return data;
}
