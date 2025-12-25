import { Upload } from "antd";
import { useUploadAvatar } from "../model/hooks/useUploadAvatar";
import styles from "./UploadAvatar.module.css";

export function UploadAvatar() {
  const { avatarUrl, handleUpload } = useUploadAvatar();

  return (
    <Upload
      name="avatar"
      listType="picture-circle"
      showUploadList={false}
      onChange={handleUpload}
    >
      {avatarUrl ? (
        <img
          className={styles.imgAvatar}
          draggable={false}
          src={avatarUrl}
          alt="avatar"
        />
      ) : (
        <div>Загрузить аватар</div>
      )}
    </Upload>
  );
}
