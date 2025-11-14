import { supabase } from '@/shared/api/supabaseClient';
import type { SignUpFormValues } from '../model/types';

export async function signUp(values: SignUpFormValues) {
	const { email, password } = values;
	const { data, error } = await supabase.auth.signUp({ email, password });

	if (error) {
		throw error;
	}

	return data;
}
