
import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("Please select an image!");
    const formData = new FormData();
    formData.append("image", selectedFile);

    // Call the API to upload the image
    alert("Image uploaded successfully!");
  };

  return (
    <div className="image-uploader space-y-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 rounded w-full"
      />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
};

export default ImageUploader;
