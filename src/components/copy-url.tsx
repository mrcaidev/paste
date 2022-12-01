import type { MouseEventHandler } from "react";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";
import { Button } from "./button";

const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard!");
  } catch {
    toast.error("Permission to clipboard denied.");
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
