import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signIn } from '../../api/signIn';
import { message } from 'antd';
import type { SignInFormValues } from '../types';

export function useSignIn() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSignIn = async (values: SignInFormValues) => {
		try {
			setLoading(true);

			await signIn(values);

			navigate('/dashboard', { replace: true });
		} catch (error) {
			message.error(error instanceof Error ? error.message : 'Ошибка входа');
		} finally {
			setLoading(false);
		}
	};

	return { handleSignIn, loading };
}
