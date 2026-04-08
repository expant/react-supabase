import { useEffect, useMemo, useRef, useState } from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";
import { LayoutHeader } from "@/widgets/layout-header/LayoutHeader";
import { LayoutFooter } from "@/widgets/layout-footer/LayoutFooter";
import { ProfileProvider } from "@/app/providers/profile/ProfileProvider";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { getBackgroundUrl } from "@/entities/profile/api/backgroundApi";
import styles from "./MainLayout.module.css";

const { Content } = Layout;

function useMainBackground() {
  const { profile } = useProfile();
  const mainRef = useRef<HTMLElement | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const handler = () => setVersion(Date.now());
    window.addEventListener("profile:background-updated", handler);
    return () => window.removeEventListener("profile:background-updated", handler);
  }, []);

  const backgroundUrl = useMemo(() => {
    if (!profile) return null;
    const base = getBackgroundUrl(profile.id);
    const v = version === 0 ? "" : `?v=${version}`;
    return `${base}${v}`;
  }, [profile, version]);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    if (!backgroundUrl) {
      el.style.removeProperty("background-image");
      return;
    }

    el.style.backgroundImage = `url("${backgroundUrl}")`;
  }, [backgroundUrl]);

  return mainRef;
}

export function MainLayout() {
  // используется внутри ProfileProvider (см. ниже)
  return (
    <ProfileProvider>
      <Layout className={styles.layout}>
        <LayoutHeader />
        <MainContent />
        <LayoutFooter />
      </Layout>
    </ProfileProvider>
  );
}

function MainContent() {
  const mainRef = useMainBackground();

  return (
    <Content ref={mainRef} className={styles.content}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </Content>
  );
}
