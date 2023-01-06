import serialize from "../../lib/serialize";

export default function impactCard({ post }) {
  return (
    <>
      <div className="w-96 h-96 bg-base-100 border-2 border-black hover:bg-[#ffeaba] rounded-md">
        <div className="card-body">
          <h2 className="card-title font-normal text-7xl">{post.author}</h2>
          {/* <p>{serialize(post.body, "impact")}</p> */}
        </div>
      </div>
    </>
  );
}
