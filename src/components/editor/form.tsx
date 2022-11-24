import type { ChangeEventHandler, Dispatch } from "react";
import type { Action } from "./reducer";

interface Props {
  title: string;
  content: string;
  dispatch: Dispatch<Action>;
}

export const Form = ({ title, content, dispatch }: Props) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "title", payload: e.target.value });
  };

  const handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.target.style.height = "0px";
    e.target.style.height = e.target.scrollHeight + "px";
    dispatch({ type: "content", payload: e.target.value });
  };

  return (
    <form className="grow flex flex-col">
      <input
        type="text"
        name="title"
        autoComplete="off"
        value={title}
        placeholder="Title (Optional)"
        aria-label="Title (Optional)"
        onChange={handleInputChange}
        className="min-w-0 w-full py-3 border-none outline-none bg-transparent font-bold text-4xl placeholder:text-slate-500 disabled:text-slate-500"
      />
      <textarea
        name="content"
        autoComplete="off"
        value={content}
        placeholder="Paste your content here. (You can use Markdown syntax!)"
        aria-label="Paste your content here. (You can use Markdown syntax!)"
        onChange={handleTextareaChange}
        className="grow w-full py-6 border-none outline-none bg-transparent placeholder:text-slate-500 disabled:text-slate-500 resize-none"
      />
    </form>
  );
};
