import { Outlet } from 'react-router';
import { useAuth } from '@/features/auth/model/hooks/useAuth';
import { Spin } from 'antd';
import { Navigate } from 'react-router';

export function RecoveryRoute() {
	const { isLoading, session } = useAuth();

	if (isLoading) return <Spin size='large' />;
	if (!session) return <Navigate to='/auth' replace />;

	return <Outlet />;
}
