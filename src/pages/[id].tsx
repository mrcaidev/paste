import type { GetServerSideProps } from "next";
import { CopyUrl } from "src/components/copy-url";
import { Head } from "src/components/head";
import { Share } from "src/components/share";
import { parseMarkdown } from "src/utils/markdown";
import { supabase } from "src/utils/supabase";

interface Props {
  id: string;
  title: string;
  html: string;
  createdAt: string;
}

const Page = ({ id, title, html, createdAt }: Props) => (
  <>
    <Head
      title={title}
      description="I've shared something with you. Come and check it out!"
      pathname={"/" + id}
    />
    <main className="max-w-5xl min-h-screen px-8 pt-20 mx-auto">
      <section className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-6 py-2">
        <p className="order-2 sm:order-1 pl-3 border-l-2 border-slate-500 text-sm text-slate-600 dark:text-slate-400">
          Pasted at:&nbsp;
          <time dateTime={createdAt}>
            {new Date(createdAt).toLocaleString("zh-cn")}
          </time>
        </p>
        <div className="order-1 sm:order-2 grid grid-cols-2 gap-3">
          <Share />
          <CopyUrl />
        </div>
      </section>
      <article className="article">
        <h1>{title || "No Title"}</h1>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  </>
);

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
  query,
}) => {
  const id = (params?.id ?? "") as string;
  const password = (query.p ?? "") as string;

  const { data, error } = await supabase
    .from("default")
    .select()
    .eq("id", id)
    .eq("password", password);
  if (error) {
    console.error(error.message);
    return { notFound: true };
  }
  if (data === null || data.length === 0) {
    return { notFound: true };
  }

  const { title, content, created_at: createdAt } = data[0];
  const html = parseMarkdown(content);
  return { props: { id, title, html, createdAt } };
};

export default Page;
