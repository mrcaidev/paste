import type { MouseEventHandler } from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { useEditor } from "./store";

export const ModeToggler = () => {
  const { isPreviewMode, dispatch } = useEditor();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "isPreviewMode", payload: !isPreviewMode });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-semibold"
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
