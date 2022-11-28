import type { ChangeEventHandler } from "react";
import { useEditor } from "./store";

export const Password = () => {
  const { password, isSubmitting, dispatch } = useEditor();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "password", payload: e.target.value });
  };

  return (
    <input
      type="text"
      id="password"
      name="password"
      value={password}
      autoComplete="off"
      minLength={1}
      maxLength={20}
      placeholder="Password (Optional, 1-20 characters)"
      onChange={handleChange}
      disabled={isSubmitting}
      aria-disabled={isSubmitting}
      aria-label="Password (Optional, 1-20 characters)"
      className="min-w-0 sm:w-72 p-0.5 border-b-2 border-slate-500 focus:border-sky-700 dark:focus:border-sky-300 outline-none bg-transparent placeholder:text-slate-500 disabled:text-slate-500"
    />
  );
};
