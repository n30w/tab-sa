import { ComputerDesktopIcon, PrinterIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

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
          <div className="sectionHeader">Help Us Pay It Forward</div>
          <div className="sectionContent">
            <h1 className="text-3xl text-left md:text-center">
              You can donate to us using these two methods
            </h1>
            <div className="flex flex-col justify-center w-full lg:flex-row py-12">
              <a
                href="https://givebox.com/517849"
                className="cursor-pointer"
                target={"_blank"}
              >
                <div className="grid grid-cols-2 place-items-center flex-grow h-44 w- card rounded-box text-white  bg-tabTheme-200">
                  <div className="flex flex-col justify-between space-y-2 items-center px-2">
                    <div className="text-2xl 2xl:text-4xl font-bold text-center tracking-wide">
                      Givebox
                    </div>
                    <ComputerDesktopIcon className=":w-20 h-20" />
                  </div>
                  <div className="flex justify-center text-xl md:text-2xl px-2">
                    Givebox is an online donation service for non-profit
                    fundraising.
                  </div>
                </div>
              </a>
              <div className="divider lg:divider-horizontal">OR</div>
              <a href="" className="cursor-pointer" target={"_blank"}>
                <div className="grid grid-cols-2 place-items-center flex-grow h-44 w-full card rounded-box text-white  bg-tabTheme-100">
                  <div className="flex flex-col justify-between space-y-2 items-center px-2">
                    <div className="text-2xl 2xl:text-4xl text-center font-bold tracking-wide">
                      Mail-in Form
                    </div>
                    <PrinterIcon className="h-20 w-20" />
                  </div>
                  <div className="flex justify-center text-xl md:text-2xl px-2">
                    A PDF form can be downloaded, printed, and mailed to us.
                  </div>
                </div>
              </a>
            </div>
            <div className="text-3xl text-left md:text-center">
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
