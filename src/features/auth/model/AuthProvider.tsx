import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from './context';
import { loadInitialSession } from './lib/loadInitialSession';
import { subscribeToAuthChanges } from './lib/subscribeToAuthChanges';
import type { UnsubscribeType, SessionType } from './types';

export function AuthProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<SessionType>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let unsubscribe: UnsubscribeType = null;

		(async () => {
			const initialSession = await loadInitialSession();
			setSession(initialSession);
			setIsLoading(false);

			unsubscribe = subscribeToAuthChanges((_event, updatedSession) => {
				setSession(updatedSession);
			});
		})();

		return () => unsubscribe?.();
	}, []);

	return (
		<AuthContext.Provider value={{ session, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}
