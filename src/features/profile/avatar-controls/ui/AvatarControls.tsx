import { useRef, useState } from "react";
import { useAvatar } from "../model/hooks/useAvatar";
import type { AvatarControlsProps } from "../model/types";
import styles from "./AvatarControls.module.css";

const CameraIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M4.5 2.5L5.5 1.5h3l1 1H12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2.5z"
      stroke="white"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="7" r="2" stroke="white" strokeWidth="1.1" />
  </svg>
);

const UploadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M7 9V2M4 5l3-3 3 3"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 10v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 4h10M5 4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1M5.5 6.5v4M8.5 6.5v4M3 4l.5 7.5a1 1 0 0 0 1 .5h5a1 1 0 0 0 1-.5L11 4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="13" r="6" stroke="#52525b" strokeWidth="2" />
    <path
      d="M5 31c0-7.18 5.82-13 13-13s13 5.82 13 13"
      stroke="#52525b"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

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

  // const dropdownRender = () => (
  //   <div className={styles.dropdownRenderContainer}>
  //     <Upload showUploadList={false} beforeUpload={handleBeforeUpload}>
  //       <Button icon={<UploadOutlined />} type="primary">
  //         Загрузить
  //       </Button>
  //     </Upload>
  //     <Button
  //       icon={<DeleteOutlined />}
  //       disabled={!avatarUrl}
  //       danger
  //       type="primary"
  //       onClick={handleDeleteAvatar}
  //     >
  //       Удалить
  //     </Button>
  //   </div>
  // );

  // if (isLoading) {
  //   return <Skeleton.Avatar active size={96} />;
  // }

  // return (
  //   <div className={styles.avatarContainer}>
  //     <Avatar
  //       className={styles.avatarImg}
  //       icon={<UserOutlined />}
  //       src={avatarUrl}
  //       size={96}
  //     />
  //     <Dropdown trigger={["click"]} popupRender={dropdownRender}>
  //       <Button
  //         type="primary"
  //         className={styles.cameraButton}
  //         icon={<CameraOutlined />}
  //       />
  //     </Dropdown>
  //   </div>
  // );

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar}>
        {avatarUrl ? (
          <img src={avatarUrl} alt="Аватар" className={styles.avatarImg} />
        ) : (
          <UserIcon />
        )}
      </div>

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
