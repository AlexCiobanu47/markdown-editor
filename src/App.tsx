import { useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
function App() {
  const [markdown, setMarkdown] = useState("");
  const [fileTitle, setFileTitle] = useState("");
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
  return (
    <div className="flex flex-col sw-full h-screen bg-darkGrey text-white overflow-hidden">
      <Navbar
        setTitle={setFileTitle}
        saveToLocalStorage={saveToLocalStorage}
        loadFromLocalStorage={loadFromLocalStorage}
        deleteFromLocalStorage={deleteFromLocalStorage}
        setMarkdown={setMarkdown}
      />
      <div className="flex flex-col sm:flex-row w-full h-full">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
