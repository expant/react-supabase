import { MainLayout } from '@/shared/layouts/MainLayout/MainLayout';
import { AppRouter } from '@/app/providers/router/ui/AppRouter';

function App() {
	return (
		<MainLayout>
			<AppRouter />
		</MainLayout>
	);
}

export default App;
