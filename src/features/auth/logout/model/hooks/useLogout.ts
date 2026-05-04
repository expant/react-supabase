import { useState } from "react";
import { useNavigate } from "react-router";
import { message } from "antd";
import { logout } from "../../api/logout";

export function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      await logout();
      navigate("/auth");
    } catch (e) {
      message.error(e instanceof Error ? e.message : "Ошибка выхода из аккаунта");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleLogout };
}
