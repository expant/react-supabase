import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from './context';
import { loadInitialSession } from './lib/loadInitialSession';
import { subscribeToAuthChanges } from './lib/subscribeToAuthChanges';
import type { UnsubscribeType, SessionType, AuthEventType } from './types';

export function AuthProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<SessionType>(null);
	const [authEvent, setAuthEvent] = useState<AuthEventType>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isRecovering, setIsRecovering] = useState(false);

	useEffect(() => {
		let unsubscribe: UnsubscribeType = null;

		(async () => {
			const initialSession = await loadInitialSession();
			setSession(initialSession);
			setIsLoading(false);

			unsubscribe = subscribeToAuthChanges((event, updatedSession) => {
				setSession(updatedSession);

				if (event === 'PASSWORD_RECOVERY') {
					setIsRecovering(true);
				}

				setAuthEvent(event);
			});
		})();

		return () => unsubscribe?.();
	}, []);

	return (
		<AuthContext.Provider
			value={{ session, authEvent, isLoading, isRecovering }}
		>
			{children}
		</AuthContext.Provider>
	);
}
