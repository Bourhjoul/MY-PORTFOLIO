import Head from "next/head"
import Theme from "../styles/theme"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bourhjoul Abdessamad | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:url"
          content="https://www.abourhjoul.me/"
          key="ogurl"
        />
        <meta
          property="og:site_name"
          content="Abdessamad Bourhjoul"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Abdessamad Bourhjoul | Portfolio"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Abdessamad Bourhjoul's portfolio."
          key="ogdesc"
        />
        <meta name="description" value="Abdessamad Bourhjoul's portfolio." />
        <meta property="og:type" content="website" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
