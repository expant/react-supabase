import { startRecovery, endRecovery } from './recovery';
import type {
	createAuthStateChangeHandlerDeps,
	AuthEventType,
	SessionType,
} from '../types';

export function createAuthStateChangeHandler({
	setSession,
	setIsRecovering,
}: createAuthStateChangeHandlerDeps) {
	return (event: AuthEventType, session: SessionType) => {
		setSession(session);

		switch (event) {
			case 'PASSWORD_RECOVERY':
				startRecovery(setIsRecovering);
				break;

			case 'USER_UPDATED':
			case 'SIGNED_OUT':
				endRecovery(setIsRecovering);
				break;

			default:
				break;
		}
	};
}
