import Head from "next/head";
import Slideshow from "../components/index/slideshow";
import Image from "next/image";
import { useRouter } from "next/router";
import bg from "../public/index/BradUyWithOtherTeachers.jpg";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>TAB-SA</title>
        <meta name="Teachers Across Borders Southern Africa" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="relative overflow-hidden bg-fill -mt-32"
        style={{
          height: 1000,
        }}
      >
        <Image
          src={"/index/BradUyWithOtherTeachers.jpg"}
          alt="Sitting around a table"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-fixed">
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-3xl md:text-6xl col-span-5">
              <h1
                style={{
                  lineHeight: 1.15,
                  letterSpacing: -2.5,
                }}
              >
                <span className=" text-white font-bold rounded-xl">
                  We change communities through education.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto pt-24">
        <div className="grid grid-cols-10 px-20">
          <div className="row-span-full col-start-1 col-span-6 self-center">
            <div className="text-left text-3xl md:text-7xl col-span-5">
              <h2
                style={{
                  lineHeight: 1.15,
                  letterSpacing: -2.5,
                }}
              >
                <span className="bg-[#ffeaba] text-black font-bold rounded-xl">
                  We are a group of educators born from the legacy of Apartheid.
                </span>
              </h2>
              <p className="text-2xl pt-7 w-2/3 text-black">
                {" "}
                Every US summer, a group of math and science educators from
                Hawaii and around the US travel to Southern Africa to conduct
                workshops with our Southern African colleagues in rural schools.{" "}
                <span
                  className="customLink hover:cursor-pointer"
                  onClick={() => {
                    router.push("/impact");
                  }}
                >
                  View our impact
                </span>
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
      <div className="w-5/6 mx-auto pt-16">
        <div className="grid grid-cols-10 px-20">
          <div className="row-span-full col-start-1 col-span-6 self-center">
            {" "}
            <Image
              src={"/index/2016_08_6.jpg"}
              width={1000}
              height={1000}
              className="grayscale"
              alt={"Sitting around a table"}
            />
          </div>
          <div className="row-span-full col-span-6 col-start-7 col-end-13 self-center p-12 z-10">
            <div className="grid grid-cols-3">
              <div className="text-left text-3xl md:text-7xl col-span-5">
                <h2
                  style={{
                    lineHeight: 1.15,
                    letterSpacing: -2.5,
                  }}
                >
                  <span className="bg-[#ffeaba] text-black font-bold rounded-xl">
                    We are at a critical juncture of South Africa&apos;s history{" "}
                  </span>
                </h2>
              </div>
              <p className="text-2xl pt-7 text-left col-span-3 text-black">
                {" "}
                The Republic of South Africa is at a critical juncture in its
                history. The national government has identified the teaching and
                learning of math and science as priorities in the educational
                needs of the country. While millions are no longer legally
                marginalized by the educational system, a massive infusion of
                material support and professional training of teachers and
                administrators is required, quickly, efficiently, and
                effectively to appropriately serve the long-neglected majority
                population of school children.{" "}
                <span
                  className="customLink hover:cursor-pointer"
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  Learn more
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto pt-20">
        <div className="grid grid-cols-1 justify-items-center">
          <div className="text-center text-3xl md:text-7xl col-span-1">
            <h2
              style={{
                lineHeight: 1.15,
                letterSpacing: -2.5,
              }}
            >
              <span className="bg-[#ffeaba] text-black font-bold rounded-xl">
                We could use another hand
              </span>
            </h2>
          </div>
          <div className="col-span-1">
            <Image
              alt="Teachers Across Borders Logo"
              src="/Logo.svg"
              className="scale-100 pt-12"
              width={312}
              height={335}
            />
          </div>
          <div className="col-span-1 pt-12">
            <p className="text-4xl">
              Want to help? You can{" "}
              <span
                className="customLink"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                contact
              </span>{" "}
              us or{" "}
              <span
                className="customLink"
                onClick={() => {
                  router.push("/donate");
                }}
              >
                donate
              </span>{" "}
              ! Help us help others.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
