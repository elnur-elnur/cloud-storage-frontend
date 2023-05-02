import React, { FC } from "react";
import styles from "./FileList.module.scss";
import { FileItem } from "@/api/dto/files.dto";
import FileCard from "../fileCard";

interface FileListProps {
  items: FileItem[];
}

const FileList: FC<FileListProps> = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((item) => {
        return (
          <div key={item.id} className="file">
            <FileCard
              filename={item.filename}
              originalName={item.originalName}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FileList;
