import { Flex, Spin } from 'antd';
import styles from './FullPageSpinner.module.css';

export function FullPageSpinner() {
	return (
		<Flex className={styles.fullPageSpinner}>
			<Spin size='large' />
		</Flex>
	);
}
