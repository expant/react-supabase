import type { UserAvatarProps } from "./types";
import styles from "./UserAvatar.module.css";

export function UserAvatar({ username, src, size = 34 }: UserAvatarProps) {
  return (
    <div
      className={styles.avatar}
      style={{ width: size, height: size, fontSize: Math.round(size / 3) }}
    >
      {src ? (
        <img src={src} alt={username} className={styles.img} />
      ) : (
        username.charAt(0).toUpperCase()
      )}
    </div>
  );
}
