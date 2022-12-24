import { GetStaticPaths, GetStaticProps } from "next";
import serialize from "../../../lib/serialize";
import qs from "qs";

export default function author({ post }: any) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>
              {post.author} {post.category.name}
            </h1>
          </div>
          <div className="sectionContent">
            <div className="">{serialize(post.body)}</div>
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
        "category.name": {
          equals: params.year,
        },
      },
    ],
  };

  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    { addQueryPrefix: true }
  ); // Output: ?where[author][equals]=Lyla Berg&where[and][0][category][name][equals]=2009

  console.log(stringifiedQuery);

  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts${stringifiedQuery}`
  );

  const post = await res.json();

  // console.log(post);

  return {
    props: {
      post: post.docs[0],
      // revalidate: 10,
    },
  };
}
