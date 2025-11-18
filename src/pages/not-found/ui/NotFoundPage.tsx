import { Typography, Flex } from 'antd';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
	return (
		<Flex justify='center' align='center' className={styles.wrapper}>
			<Typography.Title className={styles.title}>
				404 - Page Not Found
			</Typography.Title>
		</Flex>
	);
}
