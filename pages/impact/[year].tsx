import { GetStaticPaths, GetStaticProps } from "next";

export default function year({ posts, year }) {
  // console.log(posts);
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Reflections from {year}</h1>
          </div>
          <div className="sectionContent">
            <ul>
              {posts.docs.map((post) => {
                return <li>{post.author}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/categories`
  );
  const categories = await res.json();

  const paths = categories.docs.map((c) => ({
    params: {
      year: c.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts?category=${params.year}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
      year: params.year,
    },
  };
}
