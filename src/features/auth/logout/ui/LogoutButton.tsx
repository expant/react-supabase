import { useNavigate } from "react-router";
import { Button } from "antd";
import { logout } from "../api/logout";

export function LoggoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/auth");
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={handleLogout}>Выйти из аккаунта</Button>;
}
