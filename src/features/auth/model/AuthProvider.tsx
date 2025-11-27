import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from './context';
import { getInitialRecoveryState } from './lib/recovery';
import { loadInitialSession } from './lib/loadInitialSession';
import { createAuthStateChangeHandler } from './lib/handleAuthEvent';
import { subscribeToAuthChanges } from './lib/subscribeToAuthChanges';
import type { UnsubscribeType, SessionType } from './types';

export function AuthProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<SessionType>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isRecovering, setIsRecovering] = useState(getInitialRecoveryState);

	useEffect(() => {
		let unsubscribe: UnsubscribeType = null;

		(async () => {
			const initialSession = await loadInitialSession();
			setSession(initialSession);
			setIsLoading(false);

			const handleAuthStateChange = createAuthStateChangeHandler({
				setSession,
				setIsRecovering,
			});

			unsubscribe = subscribeToAuthChanges(handleAuthStateChange);
		})();

		return () => unsubscribe?.();
	}, []);

	return (
		<AuthContext.Provider value={{ session, isLoading, isRecovering }}>
			{children}
		</AuthContext.Provider>
	);
}
