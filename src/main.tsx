import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App as AntApp, ConfigProvider } from 'antd';
import './index.css';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ConfigProvider>
			<BrowserRouter>
				<AntApp>
					<App />
				</AntApp>
			</BrowserRouter>
		</ConfigProvider>
	</StrictMode>
);
