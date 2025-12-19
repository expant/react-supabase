import { Routes, Route, Navigate } from 'react-router';
import { AuthPage } from '@/pages/auth/ui/AuthPage/AuthPage';
import { PrivateRoute } from '../guards/PrivateRoute';
import { PublicRoute } from '../guards/PublicRoute';
import { RecoveryRoute } from '../guards/RecoveryRoute';
import { FeedPage } from '@/pages/feed/ui/FeedPage';
import { NotFoundPage } from '@/pages/not-found/ui/NotFoundPage';
import { ResetPasswordPage } from '@/pages/auth/ui/ResetPasswordPage/ResetPasswordPage';
import { NewPasswordPage } from '@/pages/auth/ui/NewPasswordPage/NewPasswordPage';
import { ProfilePage } from '@/pages/profile/ui/ProfilePage';
import { MainLayout } from '@/shared/layouts/MainLayout/ui/MainLayout';
import { AuthLayout } from '@/shared/layouts/AuthLayout/AuthLayout';

export function AppRouter() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/auth' replace />} />

			<Route path='auth'>
				<Route element={<AuthLayout />}>
					<Route element={<PublicRoute />}>
						<Route index element={<AuthPage />} />
						<Route path='reset-password' element={<ResetPasswordPage />} />
					</Route>

					<Route element={<RecoveryRoute />}>
						<Route path='new-password' element={<NewPasswordPage />} />
					</Route>
				</Route>
			</Route>

			<Route element={<PrivateRoute />}>
				<Route element={<MainLayout />}>
					<Route path='feed' element={<FeedPage />} />
					<Route path='profile' element={<ProfilePage />} />
				</Route>
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}
