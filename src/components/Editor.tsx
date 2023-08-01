import React, { ChangeEvent } from "react";
interface EditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}
const Editor: React.FC<EditorProps> = ({ markdown, setMarkdown }) => {
  const handleEditorChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };
  return (
    <div className="flex-1 border-r-2 border-gray-600 ">
      <div className="w-full bg-gray-900 text-gray-400 uppercase tracking-wider p-1">
        MARKDOWN
      </div>
      <textarea
        className="h-[50vh] sm:h-full w-full overflow-y-auto bg-gray-800 outline-none p-6 resize-none"
        onChange={handleEditorChange}
      ></textarea>
    </div>
  );
};

export default Editor;
