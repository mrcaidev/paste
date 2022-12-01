import type { MouseEventHandler } from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { Button } from "../button";
import { useEditor } from "./store";

export const ModeToggler = () => {
  const { isPreviewMode, isSubmitting, dispatch } = useEditor();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "isPreviewMode", payload: !isPreviewMode });
  };

  return (
    <Button color="slate" disabled={isSubmitting} onClick={handleClick}>
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
    </Button>
  );
};
