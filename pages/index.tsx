import Head from "next/head";
import Slideshow from "../components/index/slideshow";

export default function Home() {
  return (
    <>
      <Head>
        <title>TAB-SA</title>
        <meta name="Teachers Across Borders Southern Africa" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="">
          <Slideshow />
        </div>
      </main>
    </>
  );
}
