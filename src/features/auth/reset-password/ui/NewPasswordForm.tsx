import { Form, Input, Button } from 'antd';
import { useUpdatePassword } from '../model/hooks/useUpdatePassword';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export function NewPasswordForm() {
	const { handleUpdate, loading, isSuccess } = useUpdatePassword();
	const navigate = useNavigate();

	useEffect(() => {
		if (isSuccess) {
			navigate('/feed');
		}
	}, [isSuccess, navigate]);

	return (
		<Form layout='vertical' validateTrigger='onBlur' onFinish={handleUpdate}>
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
