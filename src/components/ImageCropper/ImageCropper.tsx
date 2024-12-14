import React, { useState, useCallback } from "react";
import FileInput from "../FileInput/FileInput";
import CroppieContainer from "../CroppieContainer/CroppieContainer";
import Button from "../Button/Button";
import CropResult from "../CropResult/CropResult";
import DownloadButton from "../DownloadButton/DownloadButton";
import Croppie from "croppie";
import 'react-bootstrap';

const ImageCropper: React.FC = () => {
    const [croppieInstance, setCroppieInstance] = useState<Croppie | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setImageUrl(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCrop = async () => {
        if (croppieInstance) {
            const result = await croppieInstance.result({ type: "base64" });
            setCroppedImage(result as string);
        }
    };

    const handleInstanceReady = useCallback((instance: Croppie | null) => {
        setCroppieInstance(instance);
    }, []);

    return (
        <div>
            <FileInput onFileChange={handleFileChange} />
            <CroppieContainer imageUrl={imageUrl} onInstanceReady={handleInstanceReady} />
            <Button onClick={handleCrop} label="Crop Image" />
            <CropResult image={croppedImage} />
            {croppedImage && (
                <DownloadButton image={croppedImage} filename="cropped-image.png" />
            )}
        </div>
    );
};

export default ImageCropper;
