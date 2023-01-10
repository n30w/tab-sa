import { useCallback, useState } from "react";
import Image from "next/image";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function PhotoGallery({ photos }) {
  const [open, setOpen] = useState(false);
  const a = new Array();
  photos.map((photo) => {
    a.push({
      src: photo.url,
      width: photo.width,
      height: photo.height,
      alt: photo.alt,
    });
  });
  //   return <Gallery photos={a} />;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={a} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={a.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.alt,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
