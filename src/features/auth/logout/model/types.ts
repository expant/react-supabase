export type LogoutModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onLogout: () => void;
};

export type LogoutButtonProps = {
  onClick: () => void;
};
