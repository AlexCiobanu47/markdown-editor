import React from "react";
import deleteIcon from "../assets/images/deleteIcon.png";
import documentIcon from "../assets/images/documentIcon.png";
import saveIcon from "../assets/images/saveIcon.png";
const Navbar = () => {
  return (
    <div className="w-full h-fit flex justify-between bg-lightGray p-1">
      <div className="flex items-center justify-center">
        <h1 className="hidden sm:inline border-r-2 border-r-gray-400 px-5 uppercase tracking-widest">
          MARKDOWN
        </h1>
        <div className="flex justify-center items-center mx-5">
          <img src={documentIcon} alt="" className="h-5" />
          <div className="mx-2 flex flex-col">
            <p className="hidden sm:inline text-lighterGray">Document name</p>
            <input
              type="text"
              className="bg-transparent text-white outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-2">
        <img src={deleteIcon} alt="" className="mx-5 h-5" />
        <button className="flex items-center justify-center bg-orangeAccent p-2 rounded-md">
          <img src={saveIcon} alt="" className="h-5 mx-2" />
          <p className="hidden sm:inline text-sm">Save Changes</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
