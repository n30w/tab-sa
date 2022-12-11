import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import DesktopTitle from "./navbar/desktop_title";
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
        <DesktopTitle />

        {/* Tablet and Desktop Navbar */}
        <FullWidthNavbar navigation={navigation} />
      </header>
      <footer className="fixed md:hidden w-screen h-screen z-50">
        <div className="grid h-screen grid-cols-1 content-end">
          <div className="flex w-full items-center justify-center">
            <div className="h-auto px-48 pb-7 pt-3 -mb-4 bg-white border-2 border-black rounded-xl text-black text-center text-2xl cursor-pointer">
              <Bars3Icon className="h-10 w-10" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
