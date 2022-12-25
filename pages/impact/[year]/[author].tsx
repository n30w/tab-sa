import { GetStaticPaths, GetStaticProps } from "next";
import serialize from "../../../lib/serialize";
import qs from "qs";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SideNav from "../../../components/impact/sideNav";

var decode = require("urldecode");

export default function author({ post, posts }: any) {
  const router = useRouter();
  return (
    <>
      <div className="page">
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>

          <div className="col-span-4 lg:col-span-3 justify-self-start text-left lg:justify-self-center lg:text-center font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-tabTheme-200 to-tabTheme-100 pl-4 pb-4 select-none">
            <h1>{post.title}</h1>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-1"></div>
          <div className="col-span-4 lg:col-span-3">
            <h2 className="col-span-3 justify-self-start text-left lg:justify-self-center lg:text-center text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-t from-tabTheme-200 to-tabTheme-100 px-4 pb-4 select-none">
              by {post.author}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <SideNav posts={posts} post={post}></SideNav>
          <div className="col-span-4 lg:col-span-3">
            <div className="">
              <div className="">{serialize(post.body, "impact")}</div>
            </div>
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
  const query1 = {
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

  const query2 = {
    "category.name": {
      equals: params.year,
    },
  };

  const stringifiedQuery1 = qs.stringify(
    {
      where: query1,
    },
    { addQueryPrefix: true }
  ); // Output: ?where[author][equals]=Lyla Berg&where[and][category.name][equals]=2009

  const stringifiedQuery2 = qs.stringify(
    {
      where: query2,
    },
    { addQueryPrefix: true }
  );

  // console.log(stringifiedQuery);

  const [res1, res2] = await Promise.all([
    fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts${stringifiedQuery1}`
    ),
    fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/posts${stringifiedQuery2}`
    ),
  ]);

  const post = await res1.json();
  const posts = await res2.json();

  return {
    props: {
      post: post.docs[0],
      posts: posts.docs,
      // revalidate: 10,
    },
  };
}
