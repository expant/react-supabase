import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { AuthProvider } from '@/features/auth/model/AuthProvider';
import { ErrorBoundary } from '@/shared/ui/error-boundary/ErrorBoundary';

function App() {
	return (
		<ErrorBoundary>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</ErrorBoundary>
	);
}

export default App;
