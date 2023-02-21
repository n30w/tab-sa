import Link from "next/link";
import { FC } from "react";

export type mobileTitleTypes = {
  func;
};

const MobileTitle: FC<mobileTitleTypes> = ({ func }) => {
  return (
    <>
      <div
        className="hidden md:flex w-full items-center justify-evenly"
        aria-label="Global"
      >
        <div className="flex relative w-full justify-center space-x-2 sm:space-x-4 ml-2 -mb-20  text-lg sm:text-3xl font-atkinson -mt-8 px-8 text-black text-center">
          <Link
            href={"/"}
            onClick={() => func(false)}
            className="bg-white w-120 border-2 h-36 border-black rounded-lg px-8 pt-10 py-4 -mt-8"
          >
            <div className="">
              <span className="font-bold hidden sm:inline-block">
                Teachers Across Borders
              </span>{" "}
              <span className="font-bold inline-block sm:hidden text-xl">
                TAB
              </span>{" "}
            </div>
            <div>
              <span className="text-xl">Southern Africa</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileTitle;
