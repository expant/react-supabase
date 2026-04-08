import { Button, Skeleton, Typography, Upload } from "antd";
import { PictureOutlined, UploadOutlined } from "@ant-design/icons";
import type { BackgroundControlsProps } from "../model/types";
import { useBackground } from "../model/hooks/useBackground";
import styles from "./BackgroundControls.module.css";

const { Text } = Typography;

export function BackgroundControls({ profile }: BackgroundControlsProps) {
  const { backgroundUrl, isLoading, handleBeforeUpload } = useBackground({
    profile,
  });

  if (!profile) return null;

  return (
    <div className={styles.root}>
      <Text strong>Фон профиля</Text>

      <div className={styles.preview}>
        {isLoading ? (
          <Skeleton.Image active className={styles.skeleton} />
        ) : backgroundUrl ? (
          <img
            src={backgroundUrl}
            alt="Profile background"
            className={styles.previewImg}
          />
        ) : (
          <div className={styles.empty}>
            <PictureOutlined />
            <Text type="secondary">Фон не установлен</Text>
          </div>
        )}
      </div>

      <Upload showUploadList={false} beforeUpload={handleBeforeUpload}>
        <Button
          type="primary"
          icon={<UploadOutlined />}
          loading={isLoading}
          disabled={isLoading}
        >
          Загрузить фон
        </Button>
      </Upload>
    </div>
  );
}

