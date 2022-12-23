import { GetStaticPaths, GetStaticProps } from "next";
import serialize from "../../../lib/serialize";
import qs from "qs";

export default function author({ post }: any) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>{post.docs[0].author}</h1>
          </div>
          <div className="sectionContent">
            <h2>{post.docs[0].category.name}</h2>
            <div className="">{serialize(post.docs[0].body)}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`);
  const posts = await res.json();

  const paths = posts.docs.map((post) => ({
    params: {
      year: post.category.name,
      // author: post.author.replace(/\s/g, "").toLowerCase(),
      author: post.author,
    },
  }));

  return {
    paths,
    fallback: false, // blocking here is if you have a lot of paths that don't need to be generated until they are queried by the user.
  };
}

export async function getStaticProps({ params }) {
  const query = {
    author: {
      equals: params.author,
    },
    and: [
      {
        category: {
          name: {
            equals: params.year,
          },
        },
      },
    ],
  };

  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    { addQueryPrefix: true }
  );

  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts${stringifiedQuery}`
  );

  const post = await res.json();

  // console.log(stringifiedQuery);
  // console.log(post);

  return {
    props: {
      post,
      // revalidate: 10,
    },
  };
}
