import { useState } from 'react';
import { message } from 'antd';
import { sendResetEmail } from '../../api/sendResetEmail';

export function useResetPassword() {
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleReset = async ({ email }: { email: string }) => {
		try {
			setLoading(true);
			await sendResetEmail(email);
			setIsSuccess(true);
		} catch (err) {
			message.error(
				err instanceof Error ? err.message : 'Ошибка сброса пароля'
			);
		} finally {
			setLoading(false);
		}
	};

	return { handleReset, loading, isSuccess };
}
