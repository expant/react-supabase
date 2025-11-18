import { supabase } from '@/shared/api/supabaseClient';
import type { Session } from '@supabase/supabase-js';

export const loadInitialSession = async (): Promise<Session | null> => {
	const { data } = await supabase.auth.getSession();
	return data.session;
};
