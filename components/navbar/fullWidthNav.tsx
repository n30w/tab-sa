import Link from "next/link";
import { useRouter } from "next/router";

export default function FullWidthNavbar({ navigation }: any) {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col">
        <nav
          className="hidden md:flex h-9 items-center pt-8"
          aria-label="Global"
        >
          {/* grow hidden md:flex w-full lg:flex-1 justify-center md:pl-10 scale-100 2xl:scale-125 */}
          <div className="grow hidden md:flex w-full lg:flex-1 justify-center scale-100">
            <div className="btn-group font-atkinson">
              {navigation.map((item: any) => (
                <Link
                  className={`btn text-black ${
                    router.pathname === item.href
                      ? "bg-[#FFB612] hover:bg-[#FFB612]"
                      : "bg-white hover:bg-[#ffeaba]"
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
          {/* <div className="grow-0 flex w-full lg:flex-1 justify-end pr-10 scale-100 2xl:justify-center 2xl:scale-125">
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
            </div> */}
        </nav>
      </div>
    </>
  );
}
