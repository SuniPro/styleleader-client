/** @jsxImportSource @emotion/react */
import DoxaImageGreen from "../../assets/BrandImage/doxa-image-green.png";
import DoxaImageYellow from "../../assets/BrandImage/doxa-image-yellow.png";
import DoxaImageGold from "../../assets/BrandImage/doxa-image-gold.webp";
import DoxaImageOrange from "../../assets/BrandImage/doxa-image-orange.webp";
import FrederiqueConstantBlack from "../../assets/BrandImage/frederique-constant-image-black.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

interface CarouselSlideItemType {
  image: string;
  title: string;
  description: string;
}

export function Brand() {
  const images = [DoxaImageGold, DoxaImageGreen, FrederiqueConstantBlack];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <CarouselWrapper>
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
        <ImageCase>
          <BrandImage src={DoxaImageOrange} alt="Doxa Image Orange" />
          <BrandExplain isActive={activeIndex === 0}>
            SUB 300T Aristera Limited Edition
            <BrandSellButton>지금 구매하기</BrandSellButton>
          </BrandExplain>
        </ImageCase>
        <ImageCase>
          <BrandImage src={DoxaImageGold} alt="Doxa Image Gold" />
          <BrandExplain isActive={activeIndex === 1}>
            SUB 300T Clive Cussler
            <BrandSellButton>지금 구매하기</BrandSellButton>
          </BrandExplain>
        </ImageCase>
        <ImageCase>
          <BrandImage src={DoxaImageGreen} alt="Doxa Image Green" />
          <BrandExplain isActive={activeIndex === 2}>
            New Sea Emeralds
            <BrandSellButton>지금 구매하기</BrandSellButton>
          </BrandExplain>
        </ImageCase>
        <ImageCase>
          <BrandImage src={DoxaImageYellow} alt="Doxa Image Yellow" />
          <BrandExplain isActive={activeIndex === 3}>
            SUB 200T
            <BrandSellButton>지금 구매하기</BrandSellButton>
          </BrandExplain>
        </ImageCase>
        <ImageCase>
          <BrandImage
            src={FrederiqueConstantBlack}
            alt="FrederiqueConstantBlack"
          />
          <BrandExplain isActive={activeIndex === 4}>
            CLASSICS Moneta Moonphase
            <BrandSellButton>지금 구매하기</BrandSellButton>
          </BrandExplain>
        </ImageCase>
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
    </CarouselWrapper>
  );
}

function CarouselSlideItem({ items }: { items: CarouselSlideItemType[] }) {
  return (
    <>
      <CarouselSlideItemList>
        {items.map((item, index) => (
          <div
            key={index}
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <SlideItemImgLink>
              <img src={item.image} alt={item.title} />
            </SlideItemImgLink>
            <CarouselSlideItemBody className="carousel-slide-item__body">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </CarouselSlideItemBody>
          </div>
        ))}
      </CarouselSlideItemList>
    </>
  );
}

export function ClockShowcase() {
  const brandList = [
    [
      {
        image: DoxaImageGreen,
        title: "Doxa Watch",
        description: "A beautiful Doxa watch.",
      },
      {
        image: DoxaImageGreen,
        title: "Green Doxa Watch",
        description: "A stylish green Doxa watch.",
      },
      {
        image: DoxaImageGreen,
        title: "Classic Doxa Watch",
        description: "A timeless classic Doxa watch.",
      },
    ],
    [
      {
        image: FrederiqueConstantBlack,
        title: "Frederique ConstantBlack Watch",
        description: "A beautiful Doxa watch.",
      },
      {
        image: FrederiqueConstantBlack,
        title: "Frederique ConstantBlack Watch",
        description: "A stylish green Doxa watch.",
      },
      {
        image: FrederiqueConstantBlack,
        title: "Frederique ConstantBlack Watch",
        description: "A timeless classic Doxa watch.",
      },
    ],
  ];

  return (
    <CarouselWrapper
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <CarouselTitle>GALLERY</CarouselTitle>
      {/*<Carousel showArrows={true} infiniteLoop={true} stopOnHover={true}>*/}
      {brandList.map((items, index) => (
        <CarouselSlideItem key={index} items={items} />
      ))}
      {/*</Carousel>*/}
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CarouselTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: 1.6px;
  line-height: 2.4375rem;
  color: white;
`;

const CarouselSlideItemList = styled.li`
  margin: 0;
  padding: 1rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 70%;
  justify-content: center;
`;

const SlideItemImgLink = styled.div`
  cursor: zoom-in;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    width: 100%;
  }

  &::after {
    align-items: center;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); /* rgba(black, 0.5)는 rgba(0,0,0,0.5)로 변경 */
    color: white;
    content: "read more";
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    width: 100%;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    img {
      transform: scale(1.3);
    }
  }
`;

const CarouselSlideItemBody = styled.div`
  h4 {
    text-transform: uppercase;
    font-size: 1rem;
    color: white;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.3;
    color: white;
  }
`;

const ImageCase = styled.div``;

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
