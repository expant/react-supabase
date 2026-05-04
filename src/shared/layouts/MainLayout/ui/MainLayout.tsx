import { Outlet } from "react-router";
import { Layout } from "antd";
import { LayoutHeader } from "@/widgets/layout-header/LayoutHeader";
import { ProfileProvider } from "@/app/providers/profile/ProfileProvider";
import styles from "./MainLayout.module.css";

const { Content } = Layout;

export function MainLayout() {
  return (
    <ProfileProvider>
      <Layout className={styles.layout}>
        <LayoutHeader />
        <Content className={styles.content}>
          <div className={styles.container}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </ProfileProvider>
  );
}
