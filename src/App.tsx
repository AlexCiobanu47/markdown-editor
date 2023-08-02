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
    const initialMarkdown: string = `# Welcome to the markdown editor\n## Enter the file name and then start typing your markdown in the MARKDOWN section\n## You can toggle the preview from the preview button\n- save the current document by adding a document name and pressing the save changes button\n- load a document with the name specified in the input field \n- delete a document with the name specified in the input field\n###### The following link provides more information on [Markdown syntax](https://www.markdownguide.org/cheat-sheet/)`;
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
        {preview && <Editor markdown={markdown} setMarkdown={setMarkdown} />}
        <Preview markdown={markdown} handlePreview={handlePreview} />
      </div>
    </div>
  );
}

export default App;
