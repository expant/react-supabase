import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Input, Button, message } from 'antd';
import { signUp } from '../api/signUp';
import type { SignUpFormValues } from '../model/types';

export function SignUpForm() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleFinish = async (values: SignUpFormValues) => {
		try {
			setLoading(true);
			await signUp(values);
			navigate('/dashboard', { replace: true });
		} catch (error) {
			message.error('Ошибка при регистрации: ' + (error as Error).message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form<SignUpFormValues>
			layout='vertical'
			validateTrigger='onBlur'
			onFinish={handleFinish}
		>
			<Form.Item
				label='Email'
				name='email'
				rules={[{ required: true, message: 'Пожалуйста, введите свой email!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[
					{ required: true, message: 'Пожалуйста, введите свой пароль!' },
					{ min: 6, message: 'Пароль должен быть не менее 6 символов!' },
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item>
				<Button type='primary' htmlType='submit' loading={loading} block>
					Зарегистрироваться
				</Button>
			</Form.Item>
		</Form>
	);
}
