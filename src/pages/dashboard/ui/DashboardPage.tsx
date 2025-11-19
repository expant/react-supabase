import { Flex } from 'antd';
import { UserPanel } from '@/widgets/user-panel/ui/UserPanel';
import styles from './DashboardPage.module.css';

export function DashboardPage() {
	return (
		<Flex className={styles.dashboard}>
			<UserPanel />
		</Flex>
	);
}
