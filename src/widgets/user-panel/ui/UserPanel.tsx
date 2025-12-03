import { Flex, Typography } from 'antd';
import { useUser } from '@/features/auth/model/hooks/useUser';
import { LoggoutButton } from '@/features/auth/logout/ui/LogoutButton';
import styles from './UserPanel.module.css';

const { Text } = Typography;

export function UserPanel() {
	const user = useUser();

	return (
		<Flex className={styles.userPanel}>
			<Text className={styles.email}>{user.email}</Text>
			<LoggoutButton />
		</Flex>
	);
}
