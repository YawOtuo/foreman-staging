"use client";
import Image from "next/image";
import { CSSProperties } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: CSSProperties["objectFit"];
  objectPosition?: string;
}

function OptimizedImage({
  src,
  alt,
  className = "",
  objectFit = "cover",
  objectPosition = "center",
}: OptimizedImageProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        objectFit={objectFit}
        objectPosition={objectPosition}
      />
    </div>
  );
}

export default OptimizedImage;
