// Serialize function that accepts Payload CMS JSON
// and outputs HTML
import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

const switchType = (type) => {
  switch (type) {
    case "impact":
      return "impactText";

    default:
      return "sectionText";
  }
};

const serialize = (children, type) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      //@ts-ignore
      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      //@ts-ignore
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
        return <h1 key={i}>{serialize(node.children, type)}</h1>;
      // Iterate through all headings here...
      case "h2":
        return <h2 key={i}>{serialize(node.children, type)}</h2>;
      case "h3":
        return (
          <h3 key={i} className="impactH3">
            {serialize(node.children, type)}
          </h3>
        );
      case "h6":
        return <h6 key={i}>{serialize(node.children, type)}</h6>;
      case "quote":
        return (
          <blockquote key={i}>{serialize(node.children, type)}</blockquote>
        );
      case "ul":
        return <ul key={i}>{serialize(node.children, type)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(node.children, type)}</ol>;
      case "li":
        return <li key={i}>{serialize(node.children, type)}</li>;
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children, type)}
          </a>
        );

      default:
        return (
          <p
            key={i}
            className={node.children[0].text === "" ? "" : switchType(type)}
          >
            {serialize(node.children, type)}
          </p>
        );
    }
  });

export default serialize;
