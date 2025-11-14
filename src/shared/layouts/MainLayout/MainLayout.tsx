import type { ReactElement } from 'react';
import { Layout } from 'antd';
import styles from './MainLayout.module.css';

export function MainLayout({ children }: { children: ReactElement }) {
	return <Layout className={styles.layout}>{children}</Layout>;
}
