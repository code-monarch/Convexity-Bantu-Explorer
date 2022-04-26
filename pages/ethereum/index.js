import Head from "next/head";
import Layout from "../../components/Ethereum/index";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ETHEREUM</title>
        <meta name='description' content='XBN Explorer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Layout>
  );
}
