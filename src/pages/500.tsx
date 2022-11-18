import { Head } from "src/components/head";

const Page = () => (
  <>
    <Head title="Server Error" description="Server error.">
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <main className="flex flex-col justify-center items-center gap-8 max-w-5xl min-h-screen px-8 pt-20 mx-auto">
      <h1 className="font-bold text-3xl sm:text-4xl">Server Error</h1>
      <div className="space-y-2 text-base sm:text-lg text-center">
        <p>
          Sorry, this content is temporarily unavailable, due to an unexpected
          server error.
        </p>
        <p>
          You can try again later, or&nbsp;
          <a
            href="https://github.com/mrcaidev/paste/issues/new"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-800 dark:hover:text-sky-200 underline underline-offset-8"
          >
            report the issue
          </a>
          .
        </p>
      </div>
    </main>
  </>
);

export default Page;
