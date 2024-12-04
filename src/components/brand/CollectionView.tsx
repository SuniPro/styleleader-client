/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

import { useState } from "react";
import { Spinner } from "../Spinner";
import { Collection } from "../../model/Collection";

export function CollectionView(props: { collectionList: Collection[] }) {
  const { collectionList } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!collectionList) {
    return <Spinner />;
  }

  const activeItem = collectionList[activeIndex];

  return (
    <CollectionWrapper>
      <CollectionMain>
        <div>
          <span>
            {(activeItem.category.includes("limited")
              ? "limited edition"
              : activeItem.category
            ).toUpperCase()}
          </span>
          <h1
            css={css`
              margin: 0;
            `}
          >
            {activeItem.title}
          </h1>
          <p
            css={css`
              margin-top: 28px;
              max-width: 1200px;
            `}
          >
            {activeItem.description}
          </p>
        </div>
        <Swiper
          onSlideChange={(e) => {
            e.activeIndex - 2 < 0 || e.activeIndex > collectionList.length
              ? setActiveIndex(0)
              : setActiveIndex(e.activeIndex - 2);
          }}
          css={css`
            width: 100%;
            padding-top: 3.125rem;
          `}
          effect="coverflow"
          modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          lazy={true}
          keyboard={{ enabled: true }}
          // mousewheel={{ thresholdDelta: 70 }}
          mousewheel
          loop={true}
          pagination={{ el: ".swiper-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            1024: {
              slidesPerView: 2,
            },
            1560: {
              slidesPerView: 3,
            },
          }}
        >
          {collectionList.map((item, index) => (
            <StyledSwiperSlide
              key={index}
              className={`swiper-slide swiper-slide-${index}`}
              index={index}
              image={item.image}
            />
          ))}
          <div
            css={css`
              bottom: 1.25rem !important;
            `}
            className="swiper-pagination"
          />
        </Swiper>
      </CollectionMain>
    </CollectionWrapper>
  );
}

const CollectionWrapper = styled.div`
  margin: 3rem 0;
  width: 100%;
`;

const CollectionMain = styled.main`
  position: relative;
  width: calc(min(90rem, 90%));
  margin: 0 auto;
  min-height: 70vh;
  column-gap: 3rem;
  padding-block: min(20vh, 3rem);

  & > div span {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 1rem;
    color: #717171;
  }

  & > div h1 {
    text-transform: capitalize;
    letter-spacing: 0.8px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: clamp(3.4375rem, 3.25rem + 0.75vw, 4rem);
    background-color: #005baa;
    background-image: ${theme.colors.gradientGoldRight};
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > div p {
    line-height: 1.6;
    color: white;
  }

  & a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: #717171;
    font-weight: 500;
    background: #fff;
    border-radius: 3.125rem;
    transition: 0.3s ease-in-out;
  }

  & > div > a {
    border: 2px solid #c2c2c2;
    margin-top: 2.188rem;
    padding: 0.625rem 1.875rem;

    &:hover {
      border: 0.125rem solid #005baa;
      color: #005baa;
    }
  }

  @media screen and (min-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const BackgroundImageCase = styled.img`
  position: fixed;
  z-index: -1;
  opacity: 0;

  @media screen and ${({ theme }) => theme.windowSize.small} {
    opacity: 0.1;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)<{ index: number; image: string }>(
  ({ index, image }) => css`
    width: 20.75rem;
    height: 20.75rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: self-start;

    &.swiper-slide {
      width: 20.75rem;
      height: 20.75rem;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: self-start;
    }

    &.swiper-slide-${index} {
      background:
        linear-gradient(to top, #0f2027, #203a4300, #2c536400),
        url(${image}) no-repeat 50% 50% / cover;
    }

    & h2 {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.4;
      margin-bottom: 0.625rem;
      padding: 0 0 0 1.563rem;
      text-transform: uppercase;
    }

    & p {
      color: #dadada;
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      padding: 0 1.563rem;
      line-height: 1.6;
      font-size: 0.75rem;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    & a {
      margin: 1.25rem 1.563rem 3.438rem 1.563rem;
      padding: 0.438em 1.875rem;
      font-size: 0.9rem;
      &:hover {
        color: #005baa;
      }
    }

    &.swiper-slide-active div {
      display: block;
      opacity: 1;
    }

    & div {
      display: none;
      opacity: 0;
      padding-bottom: 0.625rem;
    }
  `,
);
