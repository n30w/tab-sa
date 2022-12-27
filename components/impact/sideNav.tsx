import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

var decode = require("urldecode");

export default function SideNav({ posts, post }) {
  const [isHover, setHover] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="col-span-1 justify-self-center pt-6">
        <div className="grid grid-cols-1 px-3 stick cursor-pointer">
          <Link
            href={`
              /impact/${post.category.name}`}
          >
            <div
              className="flex flex-row align-center py-2 justify-evenly "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="grid grid-cols-1 justify-items-end self-center">
                <ArrowLeftIcon
                  className={`${
                    isHover
                      ? "opacity-100 ease-in-out duration-200"
                      : "w-0 opacity-0 ease-in-out duration-200"
                  } stroke-2 `}
                  width={25}
                  height={25}
                ></ArrowLeftIcon>
              </div>
              <h3
                className={`delay-100 select-none text-2xl text-center duration-100 ease-in-out ${
                  isHover ? "grow w-auto" : "grow-0 w-full"
                }`}
              >
                {post.category.name} Impacts
              </h3>
            </div>
          </Link>
          <div className="px-1 py-2 rounded-md pt-2 border-black ease-in-out duration-300">
            <ul className="flex flex-col justify-self-center space-y-1">
              {posts.map((post, i) => {
                return (
                  <>
                    <Link href={`/impact/${post.category.name}/${post.author}`}>
                      <li
                        style={{
                          textDecorationColor: "#FFB612",
                          textDecorationThickness: "3.3px",
                        }}
                        className={`py-2 transition-opacity duration-100 hover:underline hover:opacity-100 underline-offset-4 px-6 rounded-md ${
                          decode(router.asPath) ===
                          "/impact/" + post.category.name + "/" + post.author
                            ? "underline"
                            : "opacity-50"
                        }`}
                        key={i}
                      >
                        <span className="text-xl">{post.author}</span>
                      </li>
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
