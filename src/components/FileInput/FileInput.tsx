import React from "react";
import styles from "./FileInput.module.css"

interface FileInputProps {
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
    return <input className={styles.selectFile} type="file" accept="image/*" onChange={onFileChange} />;
};

export default FileInput;
