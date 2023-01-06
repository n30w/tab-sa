import Head from "next/head";
import SponsorMosaic from "../components/about/sponsorMosaic";
import StaffGrid from "../components/about/staffGrid";
import serialize from "../lib/serialize";

export default function About({ page }: any) {
  return (
    <>
      <Head>
        <title>TAB-SA | About</title>
        <meta name="TAB-SA | About" content="TAB-SA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>About Us</h1>
          </div>
          <div className="sectionContent">
            {serialize(page.docs[0].pageLayouts.about.body, "")}
          </div>

          <div className="divider pb-12"></div>
          <div className="sectionHeader">
            <h1>Leadership</h1>
          </div>
          <StaffGrid staff={page.docs[0].pageLayouts.about.order} />

          <div className="divider py-12"></div>

          <div className="sectionHeader">
            <h1>Sponsors</h1>
          </div>
          <div className="sectionContent">
            <div className="sectionText">
              TAB-SA thanks our countless sponsors in the local communities,
              schools, and friends in many countries. We couldn`&apos;`t do this
              without you!
            </div>

            <SponsorMosaic />

            <div className="divider pb-12"></div>

            <div className="sectionHeader">
              <h1>Articles</h1>
            </div>
            <div className="sectionContent">
              <div className="sectionText">Articles we've been featured in</div>
              <div>
                <a
                  target="_blank"
                  href="https://westoahu.hawaii.edu/ekamakanihou/?p=6164"
                >
                  UH West Oahu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // TODO make this have a different address when in development vs production via env variables
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[title][equals]=About`
  );
  const page = await res.json();

  return {
    props: {
      page,
      revalidate: 10,
    },
  };
}
