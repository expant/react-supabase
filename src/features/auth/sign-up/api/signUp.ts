import { supabase } from '@/shared/api/supabaseClient';
import type { AuthError } from '@supabase/supabase-js';
import type { SignUpFormValues } from '../model/types';

const handleError = (error: AuthError) => {
	const { message } = error;

	if (message === 'User already registered') {
		throw new Error('Пользователь уже существует');
	}

	throw new Error(message);
};

export async function signUp(values: SignUpFormValues) {
	const { email, password } = values;
	const { data, error } = await supabase.auth.signUp({ email, password });

	if (error) {
		handleError(error);
	}

	return data;
}
