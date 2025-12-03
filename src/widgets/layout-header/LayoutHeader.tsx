import { Layout, Typography } from 'antd';
import { UserPanel } from '@/widgets/user-panel/ui/UserPanel';
import styles from './LayoutHeader.module.css';

const { Header } = Layout;
const { Title } = Typography;

export function LayoutHeader() {
	return (
		<Header className={styles.header}>
			<Title level={2} className={styles.title}>
				Polls
			</Title>
			<UserPanel />
		</Header>
	);
}
