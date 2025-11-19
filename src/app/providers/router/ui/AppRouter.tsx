import { Routes, Route, Navigate } from 'react-router';
import { AuthPage } from '@/pages/auth/ui/AuthPage';
import { PrivateRoute } from '../guards/PrivateRoute';
import { PublicRoute } from '../guards/PublicRoute';
import { DashboardPage } from '@/pages/dashboard/ui/DashboardPage';
import { NotFoundPage } from '@/pages/not-found/ui/NotFoundPage';

export function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/auth' replace />} />
			<Route path='*' element={<NotFoundPage />} />

			<Route element={<PublicRoute />}>
				<Route path='/auth' element={<AuthPage />} />
			</Route>

			<Route element={<PrivateRoute />}>
				<Route path='/dashboard' element={<DashboardPage />} />
			</Route>
		</Routes>
	);
}
