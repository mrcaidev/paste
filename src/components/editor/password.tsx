import type { ChangeEventHandler, Dispatch } from "react";
import type { Action } from "./reducer";

interface Props {
  password: string;
  dispatch: Dispatch<Action>;
}

export const Password = ({ password, dispatch }: Props) => {
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
      className="min-w-0 sm:w-72 p-0.5 border-b-2 border-slate-500 focus:border-sky-700 dark:focus:border-sky-300 outline-none bg-transparent placeholder:text-slate-500 disabled:text-slate-500"
    />
  );
};
