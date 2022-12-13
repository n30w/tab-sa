import Head from "next/head";
import DonationBoxes from "../components/donate/donationBoxes";
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
          <div className="sectionHeader">
            <span className="text-tabTheme-200">A one time donation,</span>{" "}
            <span className="text-tabTheme-100">a lifetime of learning.</span>
          </div>
          <div className="sectionContent">
            <h1 className="text-3xl text-left md:text-center pt-8 pb-12">
              You can donate to us using these two methods
            </h1>
            <DonationBoxes />
            <div className="text-3xl text-left md:text-center pt-16">
              The structural and logistical commitment of our South African
              partners, and the enormous impact on rural school education, makes
              this an excellent project for effective sponsorship. The aid is
              efficient, specific, targeted, and relevant.
            </div>
          </div>
        </div>

        <div className="sectionHeader">Thank you for your support!</div>
      </div>
    </>
  );
}
