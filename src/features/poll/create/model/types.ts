export type CreatePollModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onCreated: () => void;
};

export type CreatePollFormProps = {
	onCloseModal: () => void;
	onCreated: () => void;
};

export type CreatePollButtonProps = {
	onCreated: () => void;
};
