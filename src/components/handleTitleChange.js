import React, { useState } from "react";

const TextEditor = ({ section, onTextChange }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onTextChange("title", e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    onTextChange("content", e.target.value);
  };

  return (
    <div>
      <h3 className="font-bold text-lg">Edit Section</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className="border p-2 w-full rounded mb-2"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
        className="border p-2 w-full rounded"
        rows={4}
      ></textarea>
    </div>
  );
};

export default TextEditor;
