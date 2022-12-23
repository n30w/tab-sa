import { GetStaticPaths, GetStaticProps } from "next";
import serialize from "../lib/serialize";

export default function Reflections({ posts }: any) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Reflections</h1>
          </div>

          {/* <div>{posts.map()}</div> */}
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
