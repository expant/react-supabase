import { Card, Space } from "antd";
import { LoggoutButton } from "@/features/auth/logout/ui/LogoutButton";
import { DeleteAccountControl } from "@/features/profile/delete-account/ui/DeleteAccountControl";
import { UpdateUsernameForm } from "@/features/profile/update-username/ui/UpdateUsernameForm";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
// import styles from "./ProfileSettings.module.css";

export function ProfileSettings() {
  const { profile, isLoading, setUsername } = useProfile();

  return (
    <Card title="Настройки профиля" loading={isLoading}>
      <UpdateUsernameForm profile={profile} setUsername={setUsername} />
      <Space direction="vertical">
        <LoggoutButton />
        <DeleteAccountControl />
      </Space>
    </Card>
  );
}
