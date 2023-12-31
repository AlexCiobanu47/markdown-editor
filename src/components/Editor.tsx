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
      <div className="w-full bg-lighterDarkGray text-gray-200 uppercase tracking-wider p-1">
        <p>MARKDOWN</p>
      </div>
      <textarea
        className="h-[50vh] sm:h-full w-full overflow-y-auto bg-darkGrey outline-none p-6 resize-none"
        onChange={handleEditorChange}
        value={markdown}
      ></textarea>
    </div>
  );
};

export default Editor;
