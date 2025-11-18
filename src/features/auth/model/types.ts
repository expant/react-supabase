import type { Session, AuthChangeEvent } from '@supabase/supabase-js';

export type AuthContextType = {
	session: Session | null;
	isLoading: boolean;
};

export type subscribeToAuthChangesArg = (
	event: AuthChangeEvent,
	session: Session | null
) => void;
