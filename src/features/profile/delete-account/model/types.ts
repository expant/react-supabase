export type DeleteAccountButtonProps = {
  onClick: () => void;
};

export type DeleteAccountModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onDelete: () => void;
};
