import Link from "next/link";
import qs from "qs";
import ImpactGrid from "../../components/impact/impactGrid";
import PhotoGallery from "../../components/impact/photoGallery";
import fetch from "node-fetch";

export default function year({ posts, year, media }) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Impact in {year}</h1>
          </div>
          <div className="sectionContent">
            <p>
              These are impacts from {year} — reflections, speeches, letters, or
              photos demonstrating the impacts of our organization on the
              teachers, leaders, and communities involved in our program.
            </p>
            <ImpactGrid posts={posts} year={year} />
            {media.length > 0 && (
              <>
                <h2 className="sectionHeader pt-7">Photos</h2>
                <div className="bg-slate-100 rounded-md px-4 py-4">
                  <PhotoGallery photos={media} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
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

  const [res1, res2] = await Promise.all([
    fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts${stringifiedQuery}&limit=100`
    ),
    fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/media${stringifiedQuery}&limit=100`
    ),
  ]);

  const posts = await res1.json();
  const media = await res2.json();

  return {
    props: {
      // @ts-ignore
      posts: posts.docs,
      year: params.year,
      // @ts-ignore
      media: media.docs,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts`);
  const posts = await res.json();

  // @ts-ignore
  const paths = posts?.docs.map((post) => ({
    params: {
      year: post.category.name,
    },
  }));

  return {
    paths,
    fallback: "blocking", // blocking here is if you have a lot of paths that don't need to be generated until they are queried by the user.
  };
}
