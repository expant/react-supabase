import { Outlet, Navigate } from 'react-router';
import { Spin } from 'antd';
import { useAuth } from '@/features/auth/model/hooks/useAuth';

export function PrivateRoute() {
	const { session, isLoading, isRecovering } = useAuth();

	if (isLoading) return <Spin size='large' />;
	if (!session) return <Navigate to='/auth' replace />;

	if (isRecovering) return <Navigate to='/auth/new-password' replace />;

	return <Outlet />;
}
