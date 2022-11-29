import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "slate" | "green";
}

export const Button = ({
  type = "button",
  color = "slate",
  children,
  ...rest
}: Props) => {
  const bgColor =
    color === "slate"
      ? "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
      : "bg-green-300 dark:bg-green-700 hover:bg-green-400 dark:hover:bg-green-600";

  return (
    <button
      type={type}
      {...rest}
      className={`flex justify-center items-center gap-2 px-4 py-2 rounded-md disabled:outline disabled:outline-2 disabled:-outline-offset-2 disabled:outline-slate-300 dark:disabled:outline-slate-700 ${bgColor} disabled:bg-transparent dark:disabled:bg-transparent font-semibold disabled:text-slate-300 dark:disabled:text-slate-700`}
    >
      {children}
    </button>
  );
};
