import { Outlet } from 'react-router';
import { Layout } from 'antd';
import { LayoutHeader } from '@/widgets/layout-header/LayoutHeader';
import { LayoutFooter } from '@/widgets/layout-footer/LayoutFooter';
import styles from './MainLayout.module.css';

const { Content } = Layout;

export function MainLayout() {
	return (
		<Layout className={styles.layout}>
			<LayoutHeader />
			<Content>
				<Outlet />
			</Content>
			<LayoutFooter />
		</Layout>
	);
}
