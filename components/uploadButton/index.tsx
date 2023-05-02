import React, { useState } from "react";
import styles from "@/styles/Home.module.scss";
import { Button, Upload, UploadFile, notification } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

import * as Api from "@/api";

export const UploadButton: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      await Api.files.uploadFile(options);

      setFileList([]);

      window.location.reload();
    } catch (err) {
      notification.error({
        message: "Sehf!",
        description: "File yuklemek tamamlanmadi",
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
    >
      <Button
        style={{ marginTop: "20px", marginLeft: "10px" }}
        type="primary"
        icon={<CloudUploadOutlined />}
        size="large"
      >
        File yukle
      </Button>
    </Upload>
  );
};
