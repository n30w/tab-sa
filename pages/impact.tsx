import { GetStaticPaths, GetStaticProps } from "next";
import serialize from "../lib/serialize";

export default function Impact({ posts }: any) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Impact</h1>
          </div>

          <div className="sectionContent">
            <p className="sectionText">
              View reflections, speeches, or letters demonstrating the impacts
              of our organization on the teachers, leaders, and communities
              involved in our program.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`);
//   const posts = await res.json();

//   const paths = posts.map((post) => ({
//     params: {},
//   }));

//   return {
//     paths,
//     fallback: false, // blocking here is if you have a lot of paths that don't need to be generated until they are queried by the user.
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  require("dotenv").config();

  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
      // revalidate: 10,
    },
  };
};
