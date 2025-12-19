import { Card } from "antd";
import { LoggoutButton } from "@/features/auth/logout/ui/LogoutButton";
import { UpdateUsernameForm } from "@/features/profile/update-username/ui/UpdateUsernameForm";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import styles from "./ProfilePage.module.css";

export function ProfilePage() {
  const { profile, setUsername, isLoading } = useProfile();

  return (
    <Card
      title="Настройки профиля"
      loading={isLoading}
      className={styles.profileCard}
    >
      <UpdateUsernameForm profile={profile} setUsername={setUsername} />
      <LoggoutButton />
    </Card>
  );
}
