import Head from "next/head";
import Layout from "../../components/usdt/index";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>USDT</title>
        <meta name='description' content='USDT Explorer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </Layout>
  );
}
