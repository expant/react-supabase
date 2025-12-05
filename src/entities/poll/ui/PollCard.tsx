import { Button, Card, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type { PollCardProps } from '../model/types';
import styles from './PollCard.module.css';

export function PollCard({
	poll,
	value,
	disabled,
	onChange,
	onCancel,
}: PollCardProps) {
	const { poll_options, question } = poll;

	const options = poll_options.map((option) => ({
		value: option.id,
		label: <div className={styles.option}>{option.text}</div>,
	}));

	const handleChange = (e: RadioChangeEvent) => {
		onChange(e.target.value);
	};

	return (
		<Card title={question} className={styles.card}>
			<Radio.Group
				value={value}
				options={options}
				onChange={handleChange}
				disabled={disabled}
				className={styles.options}
			/>

			{disabled && (
				<Button onClick={onCancel} className={styles.cancelButton}>
					Отменить голос
				</Button>
			)}
		</Card>
	);
}
