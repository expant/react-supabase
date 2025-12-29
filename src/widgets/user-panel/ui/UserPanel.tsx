import { Flex, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
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
          <Text className={styles.email}>{profile.username}</Text>
          <Avatar
            shape="circle"
            icon={<UserOutlined />}
            src={getAvatarUrl(profile.id, profile.avatar_updated_at)}
          />
        </>
      )}
    </Flex>
  );
}
