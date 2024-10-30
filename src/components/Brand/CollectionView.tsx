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
import { Divider } from "../layouts/LayoutLayer";

import SUB200 from "../../assets/BrandImage/collection/doxa/SUB-200.jpg";
import SUB300 from "../../assets/BrandImage/collection/doxa/SUB-300.jpg";
import SUB2002 from "../../assets/BrandImage/collection/doxa/SUB-2002.png";
import SUB600TLifeStylePicture from "../../assets/BrandImage/collection/doxa/SUB-600T_lifestyle_picture_IG_15.png";
import SUB200CGRAPH from "../../assets/BrandImage/collection/doxa/SUB-200-CGRAPH.jpg";
import SUB300T from "../../assets/BrandImage/collection/doxa/SUB-300T.png";
import { useEffect, useState } from "react";
import { Collection } from "../../model/Collection";

const DOXA_COLLECTION_IMAGE_LIST: Collection[] = [
  {
    image: SUB200,
    title: "서브 200",
    description:
      "반사 방지 코팅 처리된 스크래치 방지 사파이어 크리스털이 돋보이는 3 핸즈 스테인리스 스틸 다이버 시계입니다. SUB 200은 단방향 회전 베젤을 갖추고 있으며, 톤온톤 러버 스트랩 또는 스틸 브레이슬릿 옵션과 함께 8가지 다이얼 색상으로 출시됩니다.",
  },
  {
    image: SUB300,
    title: "서브 300",
    description:
      "반사 방지 코팅 처리된 스크래치 방지 사파이어 크리스털이 돋보이는 3 핸즈 스테인리스 스틸 다이버 시계입니다. SUB 200은 단방향 회전 베젤을 갖추고 있으며, 톤온톤 러버 스트랩 또는 스틸 브레이슬릿 옵션과 함께 8가지 다이얼 색상으로 출시됩니다.",
  },
  {
    image: SUB200CGRAPH,
    title: "서브 200 CGRAPH",
    description:
      "반사 방지 코팅 처리된 스크래치 방지 사파이어 크리스털이 돋보이는 3 핸즈 스테인리스 스틸 다이버 시계입니다. SUB 200은 단방향 회전 베젤을 갖추고 있으며, 톤온톤 러버 스트랩 또는 스틸 브레이슬릿 옵션과 함께 8가지 다이얼 색상으로 출시됩니다.",
  },
  {
    image: SUB2002,
    title: "서브 2002",
    description:
      "반사 방지 코팅 처리된 스크래치 방지 사파이어 크리스털이 돋보이는 3 핸즈 스테인리스 스틸 다이버 시계입니다. SUB 200은 단방향 회전 베젤을 갖추고 있으며, 톤온톤 러버 스트랩 또는 스틸 브레이슬릿 옵션과 함께 8가지 다이얼 색상으로 출시됩니다.",
  },
  {
    image: SUB600TLifeStylePicture,
    title: "서브 600T LifeStylePicture",
    description:
      "반사 방지 코팅 처리된 스크래치 방지 사파이어 크리스털이 돋보이는 3 핸즈 스테인리스 스틸 다이버 시계입니다. SUB 200은 단방향 회전 베젤을 갖추고 있으며, 톤온톤 러버 스트랩 또는 스틸 브레이슬릿 옵션과 함께 8가지 다이얼 색상으로 출시됩니다.",
  },
  {
    image: SUB300T,
    title: "서브 300T",
    description:
      "반사 방지 코팅 처리된 스크래치 방지 사파이어 크리스털이 돋보이는 3 핸즈 스테인리스 스틸 다이버 시계입니다. SUB 200은 단방향 회전 베젤을 갖추고 있으며, 톤온톤 러버 스트랩 또는 스틸 브레이슬릿 옵션과 함께 8가지 다이얼 색상으로 출시됩니다.",
  },
];

export function CollectionView() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  const activeItem =
    DOXA_COLLECTION_IMAGE_LIST[activeIndex % DOXA_COLLECTION_IMAGE_LIST.length];

  return (
    <CollectionWrapper>
      <CollectionMain>
        <div>
          <span>discover</span>
          <h1>{activeItem.title}</h1>
          <Divider />
          <p>{activeItem.description}</p>
        </div>
        <Swiper
          onSlideChange={(e) => setActiveIndex(e.activeIndex - 2)}
          css={css`
            width: 100%;
            padding-top: 3.125rem;
          `}
          effect={"coverflow"}
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
          keyboard={{ enabled: true }}
          mousewheel={{ thresholdDelta: 70 }}
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
          {DOXA_COLLECTION_IMAGE_LIST.map((item, index) => (
            <StyledSwiperSlide
              key={index}
              className={`swiper-slide swiper-slide-${index}`}
              index={index}
              image={item.image}
            />
          ))}

          {/*<StyledSwiperSlide*/}
          {/*  className="swiper-slide swiper-slide--one"*/}
          {/*>*/}
          {/*  <div>*/}
          {/*    <h2>Jellyfish</h2>*/}
          {/*    <p>*/}
          {/*      Jellyfish and sea jellies are the informal common names given to*/}
          {/*      the medusa-phase of certain gelatinous members of the subphylum*/}
          {/*      Medusozoa, a major part of the phylum Cnidaria.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</StyledSwiperSlide>*/}
          {/*<StyledSwiperSlide className="swiper-slide">*/}
          {/*  <div>*/}
          {/*    <h2>Seahorse</h2>*/}
          {/*    <p>*/}
          {/*      Seahorses are mainly found in shallow tropical and temperate*/}
          {/*      salt water throughout the world. They live in sheltered areas*/}
          {/*      such as seagrass beds, estuaries, coral reefs, and mangroves.*/}
          {/*      Four species are found in Pacific waters from North America to*/}
          {/*      South America.*/}
          {/*    </p>*/}
          {/*    <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank">*/}
          {/*      explore*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</StyledSwiperSlide>*/}
          {/*<StyledSwiperSlide className="swiper-slide">*/}
          {/*  <div>*/}
          {/*    <h2>octopus</h2>*/}
          {/*    <p>*/}
          {/*      Octopuses inhabit various regions of the ocean, including coral*/}
          {/*      reefs, pelagic waters, and the seabed; some live in the*/}
          {/*      intertidal zone and others at abyssal depths. Most species grow*/}
          {/*      quickly, mature early, and are short-lived.*/}
          {/*    </p>*/}
          {/*    <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank">*/}
          {/*      explore*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</StyledSwiperSlide>*/}
          {/*<StyledSwiperSlide className="swiper-slide">*/}
          {/*  <div>*/}
          {/*    <h2>Shark</h2>*/}
          {/*    <p>*/}
          {/*      Sharks are a group of elasmobranch fish characterized by a*/}
          {/*      cartilaginous skeleton, five to seven gill slits on the sides of*/}
          {/*      the head, and pectoral fins that are not fused to the head.*/}
          {/*    </p>*/}
          {/*    <a href="https://en.wikipedia.org/wiki/Shark" target="_blank">*/}
          {/*      explore*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</StyledSwiperSlide>*/}
          {/*<StyledSwiperSlide className="swiper-slide">*/}
          {/*  <div>*/}
          {/*    <h2>Dolphin</h2>*/}
          {/*    <p>*/}
          {/*      Dolphins are widespread. Most species prefer the warm waters of*/}
          {/*      the tropic zones, but some, such as the right whale dolphin,*/}
          {/*      prefer colder climates. Dolphins feed largely on fish and squid,*/}
          {/*      but a few, such as the orca, feed on large mammals such as*/}
          {/*      seals.*/}
          {/*    </p>*/}
          {/*    <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank">*/}
          {/*      explore*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</StyledSwiperSlide>*/}
          <div
            css={css`
              bottom: 1.25rem !important;
            `}
            className="swiper-pagination"
          ></div>
        </Swiper>
        <BackgroundImageCase
          css={css`
            top: -4rem;
            left: -12rem;
          `}
          src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png"
          alt=""
          className="bg"
        />
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
  min-height: 100vh;
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
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
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
    width: 18.75rem;
    height: 28.125rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: self-start;

    &.swiper-slide {
      width: 18.75rem;
      height: 28.125rem;
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
