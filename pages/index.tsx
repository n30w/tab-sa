import Head from "next/head";
import Slideshow from "../components/index/slideshow";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>TAB-SA</title>
        <meta name="Teachers Across Borders Southern Africa" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto">
        {/* <div className="grid grid-cols-1 gap-y-5">
          <div className="grid grid-cols-5">
            <div className=" text-center text-3xl md:text-7xl z-10 col-span-5">
              <h2
                style={{
                  lineHeight: 1.15,
                }}
              >
                <span className="bg-[#ffeaba]">
                  We change communities through education.
                </span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            <Image
              src={"/index/BradUyWithOtherTeachers.jpg"}
              style={{
                objectFit: "contain",
              }}
              width={1000}
              height={1000}
              className="col-span-1 grayscale mask mask-square w-full md:w-1/2"
              alt={"Sitting around a table"}
            />
          </div> */}
        {/* <div className="z-20">askllakjds </div> */}
        {/* </div> */}
      </main>
      <div className="wrap w-5/6 mx-auto">
        <div className="grid grid-cols-10 px-20">
          <div className="row-span-full col-start-1 col-span-6 self-center">
            <Image
              src={"/index/BradUyWithOtherTeachers.jpg"}
              width={1000}
              height={1000}
              className="grayscale"
              alt={"Sitting around a table"}
            />
          </div>
          <div className="row-span-full col-span-6 col-end-11 self-center p-10 z-10">
            <div className=" text-right text-3xl md:text-8xl z-10 col-span-5">
              <h2
                style={{
                  lineHeight: 1.15,
                  letterSpacing: -2.5,
                }}
              >
                <span className="bg-[#ffeaba] text-black font-bold">
                  We change communities through education.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap w-5/6 mx-auto pt-32">
        <div className="grid grid-cols-10 px-20">
          <div className="row-span-full col-start-1 col-span-6 self-center">
            <div className="text-left text-3xl md:text-7xl col-span-5">
              <h2
                style={{
                  lineHeight: 1.15,
                  letterSpacing: -2.5,
                }}
              >
                <span className="bg-[#ffeaba] text-black font-bold">
                  We are a group of educators born from the legacy of Apartheid.
                </span>
              </h2>
              <p className="text-2xl pt-7 w-2/3">
                {" "}
                Every US summer, a group of math and science educators from
                Hawaii and around the US travel to Southern Africa to conduct
                workshops with our Southern African colleagues in rural schools.
              </p>
            </div>
          </div>
          <div className="row-span-full col-span-6 col-end-11 self-center p-12 -z-10">
            <Image
              src={"/index/TABSA_2011.jpg"}
              width={1000}
              height={1000}
              className="grayscale"
              alt={"Sitting around a table"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
