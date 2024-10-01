"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
interface ImageProps {
  src: string;
  className?: string;
}

const ImageComp: React.FC<ImageProps> = ({ src, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const classNameDefault = clsx(" overflow-hidden", className);

  // In Next.js, the inability to catch image errors during the initial run of the project may be due to how Next.js handles page loading.
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
    img.onerror = () => {
      setImgSrc("/errorImage.jpg");
    };
  }, [src]);

  return (
    <div className={classNameDefault}>
      <img
        className="object-cover w-full h-full"
        src={imgSrc}
        alt=""
        onError={(e) => {
          e.currentTarget.src = imgSrc;
        }}
      />
    </div>
  );
};

export default ImageComp;
