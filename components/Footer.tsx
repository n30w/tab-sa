import Link from "next/link";
import { navigation } from "./navbar";

export default function Footer() {
  return (
    <>
      <div className="footer p-10 pb-10 md:pb-10 bg-base-200 text-base-content font-atkinson">
        <div className="">
          <img src="/Logo.svg" className="scale-150" />
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
