import { Outlet, Navigate } from 'react-router';
import { FullPageSpinner } from '@/shared/layouts/FullPageSpinner/FullPageSpinner';
import { useAuth } from '@/features/auth/model/hooks/useAuth';

export function PublicRoute() {
	const { session, isLoading } = useAuth();

	if (isLoading) {
		return <FullPageSpinner />;
	}

	return !session ? <Outlet /> : <Navigate to='/feed' replace />;
}
