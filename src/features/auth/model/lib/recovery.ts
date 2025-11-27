import { AUTH_RECOVERY_STORAGE_KEY } from '../constants';

export function startRecovery(setIsRecovering: (v: boolean) => void) {
	localStorage.setItem(AUTH_RECOVERY_STORAGE_KEY, 'true');
	setIsRecovering(true);
}

export function endRecovery(setIsRecovering: (v: boolean) => void) {
	localStorage.setItem(AUTH_RECOVERY_STORAGE_KEY, 'false');
	setIsRecovering(false);
}

export function getInitialRecoveryState(): boolean {
	return localStorage.getItem(AUTH_RECOVERY_STORAGE_KEY) === 'true';
}
