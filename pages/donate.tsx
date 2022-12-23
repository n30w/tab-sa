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
            <h1>
              <span className="text-tabTheme-200">A one time donation,</span>{" "}
              <span className="text-tabTheme-100">a lifetime of learning.</span>
            </h1>
          </div>
          <div className="sectionContent">
            <h2 className="text-3xl text-left md:text-center pt-8 pb-14">
              Donate to us via
            </h2>
            <DonationBoxes />
            <div className="text-3xl text-left md:text-center pt-20">
              The structural and logistical commitment of our South African
              partners, and the enormous impact on rural school education, makes
              this an excellent project for effective sponsorship. The aid is
              efficient, specific, targeted, and relevant.
            </div>
            <div className="text-xl text-left md:text-center pt-12 px-1 md:px-52">
              <p>
                As required by the Internal Revenue Code, there were no goods
                and services provided to you in consideration for this gift. As
                a non-profit corporation under the Tax Code Section 501(c)(3),
                all contributions are fully tax deductible.
              </p>
            </div>
          </div>
        </div>

        <div className="sectionHeader pt-2 pb-24">
          Thank you for your support!
        </div>
      </div>
    </>
  );
}
