import { FiUploadCloud } from "react-icons/fi";
import type { State } from "./reducer";

interface Props extends State {
  isDisabled: boolean;
}

export const Submit = ({
  title,
  content,
  password,
  isPreviewMode,
  isDisabled,
}: Props) => {
  const handleClick = () => {
    console.table({ title, content, password, isPreviewMode });
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={handleClick}
      className="flex justify-center items-center gap-2 px-4 py-2 rounded-md shadow bg-green-300 dark:bg-green-700 hover:bg-green-400 dark:hover:bg-green-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 font-semibold disabled:text-slate-600 dark:disabled:text-slate-400"
    >
      <FiUploadCloud size="16" aria-hidden="true" />
      Submit
    </button>
  );
};
