import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import DesktopTitle from "./navbar/fullTitle";
import FullWidthNavbar from "./navbar/fullWidthNav";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Reflections", href: "/reflections" },
  { name: "Resources", href: "/resources" },
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

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 md:hidden font-atkinson"
          >
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="">
                      <div
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 align-center content-end place-content-between h-56">
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
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
        <footer className="fixed md:hidden w-screen h-screen z-50">
          <div className="grid h-screen grid-cols-1 content-end">
            <div className="flex w-full items-center justify-center">
              <div
                className="h-auto px-48 pb-7 pt-3 -mb-4 bg-white border-2 border-black rounded-xl text-black text-center text-2xl cursor-pointer"
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
