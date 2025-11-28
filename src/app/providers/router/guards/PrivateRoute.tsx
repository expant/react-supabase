import { Outlet, Navigate } from 'react-router';
import { FullPageSpinner } from '@/shared/layouts/FullPageSpinner/FullPageSpinner';
import { useAuth } from '@/features/auth/model/hooks/useAuth';

export function PrivateRoute() {
	const { session, isLoading, isRecovering } = useAuth();

	if (isLoading) return <FullPageSpinner />;
	if (!session) return <Navigate to='/auth' replace />;

	if (isRecovering) return <Navigate to='/auth/new-password' replace />;

	return <Outlet />;
}
