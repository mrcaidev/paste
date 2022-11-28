import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Loading } from "./loading";
import { ModeToggler } from "./mode-toggler";
import { Password } from "./password";
import { EditorProvider, useEditorRoot } from "./store";
import { Submit } from "./submit";
import { Writing } from "./writing";

const Preview = dynamic(() => import("./preview"), { suspense: true });

export const Editor = () => {
  const context = useEditorRoot();

  return (
    <EditorProvider value={context}>
      {context.isPreviewMode ? (
        <Suspense fallback={<Loading />}>
          <Preview />
        </Suspense>
      ) : (
        <Writing />
      )}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 py-6">
        <Password />
        <div aria-hidden="true" className="sm:grow" />
        <ModeToggler />
        <Submit />
      </div>
    </EditorProvider>
  );
};
