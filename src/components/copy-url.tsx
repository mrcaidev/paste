import type { MouseEventHandler } from "react";
import { FiCopy } from "react-icons/fi";
import { Button } from "./button";

const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    console.log("Copied to clipboard!");
  } catch {
    console.error("Permission denied.");
  }
};

export const CopyUrl = () => {
  return (
    <Button color="green" onClick={handleClick}>
      <FiCopy size="16" aria-hidden="true" />
      Copy URL
    </Button>
  );
};
