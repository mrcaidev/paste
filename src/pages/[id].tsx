import type { GetServerSideProps } from "next";
import { Head } from "src/components/head";
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
      <p className="pl-3 mb-4 border-l-2 border-slate-500 text-sm text-slate-600 dark:text-slate-400">
        Pasted at:&nbsp;
        <time dateTime={createdAt}>
          {new Date(createdAt).toLocaleString("zh-cn")}
        </time>
      </p>
      <article className="article">
        <h1>{title}</h1>
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
  }
  if (data === null) {
    return { notFound: true };
  }

  const { title, content, created_at: createdAt } = data[0];
  const html = parseMarkdown(content);
  return { props: { id, title, html, createdAt } };
};

export default Page;
