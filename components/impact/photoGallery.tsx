import { FC, useCallback, useState } from "react";
import Image from "next/image";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export type photoGalleryTypes = {
  photos;
};

const PhotoGallery: FC<photoGalleryTypes> = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const a = new Array();
  photos.map((photo) => {
    a.push({
      src: `https://tab-sa.imgix.net/media/${photo.filename}`,
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

  const renderWithNextJS = (photo) => {
    return (
      <Image
        width={photo.width}
        height={photo.height}
        src={photo.src}
        alt={photo.alt}
      />
    );
  };

  return (
    <div>
      {/* Uses this algorithm:https://medium.com/google-design/google-photos-45b714dfbed1 */}
      <Gallery photos={a} onClick={openLightbox} />
      {/*
      // @ts-ignore */}
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
};

export default PhotoGallery;
