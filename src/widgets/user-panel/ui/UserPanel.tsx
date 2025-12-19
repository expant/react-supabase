import { Link } from "react-router";
import { Flex, Typography } from "antd";
import { TextSkeleton } from "@/shared/ui/skeletons/text-skeleton/TextSkeleton";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import styles from "./UserPanel.module.css";

const { Text } = Typography;

export function UserPanel() {
  const { profile, isLoading } = useProfile();

  return (
    <Flex className={styles.userPanel}>
      {isLoading ? (
        <TextSkeleton />
      ) : (
        <Text className={styles.email}>{profile?.username}</Text>
      )}

      <Link to="/profile">Профиль</Link>
    </Flex>
  );
}
