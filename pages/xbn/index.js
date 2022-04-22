import Head from "next/head";
import Layout from "../../components/exchangeCoins/Xbn/index"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>XBN </title>
        <meta name='description' content='XBN Explorer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Layout>
  );
}
