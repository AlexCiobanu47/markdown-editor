import React, { ChangeEvent } from "react";
import deleteIcon from "../assets/images/deleteIcon.png";
import documentIcon from "../assets/images/documentIcon.png";
import saveIcon from "../assets/images/saveIcon.png";
interface NavbarProps {
  setTitle: (title: string) => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
  deleteFromLocalStorage: () => void;
  setMarkdown: (markdown: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({
  setTitle,
  saveToLocalStorage,
  loadFromLocalStorage,
  deleteFromLocalStorage,
  setMarkdown,
}) => {
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setMarkdown("");
  };
  return (
    <div className="w-full h-fit flex justify-between bg-lightGray p-1">
      <div className="flex items-center justify-center">
        <h1 className="hidden sm:inline border-r-2 border-r-gray-400 px-5 uppercase tracking-widest">
          MARKDOWN
        </h1>
        <div className="flex justify-center items-center mx-5">
          <img
            src={documentIcon}
            alt=""
            className="h-5"
            onClick={loadFromLocalStorage}
          />
          <div className="mx-2 flex flex-col">
            <p className="hidden sm:inline text-lighterGray">Document name</p>
            <input
              type="text"
              className="bg-transparent text-white outline-none"
              onChange={handleTitleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-2">
        <img
          src={deleteIcon}
          alt=""
          className="mx-5 h-5"
          onClick={deleteFromLocalStorage}
        />
        <button
          className="flex items-center justify-center bg-orangeAccent p-2 rounded-md"
          onClick={saveToLocalStorage}
        >
          <img src={saveIcon} alt="" className="h-5 mx-2" />
          <p className="hidden sm:inline text-sm">Save Changes</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
