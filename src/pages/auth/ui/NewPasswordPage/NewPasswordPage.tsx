import { Flex } from 'antd';
import { NewPasswordForm } from '@/features/auth/reset-password/ui/NewPasswordForm';
import styles from './NewPasswordPage.module.css';

export function NewPasswordPage() {
	return (
		<Flex justify='center' align='center' className={styles.newPasswordPage}>
			<NewPasswordForm />
		</Flex>
	);
}
