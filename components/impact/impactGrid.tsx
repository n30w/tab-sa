import Link from "next/link";
import ImpactCard from "./impactCard";

export default function impactGrid({ posts, year }) {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center gap-y-2 pt-10">
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
