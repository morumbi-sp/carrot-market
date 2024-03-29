import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='mx-auto max-w-lg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
