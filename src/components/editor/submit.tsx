import { useRouter } from "next/router";
import { FiUploadCloud } from "react-icons/fi";
import { Button } from "../button";
import { useEditor } from "./store";

export const Submit = () => {
  const { title, content, password, isSubmitting, dispatch } = useEditor();
  const router = useRouter();

  const handleClick = async () => {
    dispatch({ type: "isSubmitting", payload: true });

    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({ title, content, password }),
      headers: { "Content-Type": "application/json" },
    });
    const { message, url } = await res.json();

    dispatch({ type: "isSubmitting", payload: false });

    if (!res.ok) {
      console.error(message ?? "Unknown error");
      return;
    }

    if (!url) {
      console.error("Response success. URL not found");
      return;
    }

    router.push(url);
  };

  return (
    <Button
      color="green"
      disabled={content.length === 0 || isSubmitting}
      onClick={handleClick}
    >
      <FiUploadCloud size="16" aria-hidden="true" />
      Submit
    </Button>
  );
};
