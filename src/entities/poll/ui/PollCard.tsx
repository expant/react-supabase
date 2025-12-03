import { Card } from 'antd';
import type { PollCardProps } from '../model/types';
import styles from './PollCard.module.css';

export function PollCard({ poll }: PollCardProps) {
	const { poll_options, question } = poll;

	return (
		<Card title={question} className={styles.card}>
			{poll_options.map((option) => {
				return <p key={option.id}>{option.text}</p>;
			})}
		</Card>
	);
}
