import Head from "next/head";
import Link from "next/link";

export default function Donate() {
  return (
    <>
      <Head>
        <title>TAB-SA | About</title>
        <meta name="TAB-SA | About" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <div className="content">
          <div className="sectionHeader">Donate</div>
          <div className="sectionContent pt-20">
            <div className="flex flex-col justify-center w-full lg:flex-row">
              <a
                href="https://givebox.com/517849"
                className="grid flex-grow h-36 card bg-tabTheme-200 text-white rounded-box place-items-center cursor-pointer"
                target={"_blank"}
              >
                Givebox
                <p className="text-center text-lg md:text-xl">
                  An online donation service for non-profit fundraising.
                </p>
              </a>
              <div className="divider lg:divider-horizontal">OR</div>
              <a
                href=""
                className="grid flex-grow h-36 card bg-base-300 rounded-box place-items-center"
                target={"_blank"}
              >
                Mail Form
                <p className="text-center">
                  A printable PDF form to be mailed.
                </p>
              </a>
            </div>
            <div className="sectionText">s</div>
          </div>
        </div>
      </div>
    </>
  );
}
