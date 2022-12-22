import Head from "next/head";
import SponsorMosaic from "../components/about/sponsorMosaic";
import StaffGrid from "../components/about/staffGrid";

export default function About({ staff }: any) {
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
            <p className="sectionText">
              Our mission is to assist teachers of math and science in rural
              Southern African schools to meet and exceed the National
              Curriculum Standards as well as sharing methodology, techniques,
              and pedagogy in subject areas.
            </p>
            <p className="sectionText">
              In 2001,{" "}
              <a
                className="link text-tabTheme-100"
                href="https://www.punahou.edu/"
                target={"_blank"}
              >
                Punahou School
              </a>{" "}
              in Hawaii with the Cassim Peer Trust in South Africa co-sponsored
              an international professional development project that sent a team
              of high school math and science teachers to South Africa to
              conduct curriculum-specific workshops with their South African
              colleagues from rural schools. The success of the pilot project
              led to more workshops in the following years, funded by grassroots
              community support in the USA and South Africa.
            </p>
            <p className="sectionText">
              Without upgrading the skills of educators in rural schools in
              South Africa, students have little hope of getting a chance at
              higher education. More than 100 volunteers from the USA have given
              workshop training to over 4,500 South African teachers,
              benefitting 1.5 million students in the past 20 years. US students
              also benefit from their own teachers' professional development and
              life-changing experiences in South Africa. In the words of one of
              the South African administrators of the program Mr. Y. Chamda:
            </p>
            <p className="sectionText">
              "…to see colleagues from opposite ends of the earth share
              knowledge and culture with such great warmth and caring, is a
              sight to behold. This is an example of international cooperation
              and global understanding at its best."
            </p>
          </div>

          <div className="divider pb-12"></div>
          <div className="sectionHeader">
            <h1>Leadership</h1>
          </div>
          <StaffGrid staff={staff.docs[0].pageLayouts.about.order} />

          <div className="divider py-12"></div>

          <div className="sectionHeader">
            <h1>Sponsors</h1>
          </div>
          <div className="sectionContent">
            <div className="sectionText">
              TAB-SA thanks our countless sponsors in the local communities,
              schools, and friends in many countries. We couldn't do this
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
  const staff = await res.json();

  return {
    props: {
      staff,
      revalidate: 10,
    },
  };
}
