import { Routes, Route, Navigate } from 'react-router';
import { AuthPage } from '@/pages/auth/ui/AuthPage';
import { PrivateRoute } from '../guards/PrivateRoute';
import { DashboardPage } from '@/pages/dashboard/ui/DashboardPage';
import { NotFoundPage } from '@/pages/not-found/ui/NotFoundPage';

export function AppRouter() {
	return (
		<Routes>
			<Route path='/auth' element={<AuthPage />} />
			<Route path='/' element={<Navigate to='/dashboard' replace />} />
			<Route path='*' element={<NotFoundPage />} />

			<Route element={<PrivateRoute />}>
				<Route path='/dashboard' element={<DashboardPage />} />
			</Route>
		</Routes>
	);
}
