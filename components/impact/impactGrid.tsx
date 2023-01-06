import Link from "next/link";
import ImpactCard from "./impactCard";

export default function impactGrid({ posts, year }) {
  return (
    <>
      <div className="grid grid-cols-2 justify-items-center gap-3">
        {posts.map((post) => {
          return (
            <>
              <Link href={`${year}/${post.author}`}>
                <ImpactCard post={post} />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
