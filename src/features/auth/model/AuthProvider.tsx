import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from './context';
import { loadInitialSession } from './lib/loadInitialSession';
import { subscribeToAuthChanges } from './lib/subscribeToAuthChanges';
import type { Session } from '@supabase/supabase-js';

export function AuthProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<Session | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let unsubscribe: (() => void) | null = null;

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
