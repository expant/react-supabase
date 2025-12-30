import { Card, Flex } from "antd";
import { LoggoutButton } from "@/features/auth/logout/ui/LogoutButton";
import { UpdateEmailForm } from "@/features/profile/update-email/ui/UpdateEmailForm";
import { AvatarControls } from "@/features/profile/avatar-controls/ui/AvatarControls";
import { UpdateUsernameForm } from "@/features/profile/update-username/ui/UpdateUsernameForm";
import { DeleteAccountControl } from "@/features/profile/delete-account/ui/DeleteAccountControl";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { useUser } from "@/features/auth/model/hooks/useUser";
import styles from "./ProfileSettings.module.css";

export function ProfileSettings() {
  const user = useUser();
  const { profile, isLoading, setUsername, refetchProfile } = useProfile();

  if (!user) return null;

  return (
    <Card title="Настройки профиля" loading={isLoading}>
      <Flex gap="large" className={styles.container}>
        <Flex className={styles.avatarContainer}>
          <AvatarControls profile={profile} refetchProfile={refetchProfile} />
        </Flex>

        <Flex vertical gap="middle" className={styles.rightContainer}>
          <UpdateUsernameForm profile={profile} setUsername={setUsername} />
          <UpdateEmailForm email={user.email} />

          <Flex className={styles.buttonsContainer}>
            <LoggoutButton />
            <DeleteAccountControl />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
