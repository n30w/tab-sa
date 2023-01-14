import Link from "next/link";
import Image from "next/image";
import { navigation } from "./navbar";

export default function Footer() {
  return (
    <>
      <div className="footer p-10 pb-10 md:pb-10 bg-base-200 text-base-content font-atkinson">
        <div className="">
          <Image
            alt="Teachers Across Borders Logo"
            src="/Logo.svg"
            className="scale-50"
            width={312}
            height={335}
          />
        </div>

        <div>
          <span className="footer-title">
            <span style={{ fontWeight: 700, textTransform: "none" }}>
              Teachers Across Borders
            </span>{" "}
            <span style={{ fontWeight: 400, textTransform: "none" }}>
              Southern Africa
            </span>
          </span>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="">
              <div className="link link-hover">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
