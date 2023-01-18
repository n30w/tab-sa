import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bg from "../public/index/BradUyWithOtherTeachers.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>TAB-SA</title>
        <meta name="Teachers Across Borders Southern Africa" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="block">
          <Image
            src={bg}
            style={{
              objectFit: "cover",
            }}
            alt="Brad Uy"
            fill={true}
            className="-z-10"
          />
        </div>
      </main>
    </>
  );
}
