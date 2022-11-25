import { useReducer } from "react";
import { Form } from "./form";
import { ModeToggler } from "./mode-toggler";
import { Password } from "./password";
import { Preview } from "./preview";
import { defaultState, reducer } from "./reducer";
import { Submit } from "./submit";

export const Editor = () => {
  const [{ title, content, password, isPreviewMode }, dispatch] = useReducer(
    reducer,
    defaultState
  );

  return (
    <>
      {isPreviewMode ? (
        <Preview title={title} content={content} />
      ) : (
        <Form title={title} content={content} dispatch={dispatch} />
      )}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 py-6">
        <Password password={password} dispatch={dispatch} />
        <ModeToggler isPreviewMode={isPreviewMode} dispatch={dispatch} />
        <Submit
          title={title}
          content={content}
          password={password}
          isDisabled={content.length === 0}
        />
      </div>
    </>
  );
};
