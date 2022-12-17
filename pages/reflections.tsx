import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

export default function Reflections({ posts }: any) {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="sectionHeader">
            <h1>Reflections</h1>
          </div>
          <div className="sectionContent">
            <h2>{posts.title}</h2>
            <h3>{posts.author}</h3>
            {serialize(posts.body)}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:4000/api/posts/639db3dc844743988c9d56d9"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const serialize = (children) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return <h1 key={i}>{serialize(node.children)}</h1>;
      // Iterate through all headings here...
      case "h6":
        return <h6 key={i}>{serialize(node.children)}</h6>;
      case "quote":
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{serialize(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{serialize(node.children)}</li>;
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });
