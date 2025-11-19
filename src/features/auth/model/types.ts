import type { Session, AuthChangeEvent } from '@supabase/supabase-js';

export type SessionType = Session | null;
export type UnsubscribeType = (() => void) | null;

export type AuthContextType = {
	session: SessionType;
	isLoading: boolean;
};

export type subscribeToAuthChangesArg = (
	event: AuthChangeEvent,
	session: SessionType
) => void;
