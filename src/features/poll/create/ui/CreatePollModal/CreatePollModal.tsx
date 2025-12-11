import { Modal } from 'antd';
import { CreatePollForm } from '../CreatePollForm/CreatePollForm';
import type { CreatePollModalProps } from '../../model/types';

export function CreatePollModal({
	isOpen,
	onClose,
	onCreated,
}: CreatePollModalProps) {
	if (!isOpen) return null;

	return (
		<Modal open={isOpen} onCancel={onClose} footer={null} centered>
			<CreatePollForm onCloseModal={onClose} onCreated={onCreated} />
		</Modal>
	);
}
