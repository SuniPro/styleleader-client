/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { formatDateToYYMMDD } from "../../utils/dateApi";
import Logo from "../layouts/LogoComponent";
import { useRef, useState } from "react";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const WRAPPER_PADDING_TOP = 40;

const CONNECT_LIST = [
  {
    menu: "WATCHWAVE",
    icon: StorefrontIcon,
    description: "https://watchwave.co.kr/",
  },
  {
    menu: "FC",
    icon: InstagramIcon,
    description: "https://www.instagram.com/frederiqueconstant_korea/",
  },
  {
    menu: "DOXA",
    icon: InstagramIcon,
    description: "https://www.instagram.com/doxawatcheskr/",
  },
];

const STORE_LIST = [
  {
    store: "lotte",
    type: ["offline"],
    info: [
      { location: "본점", tell: "02-2118-6124" },
      { location: "잠실점", tell: "02-2143-7122" },
      { location: "강남점", tell: "02-531-2287" },
      { location: "소공점 (면세)", tell: "02-759-6771" },
    ],
  },
  {
    store: "Shinsegae",
    type: ["offline"],
    info: [
      { location: "본점", tell: "02-310-1970" },
      { location: "하남점", tell: "031-8072-1870" },
      { location: "경기점", tell: "031-695-1655" },
      { location: "부산점 (면세)", tell: "051-775-3264" },
    ],
  },
  {
    store: "hyundai",
    type: ["offline"],
    info: [
      { location: "판교점", tell: "031-5170-2246" },
      { location: "대전점", tell: "042-332-2216" },
      { location: "무역센터점 (면세)", tell: "02-2142-6170" },
    ],
  },
];

const BANNER_LIST = [
  {
    headerLine: "leader",
    thumbnail: (
      <Logo
        width={200}
        css={css`
          padding: 20px;
          border: ${theme.colors.black};
        `}
      />
    ),
    date: formatDateToYYMMDD(new Date(Date.now())),
    title: '시간을 "품격" 으로 완성하다.',
    subTitle: [{ text: "Company Establishment" }, { text: "2001.07 ~" }],
    description:
      "Styleleader는 스위스의 시계 브랜드를 엄선하고 국내에 소개하며,\n" +
      "    품질과 신뢰를 최우선으로 하는 유통 전문 기업입니다.\n" +
      "    소비자가 선택한 제품에 대해 끝까지 책임을 다하며, 고객과의\n" +
      "    약속을 지켜나갑니다. 시계의 정교함과 시간을 소중히 여기는 가치를\n" +
      "    공유하는 Styleleader는 언제나 고객의 곁에서 품격 있는 시간을\n" +
      "    완성합니다.",
    link: "",
  },
  {
    headerLine: "Store",
    thumbnail: (
      <img
        width={150}
        src="https://ecimg.cafe24img.com/pg1008b59218028051/styleleader8/web/upload/category/logo/v2_154252477128bf02bdb6acd530b26a0d_jTP4ECVWEw_top.jpg"
        alt="WatchWave store"
      />
    ),
    date: "12.06.2021",
    title: "Frederique Constant · Alpina · GaGa Milano 한국 공식 수입원",
    subTitle: [{ text: "Style Leader 공식 온라인 스토어" }],
    description:
      "Watchwave는 단순한 시계 매장이 아닙니다. 스타일리더가 엄선한 고품질 스위스 시계 브랜드들을 한자리에서 만나볼 수 있는 편집샵입니다. Watchwave는 각 브랜드의 독창적인 스타일과 품질을 유지하며, 철저한 고객 관리와 차별화된 서비스를 제공합니다. 고객의 니즈에 맞춘 맞춤형 상담과 지속적인 소통을 통해, 구매 후에도 만족할 수 있는 경험을 선사합니다.\n" +
      "\n" +
      "프로모션 및 할인 이벤트 또한 자주 진행되어, 원하는 시계를 보다 합리적인 가격에 만날 수 있는 기회가 주어집니다. 브랜드별 한정판 출시, 특별 이벤트 등 다양한 혜택이 준비되어 있으니, Watchwave에서 시계를 구매하는 것만으로도 특별한 혜택을 누릴 수 있습니다.\n" +
      "\n" +
      "믿을 수 있는 편집샵에서 신뢰할 수 있는 시계를 만나보세요. ",
    link: "",
  },
];

export function Introduce() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [HoverMenu, setHoverMenu] = useState<number>(0);
  const [activeBanner, setActiveBanner] = useState<number>(0);

  const newsPaperLocate = wrapperRef.current
    ? wrapperRef.current?.offsetTop - WRAPPER_PADDING_TOP
    : 0;
  const newsPaperPin = () => {
    window.scrollTo({
      top: newsPaperLocate,
      behavior: "smooth",
    });
  };

  return (
    <>
      <IntroduceWrapper ref={wrapperRef} className="blog">
        <BlogPart className="blog-part is-menu" isMenu={true}>
          {CONNECT_LIST.map((connect, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  css={css`
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-items: center;
                    margin-bottom: 20px;
                    gap: 10px;
                  `}
                  onMouseEnter={() => setHoverMenu(index)}
                >
                  {connect.icon && <connect.icon />}
                  <BlogMenu
                    href="#"
                    onClick={() => {
                      window.open(connect.description);
                    }}
                  >
                    {connect.menu}
                  </BlogMenu>
                  <svg
                    css={css`
                      width: 24px;
                      display: ${HoverMenu === index ? "block" : "none"};
                    `}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth=".7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-up-right"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </React.Fragment>
            );
          })}
        </BlogPart>
        <BlogIsSticky>
          <BlogArticle className="blog-article header-article">
            <HeaderLineTitlePrefix
              css={css`
                padding-bottom: 19px;
                padding-left: 10px;
              `}
            >
              Style
            </HeaderLineTitlePrefix>
            <HeaderLineTitlePurpose></HeaderLineTitlePurpose>
          </BlogArticle>
          <PageNumber>NO. 0{activeBanner + 1}</PageNumber>
        </BlogIsSticky>
        <div className="blog-header-container">
          {BANNER_LIST.map((banner, index) => (
            <div
              key={index}
              className="blog-header"
              onMouseEnter={() => {
                setActiveBanner(index);
              }}
            >
              <div>
                <BlogArticle className="blog-article header-article">
                  <HeaderLineTitlePrefix className="blog-big__title">
                    {banner.headerLine}
                  </HeaderLineTitlePrefix>
                  <div
                    className="blog-menu small-title date"
                    css={css`
                      padding-right: 10px;
                    `}
                  >
                    {banner.date}
                  </div>
                </BlogArticle>
              </div>

              <BlogArticle className="blog-article">
                <BannerCase onMouseEnter={() => newsPaperPin()}>
                  {banner.thumbnail}
                </BannerCase>
                <div
                  css={css`
                    padding: 0 10px;
                  `}
                >
                  <NewsTitle>{banner.title}</NewsTitle>
                  <div className="blog-detail">
                    {banner.subTitle.map((text, index) => (
                      <React.Fragment key={index}>
                        <span>{text.text}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <NewsDescription>{banner.description}</NewsDescription>
                </div>
                <a href={banner.link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-corner-down-right"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 10l5 5-5 5" />
                    <path d="M4 4v7a4 4 0 004 4h12" />
                  </svg>
                  See More
                </a>
              </BlogArticle>
            </div>
          ))}
        </div>
        <BlogPart isMenu={false}>
          <div
            css={css`
              font-size: 20px;
              background-color: #121418;
              color: #e9e6e4;
              padding: 6px 0;
              width: 100%;
              flex-shrink: 0;
            `}
          ></div>
          <BlogRightTitleContainer>
            <div className="blog-right-title">Store List</div>
          </BlogRightTitleContainer>
          <div className="blog-right">
            <div className="blog-right-container">
              <div className="blog-title-date">
                <Map
                  center={{ lat: 37.5097068966865, lng: 127.024670188825 }}
                  className={"thumb"}
                  level={3}
                  css={css`
                    width: 100%;
                    height: 200px;
                  `}
                >
                  <MapMarker
                    position={{ lat: 37.5097068966865, lng: 127.024670188825 }}
                  />
                </Map>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  flex-wrap: nowrap;
                  justify-content: center;
                `}
              >
                <CaptionInfoType>StyleLeader 본사</CaptionInfoType>
              </div>
              <div className="blog-right-page-subtitle"></div>
            </div>
            {STORE_LIST.map((store, index) => (
              <div className="blog-right-container" key={index}>
                <div className="blog-title-date">
                  <div
                    className="blog-right-page"
                    css={css`
                      text-transform: uppercase;
                    `}
                  >
                    {store.store}
                  </div>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                  `}
                >
                  {store.type.map((type, index) => (
                    <CaptionInfoType key={index}>{type}</CaptionInfoType>
                  ))}
                </div>
                <div className="blog-right-page-subtitle">
                  {store.info.map((info, index) => (
                    <React.Fragment key={index}>
                      <span>
                        {info.location} {info.tell}
                      </span>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            {/*<CirCle className="circle">*/}
            {/*  <div className="circle-title">See More</div>*/}
            {/*  <div className="circle-subtitle">*/}
            {/*    페이지 하단의 전화번호를 참고해주세요.*/}
            {/*  </div>*/}
            {/*  <div className="circle-footer"></div>*/}
            {/*</CirCle>*/}
          </div>
        </BlogPart>
      </IntroduceWrapper>
    </>
  );
}

const CaptionInfoType = styled.div`
  text-transform: uppercase;
  font-family: "Space Grotesk", sans-serif;
  font-size: 24px;
  font-weight: 600;
  max-width: 16ch;
  letter-spacing: -1px;
`;

const HeaderLineTitlePrefix = styled.div`
  text-transform: capitalize;
  color: ${theme.colors.black};
  font-size: 90px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  letter-spacing: -5px;
  line-height: 1;
  margin-bottom: 6px;
`;

const HeaderLineTitlePurpose = styled.div`
  text-decoration: none;
  color: #161419;
  display: flex;
  letter-spacing: -0.5px;
  align-items: center;

  border-bottom: 1px solid #94918f;
  padding: 0 0 20px 10px;

  font-style: italic;
  font-size: 18px;

  @media screen and (max-width: 560px) {
    font-size: 14px;
    position: absolute;
    top: 10px;
    right: 24px;
    border-bottom: 0;
  }
`;

const BannerCase = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewsTitle = styled.h2`
  font-family: ${theme.fontStyle.roboto};
  font-weight: 900;

  font-size: 26px;
  line-height: 1.2;
  margin: 8px 0 8px;
`;

const NewsDescription = styled.p`
  line-height: 1.5;
  margin: 14px 0;
  font-family: ${theme.fontStyle.montserrat};
`;

const BlogMenu = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #161419;
  display: flex;
  letter-spacing: -0.5px;
  align-items: center;
`;

const BlogArticle = styled.div`
  h2 {
    span {
      font-family: "Playfair Display", serif;
    }
  }

  a {
    color: #161419;
    text-decoration: none;
    font-size: 26px;
    letter-spacing: -1px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid #94918f;
    padding-top: 14px;

    svg {
      width: 26px;
      margin-right: 10px;
    }
  }
`;

const BlogRightTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #94918f;
  margin-bottom: 20px;
  padding-bottom: 16px;
  margin-top: 80px;
  letter-spacing: -1px;

  @media screen and (max-width: 1400px) {
    margin-top: 88px;
  }

  @media screen and (max-width: 1260px) {
    margin-top: 6vw;
  }

  @media screen and (max-width: 1030px) {
    margin-top: 5vw;
  }
`;

const PageNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  font-size: 72px;
  text-align: center;
  letter-spacing: -3px;
  font-weight: lighter;
  font-family: "Space Grotesk", sans-serif;
  border-right: 1px solid #94918f;
  white-space: nowrap;

  @media screen and (max-width: 1260px) {
    font-size: 5vw;
  }
`;

const IntroduceWrapper = styled.div`
  img {
    max-width: 100%;
  }

  color: ${theme.colors.black};

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  background-color: #e9e6e4;
  max-width: 1350px;
  display: grid;
  height: 90vh;
  max-height: 600px;
  overflow: hidden;
  grid-template-columns: 15% 20% 40% 25%;
  grid-template-rows: 100%;
  width: 100%;
  padding: 40px 4px;
  position: relative;
  border: 1px solid ${theme.colors.basicBlack};

  @media screen and (max-width: 1030px) {
    grid-template-columns: 20% 50% 30%;
  }

  @media ${theme.windowSize.middle} {
    grid-template-columns: 100%;
  }

  @media ${theme.windowSize.small} {
    grid-template-columns: 100%;
  }

  &-part {
    padding: 0 20px;

    &:not(:last-child) {
      border-right: 1px solid #94918f;
    }
  }

  &-menu {
    font-size: 22px;
    text-decoration: none;
    color: #161419;
    display: flex;
    letter-spacing: -0.5px;
    align-items: center;

    @media screen and (max-width: 1260px) {
      font-size: 1.6vw;
    }

    svg {
      width: 22px;
      margin-left: 4px;
    }

    & + & {
      margin-top: 24px;
    }

    &.rounded {
      &:before {
        content: "";
        border-radius: 50%;
        width: 12px;
        height: 12px;
        background-color: #161419;
        margin-right: 12px;
      }
    }
  }

  .is-menu {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1030px) {
      display: none;
    }
  }

  &-big__title {
    font-size: 132px;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    letter-spacing: -5px;
    line-height: 1;
    margin-bottom: 6px;

    @media screen and (max-width: 1400px) {
      font-size: 120px;
    }

    @media screen and (max-width: 1260px) {
      font-size: 9vw;
      letter-spacing: -2px;
    }

    @media screen and (max-width: 560px) {
      font-size: 36px;
      margin-bottom: 12px;
    }
  }

  &-header {
    display: flex;
    flex-direction: column;
  }

  &-article {
    padding: 0 20px;

    img {
      height: 260px;
      max-height: 22vh;
      width: 100%;
      object-fit: cover;
      filter: grayscale(1);
    }
  }

  .small-title {
    border-bottom: 1px solid #94918f;
    margin-bottom: 20px;
    padding-bottom: 20px;

    @media screen and (max-width: 560px) {
      font-size: 14px;
      position: absolute;
      top: 10px;
      right: 24px;
      border-bottom: 0;
    }
  }

  .date {
    display: flex;
    justify-content: flex-end;
  }

  .blog-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    span {
      font-family: ${theme.fontStyle.roboto};
    }
  }

  .blog-header-container {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    border-right: 1px solid #94918f;

    @media screen and (max-width: 768px) {
      border-right: 0;
    }

    & > * {
      flex-shrink: 0;
      min-height: 100%;
      scroll-snap-align: start;
    }

    .blog-article:not(.header-article) {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }

  .blog-right {
    overflow: auto;
    height: calc(100% + 60px);
    padding-left: 10px;
    position: relative;

    .rounded {
      font-style: italic;
      font-size: 18px;

      &:before {
        content: "";
        border-radius: 50%;
        width: 9px;
        height: 9px;
        background-color: rgb(22 20 25);
        margin-right: 6px;
      }
    }
  }

  .blog-right-title {
    font-size: 25px;
    font-family: "Playfair Display", serif;
  }

  .blog-title-date {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .blog-right-page {
    font-size: 36px;
    margin-bottom: 16px;
    font-family: "Space Grotesk", sans-serif;

    &-subtitle {
      max-width: 33ch;
      font-size: 15px;
      margin-top: 12px;
      line-height: 1.4;
    }
  }

  .blog-right-container {
    margin-top: 40px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const BlogIsSticky = styled.div`
  @media ${theme.windowSize.middle} {
    display: none;
  }
`;

const BlogPart = styled.div<{ isMenu: boolean }>(
  ({ isMenu }) => css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      border-right: ${isMenu && "1px solid #94918f"};
    }

    ${isMenu &&
    `

    @media screen and (max-width: 768px) {
      display: ${!isMenu};
    }

    .blog-menu {
      @media screen and (max-width: 1030px) {
        display: none;
      }
    }
  `}
  `,
);

const CirCle = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 200px;
  height: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #121418;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #e9e6e4;
  padding: 20px;
  text-align: center;
  margin-top: 40px;

  &-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    font-family: "Space Grotesk", sans-serif;

    @media screen and (max-width: 1030px) {
      display: none;
    }
  }

  &-subtitle {
    max-width: 30ch;
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 16px;
  }

  &-footer {
    font-family: "Playfair Display", serif;
    font-size: 30px;
  }
`;
