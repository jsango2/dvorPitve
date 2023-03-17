import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      {/* <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      /> */}
      {/* <link rel="shortcut icon" href="/favicon/runzadar32x32.ico" /> */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />

      <meta
        name="google-site-verification"
        content="12b-Op_-NcIrm_liQc5VfdG1kVFnP3vg1VMsvrZEdHw"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
