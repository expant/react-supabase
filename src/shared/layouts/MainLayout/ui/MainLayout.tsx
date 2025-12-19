import { Outlet } from "react-router";
import { Layout } from "antd";
import { LayoutHeader } from "@/widgets/layout-header/LayoutHeader";
import { LayoutFooter } from "@/widgets/layout-footer/LayoutFooter";
import { ProfileProvider } from "@/app/providers/profile/ProfileProvider";
import styles from "./MainLayout.module.css";

const { Content } = Layout;

export function MainLayout() {
  return (
    <ProfileProvider>
      <Layout className={styles.layout}>
        <LayoutHeader />
        <Content className={styles.content}>
          <Outlet />
        </Content>
        <LayoutFooter />
      </Layout>
    </ProfileProvider>
  );
}
