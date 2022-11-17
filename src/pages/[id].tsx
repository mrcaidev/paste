import type { GetServerSideProps } from "next";

interface Props {
  title: string;
  html: string;
  createdAt: string;
}

const Page = ({ title, html, createdAt }: Props) => (
  <>
    <h1>{title}</h1>
    <time dateTime={createdAt}>{createdAt}</time>
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </>
);

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
  query,
}) => {
  const id = params?.id ?? "";
  const password = query.p ?? "";
  console.log({ id, password });

  return {
    props: {
      title: "Test",
      html: "<p>Hello world!</p>",
      createdAt: "2022-11-17T15:06:23.228Z",
    },
  };
};

export default Page;
