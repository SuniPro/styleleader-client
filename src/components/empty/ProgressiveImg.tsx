import React, { useEffect, useState } from "react";
import { Img } from "./ProgressiveImgStyle";

import { useInView } from "react-intersection-observer";

import NoImg from "../../assets/Brand/frederique_constant-fc-206n3s6-moneta_moonphase.png"; //원본 이미지 로드 실패시 보여줄 이미지

export function ProgressiveImg(props: {
  placeholderSrc: string;
  src: string;
  styles: any;
  alt?: string;
}) {
  const { placeholderSrc, styles, src } = props;
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLazy, setIsLazy] = useState(true);
  const { ref, inView } = useInView();
  const customClass = isLazy ? "loading" : "loaded";
  useEffect(() => {
    if (inView && imgSrc === placeholderSrc) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
        setIsLazy(false);
      };
      img.onerror = () => {
        setImgSrc(NoImg);
        setIsLazy(false);
      };
    }
  }, [src, inView, imgSrc, placeholderSrc]);

  return (
    <Img
      src={imgSrc}
      className={customClass}
      style={styles}
      loading="lazy"
      alt={props.alt || ""}
      ref={ref}
    />
  );
}
