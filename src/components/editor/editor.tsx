import dynamic from "next/dynamic";
import { Suspense, useReducer } from "react";
import { Form } from "./form";
import { Loading } from "./loading";
import { ModeToggler } from "./mode-toggler";
import { Password } from "./password";
import { defaultState, reducer } from "./reducer";
import { Submit } from "./submit";

const Preview = dynamic(() => import("./preview").then((mod) => mod.Preview), {
  suspense: true,
});

export const Editor = () => {
  const [{ title, content, password, isPreviewMode }, dispatch] = useReducer(
    reducer,
    defaultState
  );

  return (
    <>
      {isPreviewMode ? (
        <Suspense fallback={<Loading />}>
          <Preview title={title} content={content} />
        </Suspense>
      ) : (
        <Form title={title} content={content} dispatch={dispatch} />
      )}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 py-6">
        <Password password={password} dispatch={dispatch} />
        <div aria-hidden="true" className="sm:grow" />
        <ModeToggler isPreviewMode={isPreviewMode} dispatch={dispatch} />
        <Submit title={title} content={content} password={password} />
      </div>
    </>
  );
};
