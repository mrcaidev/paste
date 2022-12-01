import { useRouter } from "next/router";
import { FiLoader, FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";
import { Button } from "../button";
import { useEditor } from "./store";

export const Submit = () => {
  const { title, content, password, isSubmitting, dispatch } = useEditor();
  const router = useRouter();

  const handleClick = async () => {
    const infoToast = toast.info("Submitting...");
    dispatch({ type: "isSubmitting", payload: true });

    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({ title, content, password }),
      headers: { "Content-Type": "application/json" },
    });
    const { message, url } = await res.json();

    dispatch({ type: "isSubmitting", payload: false });
    toast.dismiss(infoToast);

    if (!res.ok) {
      toast.error(message ?? "Sorry, something went wrong.");
      return;
    }

    if (!url) {
      toast.error("Sorry, the URL of paste is not found.");
      return;
    }

    toast.success("Success! You will be redirected to your paste.");
    router.push(url);
  };

  return (
    <Button
      color="green"
      disabled={content.length === 0 || isSubmitting}
      onClick={handleClick}
    >
      {isSubmitting ? (
        <FiLoader
          size="16"
          aria-hidden="true"
          className="animate-spin [animation-duration:2s]"
        />
      ) : (
        <FiUploadCloud size="16" aria-hidden="true" />
      )}
      Submit
    </Button>
  );
};
