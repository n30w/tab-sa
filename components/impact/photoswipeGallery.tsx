import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function PhotoswipeGallery({ galleryID, props }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {props.map((image, index) => (
        <a
          href={image.url}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.url} alt={image.alt} />
        </a>
      ))}
    </div>
  );
}
