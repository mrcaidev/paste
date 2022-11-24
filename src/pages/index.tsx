import { Editor } from "src/components/editor";
import { Head } from "src/components/head";

const Page = () => (
  <>
    <Head title="Home" description="A simple markdown pastebin." pathname="/" />
    <main className="flex flex-col items-stretch max-w-5xl min-h-screen px-8 pt-20 mx-auto">
      <Editor />
    </main>
  </>
);

export default Page;
