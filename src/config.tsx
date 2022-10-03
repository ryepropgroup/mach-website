import Head from "next/head";

const titleDefault = "MACH";
const url = "";
const description = "";
const author = "MACH";
const keywords: string[] = [];

export default function Header({ title = titleDefault }) {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/*
        Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name="og:title" content={title} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={"/mach-website/icons/share.gif"} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />

        <link
          rel="apple-touch-icon"
          href="/mach-website/icons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="/mach-website/icons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/mach-website/icons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/mach-website/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/mach-website/manifest.json" />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/mach-website/icons/favicon.ico" />
      </Head>
    </>
  );
}
