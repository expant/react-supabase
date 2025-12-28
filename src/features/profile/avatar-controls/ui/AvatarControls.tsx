import { Avatar, Dropdown, Button, Upload } from "antd";
import {
  CameraOutlined,
  DeleteOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAvatar } from "../model/hooks/useAvatar";
import styles from "./AvatarControls.module.css";

export function AvatarControls() {
  const { avatarUrl, handleUpload } = useAvatar();

  const dropdownRender = () => (
    <div className={styles.dropdownRenderContainer}>
      <Upload showUploadList={false} onChange={handleUpload}>
        <Button icon={<UploadOutlined />}>Загрузить</Button>
      </Upload>
      <Button icon={<DeleteOutlined />} disabled={!avatarUrl} danger>
        Удалить
      </Button>
    </div>
  );

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
