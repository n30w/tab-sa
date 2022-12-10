import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TAB-SA</title>
        <meta name="Teachers Across Borders Southern Africa" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative px-6 lg:px-8 2xl:pt-16">
          <div className="mx-auto max-w-auto pt-28 pb-36 sm:pt-60 sm:pb-60 md:pt-48 sm:pb-84 2xl:h-screen bg-slate-100">
            <div>
              <div className="flex justify-center">
                <img src="/Landing.svg" className="2xl:scale-150"></img>
              </div>
              <div className="flex flex-col justify-center space-y-2 pt-7">
                <div className="h-7 2xl:h-28"></div>
                <h1 className="text-4xl tracking-normal text-center sm:text-6xl 2xl:text-8xl font-atkinson">
                  Southern Africa
                </h1>
                <div className="xs:h-3 sm:h-6"></div>
                <h1 className="text-2xl tracking-tight text-center sm:text-3xl font-atkinson font-weight-400 ">
                  Changing communities through education
                </h1>

                {/* <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p> */}
                {/* <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get started
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Live demo
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="hero min-h-screen content-around">
        <div className="hero-content flex flex-col">
          <p className="text-2xl sm:text-3xl lg:text-4xl px-2">
            We are a group of educators born from the legacy of Apartheid. Every
            US summer, a group of math and science educators from Hawaii and
            around the US travel to Southern Africa to conduct workshops with
            our Southern African colleagues in rural schools.
          </p>
          <div className="max-w-auto"></div>
          <div className="bg-red-400">asdasdasdasds</div>
        </div>
      </div>
      <div className="hero min-h-screen bg-slate-100 content-around">
        <div className="hero-content flex flex-col">
          <p className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Our current projects take us to the Republic of South Africa and
            Swaziland.
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
          <p>
            In 2001, Punahou School (Hawaii) and the Cassim Peer Trust (South
            Africa) co-sponsored an international professional development
            project that sent a team of high school math and science teachers to
            South Africa to conduct curriculum-specific workshops with their
            South African colleagues from rural schools. The success of the
            pilot project led to more workshops in the following years, funded
            by grassroots community support in the USA and South Africa. 2016
            will mark the 16th year of the Project.Workshop content is designed
            to meet and exceed the standards of the Curriculum and Assessment
            Policy Statement (CAPS). Without upgrading the skills of educators
            in rural schools in South Africa, students have little hope of
            getting a chance at higher education. More than 100 volunteers from
            the USA have given workshop training to 4500+ South African
            teachers, and 1.5 million students have benefited from their
            teachers' upgraded skills in the past 15 years. And ultimately, US
            students are also the beneficiaries of their own teachers'
            professional development and life changing experiences in South
            Africa.In the words of Mr. Y. Chamda, one of the South African
            administrators of the program,
          </p>
          <p>
            "…to see colleagues from opposite ends of the earth share knowledge
            and culture with such great warmth and caring, is a sight to behold.
            This is an example of international cooperation and global
            understanding at its best."
          </p>
          <div className="max-w-auto"></div>
        </div>
      </div>
    </>
  );
}
