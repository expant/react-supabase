import { Link } from "react-router";
import { Flex, Typography } from "antd";
import { UserAvatar } from "@/shared/ui/user-avatar/UserAvatar";
import { UserPanelSkeleton } from "@/shared/ui/skeletons/user-panel-skeleton/UserPanelSkeleton";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { getAvatarUrl } from "@/entities/profile/api/avatarApi";
import styles from "./UserPanel.module.css";

const { Text } = Typography;

export function UserPanel() {
  const { profile, isLoading } = useProfile();

  return (
    <Flex className={styles.userPanel}>
      {!profile || isLoading ? (
        <UserPanelSkeleton />
      ) : (
        <>
          <Text className={styles.usernameLabel}>{profile.username}</Text>
          <Link to="/profile">
            <UserAvatar
              username={profile.username}
              src={getAvatarUrl(profile.id, profile.avatar_updated_at)}
              size={34}
            />
          </Link>
        </>
      )}
    </Flex>
  );
}
