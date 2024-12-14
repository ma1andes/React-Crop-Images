import React from "react";
import styles from "./Cropresult.module.css"

interface CropResultProps {
    image: string | null;
}

const CropResult: React.FC<CropResultProps> = ({ image }) => {
    return (
        <div>
            {image ? <img className={styles.resultImg} src={image} alt="Cropped" /> : <p>No cropped image available</p>}
        </div>
    );
};

export default CropResult;
