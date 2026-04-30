import { LogoutControl } from "@/features/auth/logout/ui/LogoutControl";
import { DeleteAccountControl } from "@/features/profile/delete-account/ui/DeleteAccountControl";
import { UpdateUsernameForm } from "@/features/profile/update-username/ui/UpdateUsernameForm";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { AvatarControls } from "@/features/profile/avatar-controls/ui/AvatarControls";
import { WarningIcon } from "@/shared/ui/icons/WarningIcon";
import styles from "./ProfileSettings.module.css";

export function ProfileSettings() {
  const { profile, isLoading, setUsername, refetchProfile } = useProfile();

  if (isLoading) {
    return (
      <div className={styles.card}>
        <div className={styles.skeleton} />
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Настройки профиля</div>

      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          <AvatarControls profile={profile} refetchProfile={refetchProfile} />
        </div>

        <div className={styles.rightContainer}>
          <UpdateUsernameForm profile={profile} setUsername={setUsername} />

          <div className={styles.dangerZone}>
            <div className={styles.divider} />
            <span className={styles.dangerLabel}>
              <WarningIcon />
              Опасная зона
            </span>
            <div className={styles.buttonsContainer}>
              <LogoutControl />
              <DeleteAccountControl />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
