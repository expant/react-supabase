import { Routes, Route, Navigate } from 'react-router';
import { AuthPage } from '@/pages/auth/ui/AuthPage/AuthPage';
import { PrivateRoute } from '../guards/PrivateRoute';
import { PublicRoute } from '../guards/PublicRoute';
import { DashboardPage } from '@/pages/dashboard/ui/DashboardPage';
import { NotFoundPage } from '@/pages/not-found/ui/NotFoundPage';
import { ResetPasswordPage } from '@/pages/auth/ui/ResetPasswordPage/ResetPasswordPage';
import { NewPasswordPage } from '@/pages/auth/ui/NewPasswordPage/NewPasswordPage';

export function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/auth' replace />} />

			<Route path='auth'>
				<Route element={<PublicRoute />}>
					<Route index element={<AuthPage />} />
					<Route path='reset-password' element={<ResetPasswordPage />} />
				</Route>

				<Route element={<PrivateRoute />}>
					<Route path='new-password' element={<NewPasswordPage />} />
				</Route>
			</Route>

			<Route element={<PrivateRoute />}>
				<Route path='dashboard' element={<DashboardPage />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}
