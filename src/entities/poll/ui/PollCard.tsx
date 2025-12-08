import { Button, Card, Radio, Skeleton } from 'antd';
// import type { RadioChangeEvent } from 'antd';
import type { PollCardProps } from '../model/types';
import styles from './PollCard.module.css';

export function PollCard({
	poll,
	value,
	disabled,
	isLoading,
}: // onChange,
// onCancel,
PollCardProps) {
	const { poll_options, question } = poll;

	const options = poll_options.map((option) => ({
		value: option.id,
		label: <div className={styles.option}>{option.text}</div>,
	}));

	// const handleChange = (e: RadioChangeEvent) => {
	// 	onChange(e.target.value);
	// };

	if (isLoading)
		return (
			<Card title={question} className={styles.card}>
				<Skeleton active />
			</Card>
		);

	return (
		<Card title={question} className={styles.card}>
			<Radio.Group
				value={value}
				options={options}
				onChange={() => {}}
				disabled={disabled}
				className={styles.options}
			/>

			{disabled && (
				<Button onClick={() => {}} className={styles.cancelButton}>
					Отменить голос
				</Button>
			)}
		</Card>
	);
}
