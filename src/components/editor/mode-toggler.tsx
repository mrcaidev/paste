import type { MouseEventHandler } from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { useEditor } from "./store";

export const ModeToggler = () => {
  const { isPreviewMode, isSubmitting, dispatch } = useEditor();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "isPreviewMode", payload: !isPreviewMode });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isSubmitting}
      aria-disabled={isSubmitting}
      className="flex justify-center items-center gap-2 px-4 py-2 rounded-md disabled:outline disabled:outline-2 disabled:-outline-offset-2 disabled:outline-slate-300 dark:disabled:outline-slate-700 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 disabled:bg-transparent dark:disabled:bg-transparent font-semibold disabled:text-slate-600 dark:disabled:text-slate-400"
    >
      {isPreviewMode ? (
        <>
          <FiEdit size="16" aria-hidden="true" />
          Edit
        </>
      ) : (
        <>
          <FiEye size="16" aria-hidden="true" />
          Preview
        </>
      )}
    </button>
  );
};
