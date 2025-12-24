import { Link } from "react-router";
import { Layout, Typography, Flex } from "antd";
import { UserPanel } from "@/widgets/user-panel/ui/UserPanel";
import { NavigationPanel } from "../navigation-panel/ui/NavigationPanel";
import styles from "./LayoutHeader.module.css";

const { Header } = Layout;
const { Title } = Typography;

export function LayoutHeader() {
  return (
    <Header className={styles.header}>
      <Title level={2} className={styles.title}>
        <Link to={"/"}>Опросы</Link>
      </Title>

      <Flex className={styles.right}>
        <NavigationPanel />
        <UserPanel />
      </Flex>
    </Header>
  );
}
