import type { Session, AuthChangeEvent } from '@supabase/supabase-js';

export type SessionType = Session | null;
export type AuthEventType = string | null;
export type UnsubscribeType = (() => void) | null;

export type createAuthStateChangeHandlerDeps = {
	setSession: (session: SessionType) => void;
	setIsRecovering: (value: boolean) => void;
};

export type handleAuthStateChangeArgs = {
	event: AuthEventType;
	session: SessionType;
};

export type AuthContextType = {
	session: SessionType;
	isLoading: boolean;
	isRecovering: boolean;
};

export type subscribeToAuthChangesArg = (
	event: AuthChangeEvent,
	session: SessionType
) => void;
