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

const handleUsername = async (username: string) => {
	const nick = username?.trim();

	if (nick) {
		const { data: taken, error } = await supabase.rpc('is_nickname_taken', {
			nick,
		});

		if (error) throw new Error('Не удалось проверить никнейм');
		if (taken) throw new Error('Никнейм занят');
	}
};

export async function signUp(values: SignUpFormValues) {
	const { email, password, username } = values;

	await handleUsername(username);

	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				username,
			},
		},
	});

	if (error) {
		handleError(error);
	}

	return data;
}
