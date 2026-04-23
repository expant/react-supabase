import { Link } from "react-router";
import { Layout, Flex } from "antd";
import { UserPanel } from "@/widgets/user-panel/ui/UserPanel";
import { NavigationPanel } from "../navigation-panel/ui/NavigationPanel";
import styles from "./LayoutHeader.module.css";

const { Header } = Layout;

export function LayoutHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.inner}>
        <Link to={"/"} className={styles.logo}>
          <div className={styles.logoMark}>P</div>
          <h1 className={styles.logoText}>PollFeed</h1>
        </Link>

        <Flex className={styles.right}>
          <NavigationPanel />
          <UserPanel />
        </Flex>
      </div>
    </Header>
  );
}
