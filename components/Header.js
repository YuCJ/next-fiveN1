import Head from 'next/head';
import React from 'react';

function Header() {
  return (
    <Head>
      <title>591 簡易租屋查詢</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="快速查詢 591 租屋網資訊" />
      <meta property="og:title" content="591 簡易租屋查詢" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fiven1-quick-look.now.sh/" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/neighborhood999/fiveN1-rent-scraper/master/logo/fiveN1-rent-scraper-logo.png"
      />
      <meta property="og:description" content="快速查詢 591 租屋網資訊" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="./static/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="./static/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="./static/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="./static/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="./static/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="./static/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="./static/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="./static/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./static/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="./static/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="./static/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./static/favicon-16x16.png"
      />
      <link rel="manifest" href="./static/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="./static/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/react-select/1.2.1/react-select.min.css"
      />
    </Head>
  );
}

export default Header;
