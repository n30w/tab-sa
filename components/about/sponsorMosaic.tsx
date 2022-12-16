import fcrlogo from "../../public/fcrlogo.svg";

export default function sponsorMosaic() {
  return (
    <>
      <div className="py-14 grid grid-cols-1 2xl:grid-cols-3 content-start justify-items-center text-center">
        <div className="flex flex-wrap w-auto md:flex-row px-9 items-center text-left justify-evenly space-y-2 space-x-2">
          <div className="grid h-80 flex-grow justify-items-center pt-3">
            <div className="card tabGradientR py-auto px-3 py-3 mx-3">
              <div className="bg-white rounded-lg px-4 py-4 h-full w-full">
                <h3 className="text-3xl font-bold text-tabTheme-200">
                  The Cassim Peer Trust
                </h3>
                <h4>in South Africa</h4>
                <p className="pt-2">Information about this sponsor</p>
              </div>
            </div>
          </div>

          <div className="grid h-80 flex-grow justify-items-center">
            <div className="card tabGradientR py-auto px-3 py-3 mx-3">
              <div className="bg-white rounded-lg px-4 py-4 h-full w-full">
                <h3 className="text-3xl font-bold text-tabTheme-200">
                  Sheridan and Julia Ing Foundation
                </h3>
                <h4>in Honolulu, Hawaii</h4>
                <p className="pt-2">Information about this sponsor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap w-full lg:flex-row px-9 py-9 justify-evenly space-y-4 items-center">
          <a href="https://www.punahou.edu/" target={"_blank"}>
            <div className="grid flex-grow justify-items-center pt-4">
              <div className="h-60 card bg-[#052057] px-9 py-4">
                <img
                  src="/punahoulogo.png"
                  alt="Punahou School"
                  className="w-40 h-40"
                />
                <h3 className="pt-4 font-overpass font-bold text-white tracking-tight">
                  Punahou School
                </h3>
              </div>
            </div>
          </a>
          <a href="https://www.iolani.org/" target={"_blank"}>
            <div className="grid flex-grow justify-items-center place-items-center">
              <div className="h-60 w-50 card bg-[#c8102e] px-2 py-8">
                <img
                  src="/iolanilogo.svg"
                  alt="Iolani School"
                  className="w-50 h-50"
                />
              </div>
            </div>
          </a>
          <a href="https://www.exeter.edu/" target={"_blank"}>
            <div className="grid flex-grow justify-items-center place-items-center">
              <div
                className="h-60 w-50 card bg-white border-4 border-[#9a1d2e] px-8 pt-24"
                style={{ borderWidth: 6 }}
              >
                <img
                  src="/exeterlogo.png"
                  alt="Phillips Exeter Academy"
                  className="w-50 h-50"
                />
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap w-full lg:flex-row px-9 items-center">
          <div className="grid flex-grow justify-items-center">
            <a
              href="https://firstcarrental.co.za"
              target={"_blank"}
              className="px-10 py-10"
            >
              <img
                src="/fcrlogo.svg"
                alt="First Car Rental Logo"
                // style={{ scale: "150%" }}
              />
            </a>
          </div>
          <div className="grid flex-grow justify-items-center">
            <a href="https://www.education.gov.za/" target={"_blank"}>
              <img
                src="/southafricadoelogo.png"
                alt="South Africa Department of Education"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
