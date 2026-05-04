import { useState } from "react";
import { useUser } from "@/features/auth/model/hooks/useUser";
import { usePolls } from "@/entities/poll/model/hooks/usePolls";
import { UserPolls } from "@/widgets/user-polls/ui/UserPolls";
import { ProfileSettings } from "@/widgets/profile/settings/ui/ProfileSettings";
import { PollsIcon } from "@/shared/ui/icons/PollsIcon";
import { SettingsIcon } from "@/shared/ui/icons/SettingsIcon";
import type { ReactNode } from "react";
import styles from "./ProfilePage.module.css";

type MenuKey = "settings" | "userPolls";

export function ProfilePage() {
  const [currentMenuKey, setCurrentMenuKey] = useState<MenuKey>("settings");

  const user = useUser();
  const { polls } = usePolls();

  const userPolls = polls.filter((p) => p.author_id === user.id);

  const contentMap: Record<string, ReactNode> = {
    settings: <ProfileSettings />,
    userPolls: <UserPolls />,
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sider}>
        <span className={styles.sectionLabel}>Аккаунт</span>

        <button
          className={`${styles.menuItem} ${currentMenuKey === "settings" ? styles.menuItemActive : ""}`}
          onClick={() => setCurrentMenuKey("settings")}
        >
          <SettingsIcon />
          Настройки
        </button>

        <button
          className={`${styles.menuItem} ${currentMenuKey === "userPolls" ? styles.menuItemActive : ""}`}
          onClick={() => setCurrentMenuKey("userPolls")}
        >
          <PollsIcon />
          Мои опросы
          <span className={styles.badge}>{userPolls.length}</span>
        </button>
      </aside>

      <main className={styles.content}>{contentMap[currentMenuKey]}</main>
    </div>
  );
}
