import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Reflections", href: "/reflections" },
  { name: "Resources", href: "/resources" },
];

const navigation2 = [
  { name: "Contact", href: "/contact" },
  { name: "Donate", href: "/donate" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="w-full fixed z-50">
        {/* Phone Navbar */}
        <nav className="flex h-9 items-center md:hidden pt-12 justify-start">
          <div className="flex lg:hidden">
            {!mobileMenuOpen && (
              <button
                type="button"
                className={`-m-1.5 inline-flex items-center justify-start rounded-md p-3.5 text-black border-2 border-black bg-white pl-10`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="scale-150 h-6 w-6" aria-hidden="true" />
              </button>
            )}
            {mobileMenuOpen && (
              <button
                type="button"
                className="-m-1.5 inline-flex items-center justify-start rounded-md p-3.5 border-2 border-black pl-10 text-white bg-[#DE3831]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="scale-150 h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>

          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              //@ts-ignore
              focus="true"
              className="fixed inset-0 overflow-y-auto bg-white px-6 py-6 md:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link href="/" className="p-1.5">
                    <span className="sr-only">
                      Teachers Across Borders Southern Africa
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-10 flow-root">
                <div className="-my-2 divide-y divide-gray-500/10">
                  <div className="space-y-7 py-10">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block border-black border-2 rounded-lg py-8 px-7 font-atkinson text-4xl leading-7 text-black`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="divider"></div>
                    {navigation2.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block border-black border-2 rounded-lg py-8 px-5 font-atkinson text-4xl leading-7 text-black hover:text-white hover:bg-[#007A4D]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>

          <div className="flex w-full justify-center space-x-1 sm:space-x-4 mx-10 text-md sm:text-xl font-atkinson bg-[#2B6798] py-4 px-2 rounded-lg border-2 border-black text-white text-center">
            <div className="flex sm:hidden font-bold">TAB</div>
            <div className="hidden sm:flex font-bold">
              Teachers Across Borders
            </div>
            <div className="flex justify-end">Southern Africa</div>
          </div>
        </nav>

        {/* Tablet and Desktop Navbar */}
        <div className="flex flex-col">
          <div
            className="hidden md:flex w-full items-center justify-evenly"
            aria-label="Global"
          >
            {/* bg-gradient-to-r from-[#003166] to-[#2B6798] */}
            <div className="mx-9 w-full flex -mt-1 pt-4 space-x-3 font-atkinson rounded-lg px-2 py-4 font-bold text-4xl border bg-[#2B6798] border-none text-white justify-center ">
              <div className="tracking-wide">
                <Link href="/">
                  Teachers Across Borders{" "}
                  <span className="text-xl font-normal">Southern Africa</span>
                </Link>
              </div>
            </div>
          </div>
          <nav
            className="hidden md:flex h-9 items-center pt-8"
            aria-label="Global"
          >
            <div className="grow hidden md:flex w-full lg:flex-1 justify-start md:pl-10">
              <div className="btn-group font-atkinson">
                {navigation.map((item) => (
                  <Link
                    className={`btn text-black ${
                      router.pathname === item.href
                        ? "bg-[#FFB612] text-white hover:bg-[#FFB612]"
                        : "bg-white hover:bg-[#FFB612]"
                    }`}
                    key={item.name}
                    href={item.href}
                    style={{
                      width: "auto",
                      fontSize: "max(23px, 1vw)",
                      // fontSize: "1.7vw",
                      height: 2,
                      // paddingTop: "min(10px, 0.7vw)",
                      paddingBottom: "min(3px, 0.7vw)",
                      transitionDuration: "75ms",
                      textTransform: "none",
                      fontWeight: 400,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grow-0 flex w-full lg:flex-1 justify-end pr-10">
              <div className="btn-group font-atkinson">
                {navigation2.map((item) => (
                  <Link
                    className={`btn ${
                      router.pathname === item.href
                        ? "bg-[#007A4D] text-white hover:bg-[#007A4D]"
                        : "bg-white text-black hover:text-white hover:bg-[#007A4D]"
                    }`}
                    key={item.name}
                    href={item.href}
                    style={{
                      width: "auto",
                      fontSize: "max(23px, 1vw)",
                      // fontSize: "1.7vw",
                      height: "auto",
                      paddingTop: "min(3px, 0.7vw)",
                      paddingBottom: "min(3px, 0.7vw)",
                      transitionDuration: "75ms",
                      textTransform: "none",
                      fontWeight: 400,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
