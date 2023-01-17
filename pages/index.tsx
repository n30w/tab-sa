import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bg from "../public/index/BradUyWithOtherTeachers.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>TAB-SA</title>
        <meta name="Teachers Across Borders Southern Africa" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="">
          <Image
            src={bg}
            style={{
              objectFit: "cover",
            }}
            alt="Brad Uy"
            fill={true}
            className="-z-10"
          />
          <div className="mx-auto 2xl:h-screen pt-12">
            <div>
              <div className="flex flex-col justify-start space-y-2 pt-7 text-white px-10">
                <div className="h-7 2xl:h-28"></div>
                <h1 className="text-2xl tracking-normal text-left sm:text-3xl 2xl:text-5xl font-atkinson font-bold">
                  We change communities through education
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="hero min-h-screen content-around">
        <div className="hero-content flex flex-col">
          <div className="flex justify-center">
            <Image
              src="/Logo.svg"
              className=""
              width={312}
              height={335}
              alt={"Teachers Without Borders Logo"}
            />
          </div>
          <p className="text-2xl sm:text-3xl lg:text-4xl px-2">
            We are a group of educators born from the legacy of Apartheid. Every
            US summer, a group of math and science educators from Hawaii and
            around the US travel to Southern Africa to conduct workshops with
            our Southern African colleagues in rural schools.
          </p>
          <div className="max-w-auto"></div>
        </div>
      </div>
      <div className="hero min-h-screen content-around">
        <div className="hero-content flex flex-col">
          <p className="text-2xl sm:text-3xl lg:text-3xl px-2">
            The Republic of South Africa is at a critical juncture in its
            history. The national government has identified the teaching and
            learning of math and science as priorities in the educational needs
            of the country. While millions are no longer legally marginalized by
            the educational system, a massive infusion of material support and
            professional training of teachers and administrators is required,
            quickly, efficiently, and effectively to appropriately serve the
            long-neglected majority population of school children.
          </p>
          <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-xl leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <span className="text-gray-600">
              Learn more of our story.{" "}
              <Link href="/about" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                About us <span aria-hidden="true">&rarr;</span>
              </Link>
            </span>
          </div>

          <div className="max-w-auto"></div>
        </div>
      </div>
    </>
  );
}
