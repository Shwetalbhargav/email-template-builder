import React, { useState, useEffect } from "react";
import { fetchLayout, uploadConfig } from "../api"; 
import { AiOutlineUpload } from "react-icons/ai";
import TextEditor from "./TextEditor";

const TemplateEditor = () => {
  const [layout, setLayout] = useState("");
  const [config, setConfig] = useState({});
  const [sections, setSections] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch layout from the backend
  useEffect(() => {
    fetchLayout()
      .then((response) => {
        setLayout(response.data);
        setSections(response.data.split("<!-- Section -->"));
      })
      .catch((error) => {
        console.error("Error fetching layout:", error);
      });
  }, []);

  // Update the config for text changes
  const updateTextConfig = (key, value) => {
    setConfig({ ...config, [key]: value });
  };

  // Save the current configuration
  const saveTemplate = () => {
    uploadConfig({
      name: "Email Template",
      layout,
      config,
    })
      .then(() => alert("Template saved successfully!"))
      .catch((error) => {
        alert(`Error saving template: ${error.message}`);
      });
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await uploadConfig(formData); // Replace with appropriate API endpoint
      alert(`Image uploaded successfully: ${response.data.filePath}`);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1>Email Builder</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Email Preview Section */}
        <div className="flex-1 bg-gray-100 p-8">
          <div className="bg-white p-6 shadow-md rounded-md max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-4">Email Template</h2>
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border p-4">
                  <TextEditor
                    section={section}
                    onTextChange={(key, value) => updateTextConfig(key, value)}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={saveTemplate}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Save Template
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar handleImageUpload={handleImageUpload} />
      </div>
    </div>
  );
};

const Sidebar = ({ handleImageUpload }) => {
  return (
    <div className="w-1/3 bg-gray-50 border-l border-gray-200 p-6">
      <h3 className="text-lg font-bold mb-4">Text Editor</h3>
      <div>
        <label className="block mb-2 font-semibold">Font</label>
        <select className="w-full border border-gray-300 rounded-md p-2">
          <option>Body Font</option>
          <option>Heading Font</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2 font-semibold">Font Size</label>
        <select className="w-full border border-gray-300 rounded-md p-2">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2 font-semibold">Text Color</label>
        <input type="color" className="w-full h-10 border border-gray-300 rounded-md" />
      </div>
      <div className="mt-6">
        <label className="block mb-2 font-semibold">Upload Image</label>
        <label className="flex items-center justify-center w-full h-12 border-dashed border-2 border-gray-300 rounded-md cursor-pointer">
          <AiOutlineUpload className="text-2xl text-gray-500" />
          <span className="ml-2 text-gray-500">Upload</span>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default TemplateEditor;
