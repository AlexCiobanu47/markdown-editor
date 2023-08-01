import React from "react";
import deleteIcon from "../assets/images/delete.svg";
import documentIcon from "../assets/images/document.svg";
import saveIcon from "../assets/images/save.svg";
const Navbar = () => {
  return (
    <div className="w-full h-fit flex justify-between bg-gray-700 p-1">
      <div className="flex items-center justify-center">
        <h1 className="hidden sm:inline border-r-2 border-r-gray-400 px-5">
          MARKDOWN
        </h1>
        <div className="flex justify-center items-center mx-5">
          <img src={documentIcon} alt="" className="h-5" />
          <div className="mx-2">
            <p className="hidden sm:inline">Document name</p>
            <p>welcome.md</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={deleteIcon} alt="" className="h-5 mx-4" />
        <button className="flex items-center justify-center bg-orange-500 p-2 rounded-md">
          <img src={saveIcon} alt="" className="h-5 mx-2" />
          <p className="hidden sm:inline">Save Changes</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
