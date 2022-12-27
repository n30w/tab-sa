import Link from "next/link";
import qs from "qs";

export default function year({ posts, year }) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>{year} Impacts</h1>
          </div>
          <div className="sectionContent">
            <ul>
              {posts.map((post) => {
                return (
                  <>
                    <Link href={`${year}/${post.author}`}>
                      <li>{post.author}</li>
                    </Link>
                  </>
                );
              })}
            </ul>
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
    },
  }));

  return {
    paths,
    fallback: false, // blocking here is if you have a lot of paths that don't need to be generated until they are queried by the user.
  };
}

export async function getStaticProps({ params }) {
  const query = {
    "category.name": {
      equals: params.year,
    },
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
  const posts = await res.json();

  return {
    props: {
      posts: posts.docs,
      year: params.year,
    },
  };
}
