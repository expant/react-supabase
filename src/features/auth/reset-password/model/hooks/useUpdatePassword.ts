import { useState } from 'react';
import { message } from 'antd';
import { updatePassword } from '../../api/updatePassword';

export function useResetPassword() {
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleReset = async ({ password }: { password: string }) => {
		try {
			setLoading(true);
			await updatePassword(password);
			setIsSuccess(true);
		} catch (err) {
			message.error(
				err instanceof Error ? err.message : 'Ошибка при изменении пароля'
			);
		} finally {
			setLoading(false);
		}
	};

	return { handleReset, loading, isSuccess };
}
