import { Card, Flex } from "antd";
import { LoggoutButton } from "@/features/auth/logout/ui/LogoutButton";
import { DeleteAccountControl } from "@/features/profile/delete-account/ui/DeleteAccountControl";
import { UpdateUsernameForm } from "@/features/profile/update-username/ui/UpdateUsernameForm";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { AvatarControls } from "@/features/profile/avatar-controls/ui/AvatarControls";
import { BackgroundControls } from "@/features/profile/background-controls/ui/BackgroundControls";
import styles from "./ProfileSettings.module.css";

export function ProfileSettings() {
  const { profile, isLoading, setUsername, refetchProfile } = useProfile();

  return (
    <Card title="Настройки профиля" loading={isLoading}>
      <Flex gap="large" className={styles.container}>
        <Flex className={styles.avatarContainer}>
          <AvatarControls profile={profile} refetchProfile={refetchProfile} />
        </Flex>

        <Flex vertical gap="middle" className={styles.rightContainer}>
          <UpdateUsernameForm profile={profile} setUsername={setUsername} />

          <BackgroundControls profile={profile} />

          <Flex className={styles.buttonsContainer}>
            <LoggoutButton />
            <DeleteAccountControl />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
