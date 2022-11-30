import type { MouseEventHandler } from "react";
import { FiShare2 } from "react-icons/fi";
import { Button } from "./button";

const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
  const data = { url: window.location.href };
  const canShare = navigator.canShare(data);
  if (canShare) {
    await navigator.share(data);
  }
};

export const Share = () => {
  return (
    <Button color="slate" onClick={handleClick}>
      <FiShare2 size="16" aria-hidden="true" />
      Share
    </Button>
  );
};
