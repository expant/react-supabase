import { Form, Input, Button } from 'antd';
import { useSignUp } from '../model/hooks/useSignUp';
import type { SignUpFormValues } from '../model/types';

export function SignUpForm() {
	const { handleSignUp, loading } = useSignUp();

	return (
		<Form<SignUpFormValues>
			layout='vertical'
			validateTrigger='onBlur'
			onFinish={handleSignUp}
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
