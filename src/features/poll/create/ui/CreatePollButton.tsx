import { useState } from 'react';
import { Button } from 'antd';
import { CreatePollModal } from './CreatePollModal/CreatePollModal';
import type { CreatePollButtonProps } from '../model/types';

export function CreatePollButton({ onCreated }: CreatePollButtonProps) {
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => setIsOpen(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)} size='large' type='primary'>
				Создать опрос
			</Button>
			<CreatePollModal
				isOpen={isOpen}
				onClose={closeModal}
				onCreated={onCreated}
			/>
		</>
	);
}
