import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import DesktopTitle from "./navbar/fullTitle";
import FullWidthNavbar from "./navbar/fullWidthNav";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Projects", href: "/projects" },
  { name: "Impact", href: "/impact" },
  // { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
  { name: "Donate", href: "/donate" },
];

export default function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="w-screen fixed z-50">
        <DesktopTitle mobileMenuOpen={mobileMenuOpen} />

        {/* Tablet and Desktop Navbar */}
        <FullWidthNavbar navigation={navigation} />

        {/* Mobile navbar */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            //@ts-ignore
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6  md:hidden font-atkinson"
          >
            {/* Menu buttons */}
            <div className="my-2 flow-root justify-between ring-0">
              <div className="divide-gray-500/10">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="">
                      <div
                        className="flex my-4 -mx-3 rounded-lg py-4 text-center px-3 border-2 border-black font-normal leading-7 text-black text-2xl hover:bg-gray-400/10 cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Close button */}
            <div className="grid grid-cols-1 align-center content-end place-content-between">
              <div
                className="flex justify-center border-2 border-black rounded-xl py-2 cursor-pointer bg-red-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black "
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hide footer when dialog is present */}
      {!mobileMenuOpen && (
        <footer
          className="fixed md:hidden w-full z-50"
          style={{
            bottom: "0%",
          }}
        >
          <div className="grid content-end">
            <div className="flex justify-center">
              <div
                className="h-auto w-auto px-36 pb-7 pt-3 -mb-4 bg-white border-2 border-black rounded-xl text-black text-center text-2xl cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                <div className="h-10 w-10">
                  <Bars3Icon
                    className={`${mobileMenuOpen ? "hidden" : "block"}`}
                  />
                  <XMarkIcon
                    className={`${mobileMenuOpen ? "block" : "hidden"}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
