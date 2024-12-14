import React from "react";
import styles from './DownloadButton.module.css'

interface DownloadButtonProps {
  image: string; // URL обрезанного изображения
  filename: string; // Имя файла для загрузки
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ image, filename }) => {
  return (
    <a
      href={image}
      download={filename}
      className={styles.DownloadButton}
    >
      Скачать
    </a>
  );
};

export default DownloadButton;
