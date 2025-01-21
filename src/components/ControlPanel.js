import React from "react";

const ControlPanel = () => {
  return (
    <div className="control-panel space-y-4">
      <h3 className="font-bold">Control Panel</h3>
      <button className="bg-gray-200 p-2 rounded">Move Up</button>
      <button className="bg-gray-200 p-2 rounded">Move Down</button>
    </div>
  );
};

export default ControlPanel;
