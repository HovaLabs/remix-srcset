import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<any> {
  /** This will automatically populate srcSet. To overwite, you can manually
   * pass the srcSet prop as well */
  src: React.ImgHTMLAttributes<any>["src"];
}
const CLOUDINARY_BUCKET = "https://res.cloudinary.com/hova-labs/image/upload/";

// Not 100% sure what's an appropriate set of dimensions
// These have nothing to do with breakpoints.
// Just an arbitrary set of numbers 🤷‍♂️
const dimensionArray = [640, 1280, 2560, 5120];

function getSrcSet(src?: string): Pick<ImageProps, "srcSet"> {
  if (!src || !src.startsWith(CLOUDINARY_BUCKET)) {
    return {
      srcSet: undefined,
    };
  }

  const srcSet = dimensionArray
    .map(
      (dim) =>
        `${src.replace(
          CLOUDINARY_BUCKET,
          `${CLOUDINARY_BUCKET}w_${dim}/`
        )} ${dim}w`
    )
    .join(", ");

  return { srcSet };
}

export function Image({ src, ...rest }: ImageProps) {
  const { srcSet } = getSrcSet(src);
  return <img src={src} srcSet={srcSet} {...rest} />;
}
