import Image from "next/image";
import { FC } from "react";
import { Fade, Slide } from "react-slideshow-image";

const Slideshow: FC = () => {
  const images = [
    {
      src: "2016_07.jpg",
      alt: "Teachers hold a discussion",
    },
    {
      src: "2016_08_6.jpg",
      alt: "Teachers have fun at the table with experiments",
    },
    {
      src: "2018_57.jpg",
      alt: "Brad Uy teaches a class",
    },
    {
      src: "BradUyWithOtherTeachers.jpg",
      alt: "Brad Uy talks with some teachers",
    },
    {
      src: "TABSA_2011.jpg",
      alt: "Gathering and learning around a table",
    },
    {
      src: "TABSA_2012.jpg",
      alt: "Helping other teachers",
    },
    {
      src: "VL_1.jpg",
      alt: "Women in a group discussion",
    },
  ];
  return (
    <>
      <Fade canSwipe={false} arrows={false} cssClass="relative w-full h-full">
        {images.map((image, i) => {
          return (
            <Image
              key={i}
              src={`/index/${image.src}`}
              style={{
                objectFit: "contain",
              }}
              alt={image.alt}
              fill={true}
              className="grayscale"
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
            />
          );
        })}
      </Fade>
    </>
  );
};

export default Slideshow;
