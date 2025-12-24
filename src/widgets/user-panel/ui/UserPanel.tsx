import { Link } from "react-router";
import { useLocation } from "react-router";
import { Flex, Typography } from "antd";
import { TextSkeleton } from "@/shared/ui/skeletons/text-skeleton/TextSkeleton";
import { useProfile } from "@/app/providers/profile/model/hooks/useProfile";
import styles from "./UserPanel.module.css";

const { Text } = Typography;

export function UserPanel() {
  const { profile, isLoading } = useProfile();
  const location = useLocation();
  const { pathname } = location;

  return (
    <Flex className={styles.userPanel}>
      {isLoading ? (
        <TextSkeleton />
      ) : (
        <Text className={styles.email}>{profile?.username}</Text>
      )}

      {pathname !== "/feed" && <Link to="/feed">Лента опросов</Link>}
      {pathname !== "/profile" && <Link to="/profile">Профиль</Link>}
    </Flex>
  );
}
