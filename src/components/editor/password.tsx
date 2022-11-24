import type { ChangeEventHandler, Dispatch } from "react";
import type { Action } from "./reducer";

interface Props {
  password: string;
  dispatch: Dispatch<Action>;
}

export const Password = ({ password, dispatch }: Props) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "password", payload: e.target.value });
  };

  return (
    <div className="space-x-2 sm:mr-auto text-center">
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        name="password"
        id="password"
        autoComplete="off"
        minLength={1}
        maxLength={20}
        value={password}
        placeholder="Optional, 1-20 characters"
        onChange={handleInputChange}
        className="min-w-0 w-52 p-0.5 border-b border-slate-500 outline-none bg-transparent placeholder:text-slate-500 disabled:text-slate-500"
      />
    </div>
  );
};
