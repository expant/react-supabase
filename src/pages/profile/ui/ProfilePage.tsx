import { useState } from "react";
import type { ReactNode } from "react";
import { Layout, Menu, Empty } from "antd";
import { UserPolls } from "@/widgets/user-polls/ui/UserPolls";
import { ProfileSettings } from "@/widgets/profile/settings/ui/ProfileSettings";
import styles from "./ProfilePage.module.css";

const { Sider, Content } = Layout;

export function ProfilePage() {
  const [currentMenuKey, setCurrentMenuKey] = useState("settings");

  const contentMap: Record<string, ReactNode> = {
    settings: <ProfileSettings />,
    userPolls: <UserPolls />,
  };

  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sider} theme="light">
        <Menu
          mode="inline"
          selectedKeys={[currentMenuKey]}
          onClick={({ key }) => setCurrentMenuKey(key)}
          items={[{ key: "settings", label: "Настройки" }, { key: "userPolls", label: "Мои опросы" }]}
        ></Menu>
      </Sider>

      <Content>
        {contentMap[currentMenuKey] || <Empty description="Нет данных" />}
      </Content>
    </Layout>
  );
}
