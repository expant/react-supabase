import { Flex } from 'antd';
import { ResetPasswordForm } from '@/features/auth/reset-password/ui/ResetPasswordForm';
import styles from './ResetPasswordPage.module.css';

export function ResetPasswordPage() {
	return (
		<Flex justify='center' align='center' className={styles.resetPasswordPage}>
			<ResetPasswordForm />
		</Flex>
	);
}
