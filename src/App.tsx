import { useState } from "react";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
function App() {
  const [markdown, setMarkdown] = useState("");
  return (
    <div className="flex flex-col sw-full h-screen bg-gray-800 text-gray-300 overflow-hidden">
      <Navbar />
      <div className="flex flex-col sm:flex-row w-full h-full">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
