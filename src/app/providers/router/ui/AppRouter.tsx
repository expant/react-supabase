import { Routes, Route } from 'react-router';
import { AuthPage } from '@/pages/auth/ui/AuthPage';
import { DashboardPage } from '@/pages/dashboard/ui/DashboardPage';

export function AppRouter() {
	return (
		<Routes>
			<Route path='/auth' element={<AuthPage />}></Route>
			<Route path='/dashboard' element={<DashboardPage />}></Route>
		</Routes>
	);
}
