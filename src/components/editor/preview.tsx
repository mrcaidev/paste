import { useMemo } from "react";
import { parseMarkdown } from "src/utils/markdown";
import { useEditor } from "./store";

const Preview = () => {
  const { title, content } = useEditor();

  const isEmpty = !title && !content;
  const html = useMemo(() => parseMarkdown(content), [content]);

  return isEmpty ? (
    <p className="grow grid place-items-center">Nothing pasted yet.</p>
  ) : (
    <article className="grow article">
      <h1>{title || "No Title"}</h1>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default Preview;
