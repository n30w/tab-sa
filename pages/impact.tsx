import { GetStaticPaths, GetStaticProps } from "next";
import serialize from "../lib/serialize";
import { useRouter } from "next/router";

export default function Impact({ years }) {
  const router = useRouter();
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Impact</h1>
          </div>

          <div className="sectionContent">
            <p className="sectionText">
              View reflections, speeches, letters, or photos demonstrating the
              impacts of our organization on the teachers, leaders, and
              communities involved in our program.
            </p>
          </div>

          <div className="sectionContent">
            {years.map((year) => {
              return (
                <>
                  <div
                    className="w-full h-20 my-3 rounded-md hover:bg-[#ffeaba] hover:cursor-pointer border-2 border-black"
                    onClick={() => {
                      router.push(`/impact/${year}`);
                    }}
                  >
                    <div className="flex flex-col items-center py-4">
                      <h2 className="text-5xl">{year}</h2>
                    </div>
                  </div>
                </>
              );
            })}
            {/* <div className="card w-full h-96 bg-slate-300">
              PLACEHOLDER - Javascript Snippet Gallery with Text
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`);
  const posts = await res.json();
  const years = new Array();
  posts.docs.map((post) => {
    if (!years.includes(parseInt(post.category.name))) {
      years.push(parseInt(post.category.name));
    }
  });
  return {
    props: {
      years: years.sort((a, b) => {
        return a - b;
      }),
    },
    revalidate: 10,
  };
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

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   require("dotenv").config();

//   // const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`);
//   const res = await fetch(`http://payload:4000/api/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//       // revalidate: 10,
//     },
//   };
// };
