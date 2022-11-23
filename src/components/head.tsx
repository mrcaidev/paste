import NextHead from "next/head";

const domain = "https://paste.mrcai.dev";

interface Props {
  title: string;
  description: string;
  pathname: string;
}

export const Head = ({ title, description, pathname }: Props) => {
  const fullTitle = title + " - Paste";
  const url = domain + pathname;
  const image = domain + "/banner.png";
  const robots = pathname === "/" ? "index, follow" : "noindex, nofollow";

  return (
    <NextHead>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="canonical" content={url} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mrcaidev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@mrcaidev" />
    </NextHead>
  );
};
