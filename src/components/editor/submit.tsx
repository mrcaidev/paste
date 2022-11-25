import { useRouter } from "next/router";
import { FiUploadCloud } from "react-icons/fi";

interface Props {
  title: string;
  content: string;
  password: string;
  isDisabled: boolean;
}

export const Submit = ({ title, content, password, isDisabled }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({ title, content, password }),
      headers: { "Content-Type": "application/json" },
    });
    const { message, url } = await res.json();

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
