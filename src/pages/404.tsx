import Link from "next/link";
import { Head } from "src/components/head";

const Page = () => (
  <>
    <Head title="Not Found" description="Page not found.">
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <main className="flex flex-col justify-center items-center gap-8 max-w-5xl min-h-screen px-8 pt-20 mx-auto">
      <h1 className="font-bold text-3xl sm:text-4xl">Page Not Found</h1>
      <div className="space-y-2 text-base sm:text-lg text-center">
        <p>Sorry, this content is no longer available.</p>
        <p>
          What about&nbsp;
          <Link
            href="/"
            className="hover:text-sky-800 dark:hover:text-sky-200 underline underline-offset-8"
          >
            pasting a new one
          </Link>
          ?
        </p>
      </div>
    </main>
  </>
);

export default Page;
