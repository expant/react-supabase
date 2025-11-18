import { MainLayout } from '@/shared/layouts/MainLayout/MainLayout';
import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { AuthProvider } from '@/features/auth/model/AuthProvider';

function App() {
	return (
		<AuthProvider>
			<MainLayout>
				<AppRouter />
			</MainLayout>
		</AuthProvider>
	);
}

export default App;
