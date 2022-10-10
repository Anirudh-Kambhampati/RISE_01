import React from "react";
import FolderTree from "./FolderTree/FolderTree";

const Sidebar = () => {
  return (
    <div style={{ paddingBottom: "40px" }}>
      <div className="folderTree">
        <FolderTree />
      </div>
    </div>
  );
};

export default Sidebar;