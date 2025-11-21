import { Link } from 'react-router';
import { Form, Input, Button } from 'antd';
import { useSignIn } from '../model/hooks/useSignIn';
import styles from './SignInForm.module.css';
import type { SignInFormValues } from '../model/types';

export function SignInForm() {
	const { handleSignIn, loading } = useSignIn();

	return (
		<Form<SignInFormValues>
			layout='vertical'
			validateTrigger='onBlur'
			onFinish={handleSignIn}
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
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item className={styles.buttonItem}>
				<Button type='primary' htmlType='submit' loading={loading} block>
					Войти
				</Button>

				<div className={styles.resetPasswordLink}>
					<Link to='/auth/reset-password'>Забыли пароль?</Link>
				</div>
			</Form.Item>
		</Form>
	);
}
