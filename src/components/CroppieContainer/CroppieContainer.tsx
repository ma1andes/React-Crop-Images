import React, { useRef, useEffect } from "react";
import Croppie from "croppie";
import "croppie/croppie.css";

interface CroppieContainerProps {
    imageUrl: string | null;
    onInstanceReady: (instance: Croppie | null) => void;
}

const CroppieContainer: React.FC<CroppieContainerProps> = ({ imageUrl, onInstanceReady }) => {
    const croppieRef = useRef<HTMLDivElement | null>(null);
    const croppieInstance = useRef<Croppie | null>(null);

    useEffect(() => {
        if (croppieRef.current && !croppieInstance.current) {
            croppieInstance.current = new Croppie(croppieRef.current, {
                viewport: { width: 200, height: 200, type: "circle" },
                boundary: { width: 300, height: 300 },
            });
            onInstanceReady(croppieInstance.current);
        }

        return () => {
            croppieInstance.current?.destroy();
            croppieInstance.current = null;
            onInstanceReady(null);
        };
    }, [onInstanceReady]);

    useEffect(() => {
        if (imageUrl && croppieInstance.current) {
            croppieInstance.current.bind({ url: imageUrl });
        }
    }, [imageUrl]);

    return <div ref={croppieRef} />;
};

export default CroppieContainer;
