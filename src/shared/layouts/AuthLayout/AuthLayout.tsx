import { Outlet } from 'react-router';
import { Layout } from 'antd';
import styles from './AuthLayout.module.css';

const { Content } = Layout;

export function AuthLayout() {
	return (
		<Layout className={styles.layout}>
			<Content>
				<Outlet />
			</Content>
		</Layout>
	);
}
