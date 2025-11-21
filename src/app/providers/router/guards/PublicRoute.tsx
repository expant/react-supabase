import { Outlet, Navigate } from 'react-router';
import { Spin } from 'antd';
import { useAuth } from '@/features/auth/model/hooks/useAuth';

export function PublicRoute() {
	const { session, isLoading, isRecovering } = useAuth();

	if (isLoading) {
		return <Spin size='large' />;
	}

	console.log(isRecovering);

	if (location.pathname.startsWith('/auth/new-password')) {
		return <Outlet />;
	}

	return !session ? <Outlet /> : <Navigate to='/dashboard' replace />;
}
