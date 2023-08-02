import dompurify from "dompurify";
import { marked } from "marked";
import React from "react";
import eyeIcon from "../assets/images/eyeIcon.png";
interface PreviewProps {
  markdown: string;
  handlePreview: () => void;
  preview: boolean;
}
const Preview: React.FC<PreviewProps> = ({
  markdown,
  handlePreview,
  preview,
}) => {
  const parsedMarkdown = dompurify.sanitize(
    marked.parse(markdown, { mangle: false, headerIds: false })
  );

  return (
    <div className="flex-1">
      <div className="w-full bg-lighterDarkGray text-gray-200 uppercase tracking-wider p-1 flex justify-between">
        <p>preview</p>
        <button onClick={handlePreview}>
          <img src={eyeIcon} alt="" className="h-5 mx-2" />
        </button>
      </div>
      {!preview && (
        <div
          className="prose prose-invert prose-quoteless prose-sm sm:prose-base prose-blockquote:bg-lightGray prose-blockquote:border-l-orangeAccent prose-blockquote:not-italic prose-blockquote:font-semibold prose-pre:bg-lightGray prose-li:marker:text-orangeAccent prose-h6:text-orangeAccent h-[90vh] p-6 pb-20 overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
        ></div>
      )}
      {preview && (
        <div
          className="prose prose-invert prose-quoteless prose-sm sm:prose-base prose-blockquote:bg-lightGray prose-blockquote:border-l-orangeAccent prose-blockquote:not-italic prose-blockquote:font-semibold prose-pre:bg-lightGray prose-li:marker:text-orangeAccent prose-h6:text-orangeAccent h-[50vh] sm:h-full p-6 pb-20 overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
        ></div>
      )}
    </div>
  );
};

export default Preview;
