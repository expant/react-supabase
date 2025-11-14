import { Tabs, Flex } from 'antd';
import { authTabs } from '../model/tabs';
import styles from './AuthPage.module.css';

export function AuthPage() {
	return (
		<Flex justify='center' align='center' className={styles.authPage}>
			<Tabs defaultActiveKey='1' items={authTabs} className={styles.tabs} />
		</Flex>
	);
}
