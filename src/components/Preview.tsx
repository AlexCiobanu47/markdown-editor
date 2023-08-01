import dompurify from "dompurify";
import { marked } from "marked";
import React from "react";
interface PreviewProps {
  markdown: string;
}
const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  const parsedMarkdown = dompurify.sanitize(marked.parse(markdown));

  return (
    <div className="flex-1">
      <div className="w-full bg-gray-900 text-gray-400 uppercase tracking-wider p-1">
        Preview
      </div>
      <div
        className="prose prose-invert prose-sm sm:prose-base w-full h-[50vh] sm:h-full p-6 pb-20 overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
      ></div>
    </div>
  );
};

export default Preview;
