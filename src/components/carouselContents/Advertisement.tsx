/** @jsxImportSource @emotion/react */
//BrandLogo
import WATCH_WAVE from "../../assets/Brand/company/BrandLogoWatchWave.png";
import ALPINA_BANNER from "../../assets/Brand/company/Alpiner_Banner.jpg";
import DOXA_BACKGROUND from "../../assets/Brand/company/doxa-background.png";
import FC_BANNER from "../../assets/Brand/company/FC_BANNER.jpg";
import GAGAMILANO from "../../assets/Brand/company/gagamilanoBrandBanner.webp";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Box, Modal, Typography } from "@mui/material";
import { BasicModalBoxStyle, SectionTitle } from "../layouts";
import theme from "../../styles/theme";
import {
  FrederiqueConstant,
  GagaMilano,
  Alpina,
  Doxa,
} from "../../assets/Brand/company/CompanyLogo";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Spinner } from "../Spinner";
import { DisplayCollection } from "../../model/admin";
import { DisplayAssets } from "../../model/Display";

interface BrandView {
  image: string | ((props: { className?: string }) => EmotionJSX.Element);
  logo: null | ((props: { className?: string }) => EmotionJSX.Element);
  name: string;
  link: string;
}

export const BRAND_VIEW_LIST: BrandView[] = [
  {
    image: WATCH_WAVE,
    logo: null,
    name: "watchWave",
    link: "https://watchwave.co.kr/",
  },
  {
    image: FC_BANNER,
    logo: FrederiqueConstant,
    name: "frederiqueConstant",
    link: "https://brand.naver.com/frederiqueconstant?n_media=27758&n_query=%ED%94%84%EB%A0%88%EB%93%9C%EB%A6%AD%EC%BD%98%EC%8A%A4%ED%83%84%ED%8A%B8&n_rank=1&n_ad_group=grp-a001-04-000000041636079&n_ad=nad-a001-04-000000335794401&n_keyword_id=nkw-a001-04-000006157889398&n_keyword=%ED%94%84%EB%A0%88%EB%93%9C%EB%A6%AD%EC%BD%98%EC%8A%A4%ED%83%84%ED%8A%B8&n_campaign_type=4&n_contract=tct-a001-04-000000001004425&n_ad_group_type=5&NaPm=ct%3Dm49ji9ls%7Cci%3D0z00001iZyXB%5FbAMhKZl%7Ctr%3Dbrnd%7Chk%3D08c32dcfb83da09f4d9a549ee11de47d5758d5dd%7Cnacn%3DTKevDogwM0ONA",
  },
  {
    image: DOXA_BACKGROUND,
    logo: Doxa,
    name: "doxa",
    link: "https://kor.doxawatches.com//",
  },
  {
    image: ALPINA_BANNER,
    logo: Alpina,
    name: "Alpina",
    link: "https://alpinawatches.com/?srsltid=AfmBOooYWI9q9kuKEsOQkvll19tdlfickobUVmn51l9fRhGduD1v9GYw",
  },
  {
    image: GAGAMILANO,
    logo: GagaMilano,
    name: "GagaMilano",
    link: "https://www.gagamilano.com/en/home",
  },
];

interface CollectionModalType {
  open: boolean;
  modalOpen: () => void;
  modalClose: () => void;
}

export function BrandCatalogAssets(props: { catalog: DisplayAssets[] }) {
  const { catalog } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  if (!catalog) return <Spinner />;

  return (
    <DisplayContainer>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        interval={3000}
        showThumbs={false}
        onChange={handleSlideChange}
      >
        {catalog.map((item, index) => (
          <ImageCase key={index}>
            <BrandImage src={item.image} alt={item.title} />
            <BrandExplain isActive={activeIndex === index}>
              {item.title}
              <BrandSellButton
                onClick={() =>
                  // eslint-disable-next-line no-restricted-globals
                  window.open(item.description)
                }
              >
                지금 구매하기
              </BrandSellButton>
            </BrandExplain>
          </ImageCase>
        ))}
      </Carousel>
      <div
        css={css`
          background: linear-gradient(
            to bottom,
            #d7bc6a,
            rgba(255, 255, 255, 0)
          );
          width: 100%;
          height: 20px;
        `}
      />
    </DisplayContainer>
  );
}

function CollectionItems(props: {
  item: DisplayCollection;
  modalParticle: CollectionModalType;
  title: string;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const {
    item,
    modalParticle,
    title,
    description,
    setDescription,
    setActiveIndex,
  } = props;
  const { open, modalOpen, modalClose } = modalParticle;

  return (
    <>
      <CollectionItemContainer>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <ImageViewCase
            onClick={() => {
              modalOpen();
              setDescription(item.description);
              setActiveIndex(item.id);
            }}
            isAfter={true}
          >
            <img src={item.image} width={200} alt={item.title} />
          </ImageViewCase>
          <CarouselSlideItemBody className="carousel-slide-item__body">
            <h4
              css={css`
                text-transform: uppercase;
                text-align: center;
              `}
            >
              {item.title}
            </h4>
            <p
              css={css`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 250px;
              `}
            >
              {item.description}
            </p>
          </CarouselSlideItemBody>
        </div>
      </CollectionItemContainer>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        children={CollectionModal(title, description)}
      />
    </>
  );
}

export function BrandListView() {
  return (
    <DisplayContainer
      css={css`
        width: 100%;
      `}
    >
      <SectionTitle>BRAND</SectionTitle>
      <BrandListContainer>
        {BRAND_VIEW_LIST.map((brand, index) => (
          <BrandViewCase
            key={index}
            css={css`
              background-color: black;
              width: 300px;
              height: 300px;
              border-radius: 15px;
              border: 3px solid ${theme.colors.basicBlack};

              align-items: center;

              &:hover {
                .banner {
                  transform: scale(1.2);
                }
              }
            `}
            onClick={() => {
              window.open(brand.link);
            }}
            isAfter={false}
          >
            <div
              css={css`
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              {typeof brand.logo === "function" ? <brand.logo /> : brand.logo}
            </div>
            <div
              className="banner"
              css={css`
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 0;
                ${typeof brand.image === "string" &&
                `background-image: url(${brand.image});`}
                opacity: ${brand.name === "watchWave" || "doxa" ? 1 : 0.7};
                background-size: cover;
                transition: all 0.5s ease;
              `}
            ></div>
          </BrandViewCase>
        ))}
      </BrandListContainer>
    </DisplayContainer>
  );
}

export function CollectionListView(props: { collection: DisplayAssets[] }) {
  const { collection } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const modalClose = () => setOpen(false);
  const modalOpen = () => setOpen(true);

  const [description, setDescription] = useState<string>("");

  const title =
    collection.find((item) => item.description === description)?.title ?? "";

  return (
    <DisplayContainer
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <SectionTitle>COLLECTION</SectionTitle>
      <CollectionWrapper>
        {collection.map((items, index) => (
          <CollectionItems
            key={index}
            item={items}
            modalParticle={{ open, modalOpen, modalClose }}
            title={title}
            description={description}
            setDescription={setDescription}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </CollectionWrapper>
    </DisplayContainer>
  );
}

function CollectionModal(title: string, contents: string) {
  return (
    <Box sx={BasicModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <h2
          css={css`
            color: #d7bc6a;
            text-transform: uppercase;
          `}
        >
          {title}
        </h2>
        <p>{contents}</p>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
    </Box>
  );
}

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CollectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media ${theme.windowSize.middle} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${theme.windowSize.small} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const CollectionItemContainer = styled.li`
  margin: 0;
  padding: 1rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  justify-content: center;
`;

const ImageViewCase = styled.div<{ isAfter: boolean }>(
  ({ isAfter }) => css`
    display: flex;
    overflow: hidden;
    position: relative;
    width: 250px;

    img {
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
      width: 100%;
    }

    ${isAfter &&
    `&::after {
    align-items: center;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); /* rgba(black, 0.5)는 rgba(0,0,0,0.5)로 변경 */
    color: white;
    content: "READ MORE";
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    width: 100%;
  }`}

    &:hover {
      &::after {
        opacity: 1;
      }

      img {
        transform: scale(1.3);
      }
    }
  `,
);

const BrandViewCase = styled.div<{ isAfter: boolean }>(
  ({ isAfter }) => css`
    display: flex;
    overflow: hidden;
    position: relative;
    width: 250px;

    img {
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
      width: 100%;
    }

    ${isAfter &&
    `&::after {
    align-items: center;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); /* rgba(black, 0.5)는 rgba(0,0,0,0.5)로 변경 */
    color: white;
    content: "READ MORE";
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    width: 100%;
  }`}

    &:hover {
      &::after {
        opacity: 1;
      }
    }
  `,
);

const CarouselSlideItemBody = styled.div`
  width: 100%;
  h4 {
    text-transform: uppercase;
    font-size: 1rem;
    color: white;
  }

  p {
    font-size: 16px;
    line-height: 1.3;
    color: white;
  }
`;

const ImageCase = styled.div`
  width: 100%;
`;

const BrandImage = styled.img`
  position: relative;
  z-index: 0;
`;

const BrandExplain = styled.span<{ isActive: boolean }>(
  ({ isActive }) => css`
    font-family: Montserrat, serif;
    font-size: 45px;
    font-weight: 500;

    position: absolute;
    right: 50px;
    bottom: 10%;
    color: white;
    padding: 5px;
    border-radius: 3px;
    line-height: 1;
    text-transform: uppercase;
    opacity: ${isActive ? 1 : 0};
    transition:
      opacity 1s ease,
      transform 1s ease;
    transform: ${isActive ? "translateY(0)" : "translateY(30px)"};

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,
);

const BrandSellButton = styled.button`
  z-index: 1;
  width: 160px;
  height: 50px;
  font-size: 15px;
  color: #fff;
  border-radius: 5px;
  margin-top: 25px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: 1px solid white;

  :hover {
    background: #ffffff;
    border: none;
    z-index: 1;
    color: black;
  }
`;

const BrandListContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
