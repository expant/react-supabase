import { Form, Input, Button, Space, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useCreatePollForm } from '../../model/hooks/useCreatePollForm';
import type { CreatePollFormProps } from '../../model/types';
import styles from './CreatePollForm.module.css';

const { Title } = Typography;

export function CreatePollForm({
	onCloseModal,
	onCreated,
}: CreatePollFormProps) {
	const {
		form,
		options,
		isLoading,
		submit,
		addOption,
		handleOptionChange,
		removeOption,
		canRemoveOption,
	} = useCreatePollForm();

	const handleFinish = async () => {
		await submit();
		onCreated();
		onCloseModal();
	};

	return (
		<Form
			form={form}
			layout='vertical'
			onFinish={handleFinish}
			initialValues={{
				question: '',
				options: options,
			}}
		>
			<Title level={4}>Создать опрос</Title>

			<Form.Item
				label='Вопрос'
				name='question'
				rules={[{ required: true, message: 'Введите вопрос' }]}
			>
				<Input />
			</Form.Item>

			{options.map((option, idx) => (
				<Space key={idx} align='baseline' className={styles.option}>
					<Form.Item
						name={['options', idx]}
						rules={[{ required: true, message: 'Введите вариант' }]}
						className={styles.optionInput}
					>
						<Input
							placeholder={`Вариант ${idx + 1}`}
							value={option}
							onChange={(e) => handleOptionChange(idx, e.target.value)}
						/>
					</Form.Item>

					{canRemoveOption(options.length, idx) && (
						<Button
							onClick={() => removeOption(idx)}
							icon={<DeleteOutlined />}
							danger
						/>
					)}
				</Space>
			))}

			{options.length <= 10 && (
				<Form.Item>
					<Button type='dashed' onClick={addOption} block>
						Добавить вариант
					</Button>
				</Form.Item>
			)}

			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					block
					disabled={isLoading}
					loading={isLoading}
				>
					Создать опрос
				</Button>
			</Form.Item>
		</Form>
	);
}
