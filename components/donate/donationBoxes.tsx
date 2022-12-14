import { ComputerDesktopIcon, PrinterIcon } from "@heroicons/react/24/outline";

export default function donationBoxes() {
  return (
    <>
      <div className="flex flex-col justify-center w-full lg:flex-row">
        <a
          href="https://givebox.com/517849"
          className="cursor-pointer"
          target={"_blank"}
        >
          <div className="grid grid-cols-2 place-items-center flex-grow h-60 card rounded-box text-white bg-tabTheme-200">
            <div className="flex flex-col justify-between space-y-2 items-center px-2">
              <div className="text-2xl 2xl:text-4xl font-bold text-center tracking-wide">
                Givebox
              </div>
              <ComputerDesktopIcon className=":w-20 h-20" />
            </div>
            <div className="flex justify-center text-xl md:text-2xl px-2">
              <p>
                Givebox is an online donation service for non-profit
                fundraising.
              </p>
            </div>
          </div>
        </a>
        <div className="divider lg:divider-horizontal">OR</div>
        <a href="" className="cursor-pointer" target={"_blank"}>
          <div className="grid grid-cols-2 place-items-center flex-grow h-60 w-full card rounded-box text-white  bg-tabTheme-100">
            <div className="flex flex-col justify-between space-y-2 items-center px-2">
              <div className="text-2xl 2xl:text-4xl text-center font-bold tracking-wide">
                <p>Mail-in Form</p>
              </div>
              <PrinterIcon className="h-20 w-20" />
            </div>
            <div className="flex justify-center text-xl md:text-2xl px-2">
              A PDF form can be downloaded, printed, and mailed to us.
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
