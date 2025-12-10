import { Button, Card, Radio, Skeleton } from 'antd';
import { getPollViewModel } from '../model/lib/getPollViewModel';
import type { PollCardProps } from '../model/types';
import styles from './PollCard.module.css';

export function PollCard({
	poll,
	value,
	disabled,
	isLoading,
	onChange,
	onCancel,
}: PollCardProps) {
	const { question, options, handleChange } = getPollViewModel(poll, onChange);

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
