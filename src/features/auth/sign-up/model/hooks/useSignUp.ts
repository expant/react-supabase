import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../../api/signUp';
import { message } from 'antd';
import type { SignUpFormValues } from '../types';

export function useSignUp() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSignUp = async (values: SignUpFormValues) => {
		try {
			setLoading(true);
			await signUp(values);
			navigate('/dashboard', { replace: true });
		} catch (error) {
			message.error(
				error instanceof Error ? error.message : 'Ошибка регистрации'
			);
		} finally {
			setLoading(false);
		}
	};

	return { handleSignUp, loading };
}
