import type { Session, AuthChangeEvent } from '@supabase/supabase-js';

export type SessionType = Session | null;
export type AuthEventType = string | null;
export type UnsubscribeType = (() => void) | null;

export type AuthContextType = {
	session: SessionType;
	authEvent: AuthEventType;
	isLoading: boolean;
	isRecovering: boolean;
};

export type subscribeToAuthChangesArg = (
	event: AuthChangeEvent,
	session: SessionType
) => void;
