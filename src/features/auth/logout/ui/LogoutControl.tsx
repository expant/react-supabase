import { useState } from "react";
import { LogoutButton } from "./LogoutButton";
import { LogoutModal } from "./LogoutModal";
import { useLogout } from "../model/hooks/useLogout";

export function LogoutControl() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, handleLogout } = useLogout();

  return (
    <>
      <LogoutButton onClick={() => setIsOpen(true)} />
      <LogoutModal
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={() => setIsOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
}
