import { Link } from "react-router";
import { Layout, Typography, Flex } from "antd";
import { UserPanel } from "@/widgets/user-panel/ui/UserPanel";
import { NavigationPanel } from "../navigation-panel/ui/NavigationPanel";
import styles from "./LayoutHeader.module.css";

const { Header } = Layout;
const { Title, Text } = Typography;

export function LayoutHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.inner}>
        <Link to={"/"} className={styles.brand}>
          <Title level={3} className={styles.brandTitle}>
            PollFeed
          </Title>
          <Text type="secondary" className={styles.brandSubtitle}>
            create • vote • share
          </Text>
        </Link>

        <Flex className={styles.right}>
          <NavigationPanel />
          <UserPanel />
        </Flex>
      </div>
    </Header>
  );
}
