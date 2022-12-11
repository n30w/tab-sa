import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function DesktopTitle() {
  return (
    <>
      {/* bg-gradient-to-r from-[#003166] to-[#2B6798] */}
      <div className="w-screen" aria-label="Global">
        <div className="flex transition-colors duration-800 ease-in-out px-10 w-screen -mt-2 pt-6 space-x-4 rounded-lg py-5 2xl:mb-1 pb-4 lg:pb-6 bg-white border-2 border-black justify-between md:justify-evenly">
          <div className="flex justify-center font-atkinson tracking-normal text-black">
            <Link href="/">
              <span className="hidden sm:inline-block font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                Teachers Across Borders
              </span>
              <span className="inline-block sm:hidden text-4xl font-bold">
                TAB-SA
              </span>
              {"  "}
              <span className="pl-2 hidden sm:inline-block text-lg sm:text-xl md:text-2xl font-normal">
                Southern Africa
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
