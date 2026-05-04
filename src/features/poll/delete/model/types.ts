export type DeletePollButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

export type DeletePollModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export type DeletePollControlProps = {
  pollId: number;
  onDeleted: () => void;
};

