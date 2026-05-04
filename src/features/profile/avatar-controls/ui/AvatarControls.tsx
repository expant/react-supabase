import { useRef, useState } from "react";
import { useAvatar } from "../model/hooks/useAvatar";
import { UserAvatar } from "@/shared/ui/user-avatar/UserAvatar";
import { TrashIcon } from "@/shared/ui/icons/TrashIcon";
import { UploadIcon } from "@/shared/ui/icons/UploadIcon";
import { CameraIcon } from "@/shared/ui/icons/CameraIcon";
import type { AvatarControlsProps } from "../model/types";
import styles from "./AvatarControls.module.css";

export function AvatarControls({
  profile,
  refetchProfile,
}: AvatarControlsProps) {
  const { avatarUrl, isLoading, error, handleFileChange, handleDeleteAvatar } =
    useAvatar({ profile, refetchProfile });

  const [menuOpen, setMenuOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file);
      setMenuOpen(false);
    }
    e.target.value = "";
  };

  if (isLoading) {
    return <div className={styles.skeleton} />;
  }

  return (
    <div className={styles.avatarContainer}>
      <UserAvatar
        username={profile?.username ?? ""}
        src={avatarUrl}
        size={96}
      />

      <button
        className={styles.cameraButton}
        onClick={() => setMenuOpen((v) => !v)}
        title="Изменить аватар"
        type="button"
      >
        <CameraIcon />
      </button>

      {menuOpen && (
        <>
          <div
            className={styles.menuOverlay}
            onClick={() => setMenuOpen(false)}
          />
          <div className={styles.menu}>
            <button
              className={styles.menuItem}
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadIcon />
              Загрузить
            </button>
            <button
              className={`${styles.menuItem} ${styles.menuItemDanger} ${!avatarUrl ? styles.menuItemDisabled : ""}`}
              type="button"
              disabled={!avatarUrl}
              onClick={() => {
                handleDeleteAvatar();
                setMenuOpen(false);
              }}
            >
              <TrashIcon />
              Удалить
            </button>
          </div>
        </>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
