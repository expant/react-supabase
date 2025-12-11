import { useState } from 'react';
import { Button } from 'antd';
import { CreatePollModal } from './CreatePollModal/CreatePollModal';

export function CreatePollButton() {
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => setIsOpen(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)} size='large' type='primary'>
				Создать опрос
			</Button>
			<CreatePollModal isOpen={isOpen} onClose={closeModal} />
		</>
	);
}
