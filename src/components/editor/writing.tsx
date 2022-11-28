import type { ChangeEventHandler } from "react";
import { useEditor } from "./store";

type HandlerFactory = (
  type: "title" | "content"
) => ChangeEventHandler<HTMLTextAreaElement>;

export const Writing = () => {
  const { title, content, isSubmitting, dispatch } = useEditor();

  const createHandler: HandlerFactory = (type) => (e) => {
    e.target.style.height = "0px";
    e.target.style.height = e.target.scrollHeight + "px";
    dispatch({ type, payload: e.target.value });
  };
  const handleTitleChange = createHandler("title");
  const handleContentChange = createHandler("content");

  return (
    <form className="grow flex flex-col">
      <textarea
        name="title"
        value={title}
        placeholder="Title (Optional)"
        autoComplete="off"
        rows={1}
        onChange={handleTitleChange}
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        aria-label="Title (Optional)"
        className="w-full py-2 border-none outline-none bg-transparent font-bold text-4xl leading-normal placeholder:text-slate-500 disabled:text-slate-500 resize-none"
      />
      <textarea
        name="content"
        value={content}
        placeholder="Paste your content here. (You can use Markdown syntax!)"
        autoComplete="off"
        onChange={handleContentChange}
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        aria-label="Paste your content here. (You can use Markdown syntax!)"
        className="grow w-full py-4 border-none outline-none bg-transparent placeholder:text-slate-500 disabled:text-slate-500 resize-none"
      />
    </form>
  );
};
