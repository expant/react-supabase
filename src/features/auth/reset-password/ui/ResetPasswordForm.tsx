import { Form, Input, Button, Typography } from 'antd';
import { useResetPassword } from '../model/hooks/useResetPassword';

const { Paragraph } = Typography;

export function ResetPasswordForm() {
	const { handleReset, loading, isSuccess } = useResetPassword();

	if (isSuccess) {
		return (
			<div>
				<Paragraph>
					Если указанный вами email зарегистрирован, мы отправили на него письмо
					со ссылкой для сброса пароля.
				</Paragraph>
				<Paragraph>Проверьте вашу почту.</Paragraph>
			</div>
		);
	}

	return (
		<Form layout='vertical' validateTrigger='onBlur' onFinish={handleReset}>
			<Form.Item
				label='email для сброса пароля'
				name='email'
				rules={[{ required: true, message: 'Пожалуйста, введите свой email!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item>
				<Button type='primary' htmlType='submit' loading={loading} block>
					Сбросить пароль
				</Button>
			</Form.Item>
		</Form>
	);
}
