import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
function App() {
  const [markdown, setMarkdown] = useState("");
  const [fileTitle, setFileTitle] = useState("");
  const [preview, setPreview] = useState(true);
  const saveToLocalStorage = () => {
    localStorage.setItem(fileTitle, markdown);
  };
  const loadFromLocalStorage = () => {
    const item: string | null = localStorage.getItem(fileTitle);
    if (item !== null) setMarkdown(item);
  };
  const deleteFromLocalStorage = () => {
    localStorage.removeItem(fileTitle);
  };
  const handlePreview = () => {
    setPreview(!preview);
  };
  useEffect(() => {
    const initialMarkdown: string =
      "# Welcome to the markdown editor\n## Enter the file name and then start typing your markdown in the MARKDOWN section\n## You can toggle the preview from the preview button\n";
    setMarkdown(initialMarkdown);
  }, []);
  return (
    <div className="flex flex-col sw-full h-screen bg-darkGrey text-white overflow-hidden font-lato">
      <Navbar
        setTitle={setFileTitle}
        saveToLocalStorage={saveToLocalStorage}
        loadFromLocalStorage={loadFromLocalStorage}
        deleteFromLocalStorage={deleteFromLocalStorage}
      />
      <div className="flex flex-col sm:flex-row w-full h-full">
        <Editor
          markdown={markdown}
          setMarkdown={setMarkdown}
          handlePreview={handlePreview}
        />
        {preview && <Preview markdown={markdown} />}
      </div>
    </div>
  );
}

export default App;
