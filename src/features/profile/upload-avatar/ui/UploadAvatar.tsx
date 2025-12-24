import { Upload } from "antd";
import { useUploadAvatar } from "../model/hooks/useUploadAvatar";

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
          draggable={false}
          src={avatarUrl}
          alt="avatar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ) : (
        <div>Загрузить аватар</div>
      )}
    </Upload>
  );
}

// <Upload
//   name="avatar"
//   listType="picture-circle"
//   className="avatar-uploader"
//   showUploadList={false}
//   action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//   beforeUpload={beforeUpload}
//   onChange={handleChange}
// >
//   {imageUrl ? (
//     <img
//       draggable={false}
//       src={imageUrl}
//       alt="avatar"
//       style={{ width: "100%" }}
//     />
//   ) : (
//     uploadButton
//   )}
// </Upload>;
