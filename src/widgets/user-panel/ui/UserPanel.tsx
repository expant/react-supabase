import { Flex, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TextSkeleton } from "@/shared/ui/skeletons/text-skeleton/TextSkeleton";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import { getAvatarUrl } from "@/entities/profile/api/profileApi";
import styles from "./UserPanel.module.css";

const { Text } = Typography;

export function UserPanel() {
  const { profile, isLoading } = useProfile();

  if (!profile) return;
  if (isLoading) return <TextSkeleton />;

  return (
    <Flex className={styles.userPanel}>
      <Text className={styles.email}>{profile.username}</Text>
      <Avatar
        shape="circle"
        icon={<UserOutlined />}
        src={getAvatarUrl(profile.id)}
      />
    </Flex>
  );
}
