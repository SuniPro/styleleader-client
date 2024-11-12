/** @jsxImportSource @emotion/react */
//BrandImageList
import DoxaImageGreen from "../../assets/Brand/doxa-image-green.png";
import DoxaImageOrange from "../../assets/Brand/doxa-image-orange.webp";
import FrederiqueConstantBlack from "../../assets/Brand/frederique-constant-image-black.png";
import GagaMilano from "../../assets/Brand/gaga-milano.jpg";
import Alpina from "../../assets/Brand/alpina.jpg";

//CollectionImageList
import DoxaAquamarine from "../../assets/CollectionImage/DOXA_SUB300T-aquamarine.png";
import DoxaDivingStar from "../../assets/CollectionImage/DOXA_SUB-200T-divingstar.png";
import DoxaCarbon from "../../assets/CollectionImage/DOXA_SUB-300-CARBON.png";

import FcClassics from "../../assets/CollectionImage/FC_COLLECTION-CLASSICS-GENTS.jpeg";
import FcHighLife from "../../assets/CollectionImage/FC_COLLECTION-HIGHLIFE-GENTS.jpeg";
import FcManufacture from "../../assets/CollectionImage/FC_COLLECTION-MANUFACTURE.jpeg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Box, Modal, Typography } from "@mui/material";
import { ModalBoxStyle } from "../../pages/StyleLeaderDisplay";
import { SectionTitle } from "../layouts";

const DOXA_LINK =
  "https://department.ssg.com/disp/brandShop.ssg?brandId=3000081880&ctgId=6000201050&n_media=27758&n_query=DOXA&n_rank=1&n_ad_group=grp-a001-04-000000041548489&n_ad=nad-a001-04-000000315007690&n_keyword_id=nkw-a001-04-000006147729761&n_keyword=DOXA&n_campaign_type=4&n_contract=tct-a001-04-000000000956435&n_ad_group_type=5&NaPm=ct%3Dm1oep43c%7Cci%3D0z40002%5F4dDAVCvt8KX1%7Ctr%3Dbrnd%7Chk%3D8679743176426dfe6f704fcc2b9220423d99128e%7Cnacn%3DTKevDogwM0ONA";
const FREDERIQUECONSTANT_LINK = "https://brand.naver.com/frederiqueconstant";
const GAGAMILANO_LINK = "https://www.gagamilano.com/en/home";
const ALPINA_LINK = "https://alpinawatches.com/";

const BRAND_LIST = [
  [
    {
      image: FcManufacture,
      title: "COLLECTION MANUFACTURE",
      description:
        "In 2004, Frederique Constant entered the elite circle of Swiss watchmaking brands that develop and produce their own in-house caliber. Consequently, the company became a “Manufacture”: in-house developed, in-house produced, in-house assembled. Frederique Constant has gradually become an important player within the watchmaking industry. With the ambition to offer the best quality at the most appropriate price, the Maison hasn’t stopped investing in production equipment. Offering today 31 in-house calibers, and besides surrounding ourselves with highly qualified watchmakers, we have developed all our departments to be able to control the various stages of the production of our watches, from initial conception to the final quality control, including assembly.",
    },
    {
      image: FcHighLife,
      title: "COLLECTION HIGHLIFE GENTS",
      description:
        "In 1999, Frederique Constant launched the first models of its Highlife collection. Embodied in a unique design, they were characterized by their integrated strap. Since 2020, the Maison perpetuated this ingenious concept, and brought this collection back in the spotlights with several models fitted with this intelligent feature.",
    },
    {
      image: FcClassics,
      title: "COLLECTION CLASSICS GENTS",
      description:
        "Frederique Constant is known for its classical and refined timepieces of exceptional value. Pure lines and a timeless design are the hallmarks of every watch within the Classics collection. Other attributes that never go out of fashion include reliability and durability. Every timepiece within the Classics collection has been engineered to the most exacting standards. The Brand’s philosophy of providing luxury watches at affordable prices holds true across the range.",
    },
  ],
  [
    {
      image: DoxaDivingStar,
      title: "SUB 200T divingstar",
      description:
        "Introducing a new chapter for SUB diving watches, marked by a contemporary shift in size. Embracing a sleeker diameter of 39 mm, this timepiece captures the essence of modernity and adaptability. It also marks the introduction of a new dial color: Sea Emerald Green.\n" +
        "\n" +
        "With a choice of dials, Iconic or Sunray, and the option of a rubber strap or the hallmark ‘beads of rice’ bracelet in stainless steel, the SUB 200T is available in a host of variants, boasting all the technical attributes that made SUBs famous since they were first introduced in 1967.",
    },
    {
      image: DoxaAquamarine,
      title: "SUB 300T aquamarine",
      description:
        "This reinterpretation of the 1968 SUB 300T Conquistador comes in a choice of 8 colors. Equipped with the patented unidirectional bezel with diving table and a case rated to a depth of 1200 meters, it is up to any challenge. All dive markings feature Super-LumiNova® inserts.",
    },
    {
      image: DoxaCarbon,
      title: "SUB 300 CARBON",
      description:
        "With its forged carbon case, a titanium chamber to ensure resistance to pressure, and a dial available in 8 colors along with tone-on-tone rubber straps, the ultra-lightweight SUB 300 Carbon offers a fascinating combination of cutting edge technology and aesthetics with the legendary style of the iconic SUB 300.",
    },
  ],
];

interface CarouselSlideItemType {
  image: string;
  title: string;
  description: string;
}

interface CollectionModalType {
  open: boolean;
  modalOpen: () => void;
  modalClose: () => void;
}

export function BrandCatalog() {
  const catalogList: CarouselSlideItemType[] = [
    {
      image: FrederiqueConstantBlack,
      title: "CLASSICS Moneta Moonphase",
      description: FREDERIQUECONSTANT_LINK,
    },
    {
      image: DoxaImageOrange,
      title: "SUB 300T Aristera Limited Edition",
      description: DOXA_LINK,
    },
    {
      image: DoxaImageGreen,
      title: "New Sea Emeralds",
      description: DOXA_LINK,
    },
    {
      image: Alpina,
      title: "Pilot Quartz Worldtimer",
      description: ALPINA_LINK,
    },
    {
      image: GagaMilano,
      title: "GaGa Milano MANUALE 5015S",
      description: GAGAMILANO_LINK,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <CollectionWrapper>
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
        {catalogList.map((item, index) => (
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
    </CollectionWrapper>
  );
}

function CollectionItems(props: {
  items: CarouselSlideItemType[];
  modalParticle: CollectionModalType;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const {
    items,
    modalParticle,
    description,
    setDescription,
    activeIndex,
    setActiveIndex,
  } = props;
  const { open, modalOpen, modalClose } = modalParticle;

  return (
    <>
      <CollectionItemContainer>
        {items.map((item, index) => (
          <div
            key={index}
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <CollectionReadMoreModal
              onClick={() => {
                modalOpen();
                setDescription(item.description);
                setActiveIndex(index);
              }}
            >
              <img src={item.image} width={200} alt={item.title} />
            </CollectionReadMoreModal>
            <CarouselSlideItemBody className="carousel-slide-item__body">
              <h4
                css={css`
                  text-transform: uppercase;
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
        ))}
      </CollectionItemContainer>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {CollectionModal(items[activeIndex].title, description)}
      </Modal>
    </>
  );
}

export function ClockShowcase() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const modalClose = () => setOpen(false);
  const modalOpen = () => setOpen(true);

  const [description, setDescription] = useState<string>("");

  return (
    <CollectionWrapper
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <SectionTitle>COLLECTION</SectionTitle>
      {BRAND_LIST.map((items, index) => (
        <CollectionItems
          key={index}
          items={items}
          modalParticle={{ open, modalOpen, modalClose }}
          description={description}
          setDescription={setDescription}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </CollectionWrapper>
  );
}

function CollectionModal(title: string, contents: string) {
  return (
    <Box sx={ModalBoxStyle}>
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

const CollectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CollectionItemContainer = styled.li`
  margin: 0;
  padding: 1rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 70%;
  justify-content: center;
`;

const CollectionReadMoreModal = styled.div`
  cursor: zoom-in;
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

  &::after {
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
