import { Outlet, Navigate } from 'react-router';
import { Spin } from 'antd';
import { useAuth } from '@/features/auth/model/hooks/useAuth';

export function PrivateRoute() {
	const { session, isLoading } = useAuth();

	if (isLoading) {
		return <Spin size='large' />;
	}

	return session ? <Outlet /> : <Navigate to='/auth' replace />;
}
