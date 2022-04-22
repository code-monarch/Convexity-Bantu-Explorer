import Head from "next/head";
import Header from "../../components/dashboard/Header";

const style = {
  container: `relative h-[100vh] w-[100vw] flex flex-col`,
};

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>XBN </title>
        <meta name='description' content='XBN Explorer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </div>
  );
}
