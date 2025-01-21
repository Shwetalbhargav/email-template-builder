import React, { useState } from "react";

const TextEditor = ({ section, sectionIndex, onTextChange }) => {
  const [text, setText] = useState(section);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    onTextChange("text", value);
  };

  return (
    <div className="text-editor space-y-4">
      <textarea
        value={text}
        onChange={handleTextChange}
        className="border w-full p-2 rounded"
        placeholder="Enter text"
      ></textarea>
      <div className="text-options flex gap-2">
        <button className="bg-gray-200 p-2 rounded">B</button>
        <button className="bg-gray-200 p-2 rounded">I</button>
        <button className="bg-gray-200 p-2 rounded">U</button>
      </div>
      <div className="alignment-options flex gap-4">
        <button className="text-center">Align Left</button>
        <button className="text-center">Center</button>
        <button className="text-center">Align Right</button>
      </div>
    </div>
  );
};

export default TextEditor;
