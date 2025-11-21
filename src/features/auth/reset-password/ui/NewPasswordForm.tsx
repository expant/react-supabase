import { Link } from 'react-router';
import { Form, Input, Button, Typography } from 'antd';
import { useResetPassword } from '../model/hooks/useResetPassword';

const { Paragraph } = Typography;

export function NewPasswordForm() {
	const { handleReset, loading, isSuccess } = useResetPassword();

	if (isSuccess) {
		return (
			<div>
				<Paragraph>Пароль успешно изменен.</Paragraph>
				<Link to='/auth'>Вернутся на страницу входа.</Link>
			</div>
		);
	}

	return (
		<Form layout='vertical' validateTrigger='onBlur' onFinish={handleReset}>
			<Form.Item
				label='Новый пароль'
				name='password'
				rules={[
					{ required: true, message: 'Пожалуйста, введите новый пароль!' },
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item>
				<Button type='primary' htmlType='submit' loading={loading} block>
					Сохранить
				</Button>
			</Form.Item>
		</Form>
	);
}
