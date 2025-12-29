import { Avatar, Dropdown, Button, Upload, Skeleton } from "antd";
import {
  CameraOutlined,
  DeleteOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAvatar } from "../model/hooks/useAvatar";
import type { AvatarControlsProps } from "../model/types";
import styles from "./AvatarControls.module.css";

export function AvatarControls({
  profile,
  refetchProfile,
}: AvatarControlsProps) {
  const { avatarUrl, isLoading, handleBeforeUpload, handleDeleteAvatar } =
    useAvatar({ profile, refetchProfile });

  const dropdownRender = () => (
    <div className={styles.dropdownRenderContainer}>
      <Upload showUploadList={false} beforeUpload={handleBeforeUpload}>
        <Button icon={<UploadOutlined />} type="primary">
          Загрузить
        </Button>
      </Upload>
      <Button
        icon={<DeleteOutlined />}
        disabled={!avatarUrl}
        danger
        type="primary"
        onClick={handleDeleteAvatar}
      >
        Удалить
      </Button>
    </div>
  );

  if (isLoading) {
    return <Skeleton.Avatar active size={96} />;
  }

  return (
    <div className={styles.avatarContainer}>
      <Avatar
        className={styles.avatarImg}
        icon={<UserOutlined />}
        src={avatarUrl}
        size={96}
      />
      <Dropdown trigger={["click"]} popupRender={dropdownRender}>
        <Button
          type="primary"
          className={styles.cameraButton}
          icon={<CameraOutlined />}
        />
      </Dropdown>
    </div>
  );
}
