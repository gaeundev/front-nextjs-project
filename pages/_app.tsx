import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/globals.scss'
import 'styles/setting.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>프로젝트</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
