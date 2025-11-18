import { supabase } from '@/shared/api/supabaseClient';
import type { subscribeToAuthChangesArg } from '../types';

export const subscribeToAuthChanges = (cb: subscribeToAuthChangesArg) => {
	const {
		data: { subscription },
	} = supabase.auth.onAuthStateChange(cb);

	return () => subscription.unsubscribe();
};
