import type { MouseEventHandler } from "react";
import { FiShare2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { Button } from "./button";

const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
  const data = { url: window.location.href };
  const canShare = navigator.canShare(data);
  if (!canShare) {
    toast.error("Sharing is not supported by your browser.");
  }
  await navigator.share(data);
  toast.success("Share success!");
};

export const Share = () => {
  return (
    <Button color="slate" onClick={handleClick}>
      <FiShare2 size="16" aria-hidden="true" />
      Share
    </Button>
  );
};
