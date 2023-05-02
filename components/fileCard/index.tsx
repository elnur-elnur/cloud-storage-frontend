import React, { FC } from "react";
import styles from "./FileCard.module.scss";
import { getExtensionFromFileName } from "@/utils/getExtensionFromFileName";

import { FileTextOutlined } from "@ant-design/icons";
import { isImage } from "@/utils/isImage";

interface FileCardProps {
  filename: string;
  originalName: string;
}

const FileCard: FC<FileCardProps> = ({ originalName, filename }) => {
  const ext = getExtensionFromFileName(filename);

  const imageUrl = ext
    ? `${process.env.NEXT_PUBLIC_API_URL}/Uploads/` + filename
    : "";

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i>{ext}</i>
        {ext && ["jpg", "jpeg", "png", "gif"].includes(ext) ? (
          <img className={styles.image} src={imageUrl} alt="File" />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};

export default FileCard;
