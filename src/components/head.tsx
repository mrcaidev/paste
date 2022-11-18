import NextHead from "next/head";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  description: string;
}

export const Head = ({ title, description, children }: Props) => (
  <NextHead>
    <title>{`${title} - Paste`}</title>
    <meta name="description" content={description} />
    {children}

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://paste.mrcai.dev/banner.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="https://paste.mrcai.dev/" />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@mrcaidev" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://paste.mrcai.dev/banner.png" />
    <meta name="twitter:creator" content="@mrcaidev" />
  </NextHead>
);
