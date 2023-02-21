import Link from "next/link";
import { FC } from "react";

export type desktopTitleTypes = {
  mobileMenuOpen: boolean;
};

const DesktopTitle: FC<desktopTitleTypes> = ({ mobileMenuOpen }) => {
  return (
    <>
      {/* bg-gradient-to-r from-[#003166] to-[#2B6798] */}
      <div className="w-screen" aria-label="Global">
        {!mobileMenuOpen && (
          <div className="flex transition-colors duration-800 ease-in-out px-10 w-screen -mt-2 pt-6 space-x-4 py-5 2xl:mb-1 pb-4 lg:pb-6 bg-white border-b-2 border-black justify-between md:justify-evenly">
            <div className="flex justify-center font-atkinson tracking-normal text-black">
              <Link href="/">
                <span className="hidden sm:inline-block font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                  Teachers Across Borders
                </span>
                <span className="inline-block sm:hidden text-4xl font-bold">
                  TAB{" "}
                  <span className="text-3xl font-normal">Southern Africa</span>
                </span>
                {"  "}
                <span className="pl-2 hidden sm:inline-block text-lg sm:text-3xl md:text-4xl font-normal">
                  Southern Africa
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DesktopTitle;
