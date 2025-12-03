import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { AuthProvider } from '@/features/auth/model/AuthProvider';

function App() {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
}

export default App;
