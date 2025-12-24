import { Link, useLocation } from "react-router";
import { Flex } from "antd";

export function NavigationPanel() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Flex>
      {pathname !== "/feed" && <Link to="/feed">Лента опросов</Link>}
      {pathname !== "/profile" && <Link to="/profile">Профиль</Link>}
    </Flex>
  );
}
