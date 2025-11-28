import { Outlet, Navigate } from 'react-router';
import { FullPageSpinner } from '@/shared/layouts/FullPageSpinner/FullPageSpinner';
import { useAuth } from '@/features/auth/model/hooks/useAuth';

export function RecoveryRoute() {
	const { isLoading, session } = useAuth();

	if (isLoading) return <FullPageSpinner />;
	if (!session) return <Navigate to='/auth' replace />;

	return <Outlet />;
}
