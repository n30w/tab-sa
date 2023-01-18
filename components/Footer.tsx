import Link from "next/link";
import Image from "next/image";
import { navigation } from "./navbar";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      {/* Do not render Footer on homepage */}
      {router.pathname !== "/" && (
        <div className="footer p-14 pb-10 hidden md:pb-10 bg-base-200 text-base-content font-atkinson md:grid grid-cols-1 md:grid-cols-5 justify-items-bottom">
          <div className="hidden md:flex items-center justify-center">
            <Image
              alt="Teachers Across Borders Logo"
              src="/Logo.svg"
              className="scale-50"
              width={312}
              height={335}
            />
          </div>
          <div className=""></div>

          <div className="flex flex-col pt-8">
            <span className="footer-title">
              <span style={{ fontWeight: 700, textTransform: "none" }}>
                Teachers Across Borders
              </span>{" "}
              <span style={{ fontWeight: 400, textTransform: "none" }}>
                Southern Africa
              </span>
            </span>
            <div className="flex flex-flow md:flex-col">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="">
                  <div className="link link-hover">{item.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
