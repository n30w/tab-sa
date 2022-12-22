import serialize from "../lib/serialize";

export default function Reflections({ posts }: any) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Reflections</h1>
          </div>
          {posts.docs.map((p) => (
            <div className="sectionContent">
              <h2>{p.title}</h2>
              <h3>{p.author}</h3>
              <div className="">{serialize(p.body)}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  require("dotenv").config();

  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
      revalidate: 10,
    },
  };
}
