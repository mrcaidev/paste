import { useMemo } from "react";
import { parseMarkdown } from "src/utils/markdown";

interface Props {
  title: string;
  content: string;
}

export const Preview = ({ title, content }: Props) => {
  const isEmpty = !title && !content;
  const html = useMemo(() => parseMarkdown(content), [content]);

  return isEmpty ? (
    <p className="grow grid place-items-center">Nothing pasted yet.</p>
  ) : (
    <article className="grow article">
      <h1>{title}</h1>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};
