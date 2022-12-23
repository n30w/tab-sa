import { GetStaticPaths, GetStaticProps } from "next";
import serialize from "../../../lib/serialize";

export default function author({ posts }: any) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Reflections</h1>
          </div>
          {posts.docs.map((p) => (
            <div className="sectionContent">
              {/* Year */}
              <h2>{p.category[0].name}</h2>
              {/* Author of reflection */}
              <h3>{p.author}</h3>
              {/* Body of reflection, from rich text */}
              <div className="">{serialize(p.body)}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/categories`
  );
  const categories = await res.json();

  const paths = categories.docs.map((cat) => ({
    params: {
      name: cat.name,
    },
  }));

  return {
    paths,
    fallback: false, // blocking here is if you have a lot of paths that don't need to be generated until they are queried by the user.
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // require("dotenv").config();

  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?category=${params?.name}&author=${params?.author}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
      // revalidate: 10,
    },
  };
};
