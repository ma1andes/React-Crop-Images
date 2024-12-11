import React from "react";
import "./App.css"
import ImageCropper from "./components/ImageCropper/ImageCropper";

const App: React.FC = () => {
    return (
        <div className="container">
            <h1 className="title">Image Cropper</h1>
            <ImageCropper />
        </div>
    );
};

export default App;
