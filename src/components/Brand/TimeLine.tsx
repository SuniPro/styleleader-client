/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { css } from "@emotion/react";
import { PageContainer, SectionTitle } from "../layouts";
import React, { useEffect, useRef, useState } from "react";
import {
  isOverXScrolling,
  useHorizontalScroll,
  useScrollPosition,
} from "../../hooks/useWheel";
import { BrandHistory } from "../../assets/Brand/History/HistoryDescription";

const LOCATION_DOT_WIDTH = 11;
const TIMELINE_MARGIN_TOP = 100;
const LOCATION_DOT_HEIGHT = 8;
const TIME_TITLE_FONT_SIZE = 35;
const TIME_TITLE_MARGIN = 29.05;

export function TimeLineProcessY(props: { brand: BrandHistory }) {
  const { brand } = props;
  const timeLineRef = useRef<HTMLDivElement>(null);
  const pageContainerRef = useRef<HTMLDivElement>(null);

  const scrollPosition = useScrollPosition();

  const [topOffsets, setTopOffsets] = useState<number[]>([]);

  useEffect(() => {
    if (timeLineRef.current && pageContainerRef.current) {
      const offsets: number[] = [];

      Array.from(
        timeLineRef.current.querySelectorAll(".description-title"),
      ).forEach((el) => {
        if (pageContainerRef.current) {
          const elementTop = el.getBoundingClientRect().top;
          const offset =
            elementTop -
            pageContainerRef.current.getBoundingClientRect().top +
            LOCATION_DOT_HEIGHT / 2 -
            TIMELINE_MARGIN_TOP;
          offsets.push(offset);
        }
      });

      setTopOffsets(offsets);
    }
  }, [brand]);

  const dotRightFactor = timeLineRef.current
    ? timeLineRef.current.offsetWidth / 2 - LOCATION_DOT_WIDTH / 2
    : 0;

  return (
    <PageContainer
      ref={pageContainerRef}
      css={css`
        align-items: center;
        margin: 0;
      `}
    >
      <TimeLineWrapper ref={timeLineRef}>
        <BarArea>
          <BarProcess style={{ height: `${scrollPosition}px` }}>
            <Bar></Bar>
          </BarProcess>
        </BarArea>
        <TimeObjectList>
          {brand.timeLine.map((item, index) => {
            const arrive: boolean =
              scrollPosition >=
              topOffsets[index] + LOCATION_DOT_HEIGHT - TIMELINE_MARGIN_TOP;

            return (
              <ContentsList key={index}>
                <ContentsContainer>
                  <TextArea arrive={arrive}>
                    <StyledDescription className={"description-box"}>
                      <DescriptionTitle className={"description-title"}>
                        {item.time}
                        <i
                          css={css`
                            position: absolute;
                            top: ${topOffsets[index] || 0}px;
                            right: ${dotRightFactor}px;
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background: ${theme.colors.gold};
                            z-index: 1;

                            &:after {
                              content: "";
                              position: absolute;
                              left: 50%;
                              top: 50%;
                              width: 20px;
                              height: 20px;
                              margin-top: -12px;
                              margin-left: -12px;
                              border: 2px solid ${theme.colors.gold};
                              border-radius: 50%;
                              transition: transform 0.25s ease-out;
                              transform: ${scrollPosition +
                                LOCATION_DOT_HEIGHT >=
                              topOffsets[index]
                                ? "scale(1)"
                                : "scale(0)"};
                            }
                          `}
                        />
                      </DescriptionTitle>
                      <DescriptionSubTitle>{item.title}</DescriptionSubTitle>
                      <DescriptionContents>
                        {item.description}
                      </DescriptionContents>
                    </StyledDescription>
                  </TextArea>
                  <ImageWrapper>
                    <StyledImageCover src={item.image} alt="" />
                  </ImageWrapper>
                </ContentsContainer>
              </ContentsList>
            );
          })}
        </TimeObjectList>
      </TimeLineWrapper>
    </PageContainer>
  );
}

const TimeLineWrapper = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-top: 100px;
`;

const BarArea = styled.div`
  text-align: right;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px !important;
  margin-left: -1px;
  height: calc(100% + 10px);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: linear-gradient(
    0deg,
    rgba(221, 221, 221, 0) 0%,
    rgb(221, 221, 221) 50px,
    rgb(221, 221, 221) calc(100% - 50px),
    rgba(221, 221, 221, 0) 100%
  );
  margin-right: 0 !important;
  z-index: 0;
`;

const BarProcess = styled.span<{ height?: number }>(
  ({ height = 0 }) => css`
    position: absolute;
    left: 0;
    top: 0.1%;
    width: 100%;
    overflow: hidden;
    transition: 0s;
    background-color: ${theme.colors.gold};
    transform: scaleX(0.8); /* 원하는 비율로 조절 */
    transform-origin: top;
  `,
);

const Bar = styled.i`
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  background: linear-gradient(
    0deg,
    rgba(20, 72, 53, 0) 0%,
    ${theme.colors.gold} 50px,
    ${theme.colors.gold} calc(100% - 50px),
    rgba(20, 72, 53, 0) 100%
  );
`;

const TimeObjectList = styled.ol`
  width: 1240px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContentsList = styled.li`
  padding-bottom: 125px;
  font-family: "Noto Sans KR", "Halvar Breitschrift", sans-serif, dotum, gulim;
  font-weight: 400;
  white-space: normal;
  line-height: 1.4em;
  color: #111;
  font-size: 16px;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 240px;
`;

const TextArea = styled.div<{ arrive: boolean }>(
  ({ arrive }) => css`
    width: 50%;
    //margin-right: 64px;
    margin-right: ${arrive ? 64 : 200}px;
    text-align: right;

    transition: all 500ms ease;
  `,
);

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.white};
  text-align: right;
  height: 500px;

  font-family: ${theme.fontStyle.roboto};

  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  align-items: flex-end;
  box-sizing: border-box;
  overflow: hidden;
`;

const DescriptionTitle = styled.h1`
  font-size: 35px;
  color: ${theme.colors.gold};
`;

const DescriptionSubTitle = styled.h3`
  @media ${theme.windowSize.small} {
    width: 30%;
  }
`;

const DescriptionContents = styled.p`
  width: 50%;
  @media ${theme.windowSize.small} {
    width: 30%;
  }
`;

const ImageWrapper = styled.div`
  margin-left: 64px;
  margin-right: 0;
  text-align: left;
  width: 50%;
  position: relative;
  margin: 10px auto 0;
`;

const StyledImage = styled.img`
  width: 400px;
  background-size: cover;
`;

export function TimeCardXSlide(props: { brand: BrandHistory }) {
  const { brand } = props;
  const horizontalRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(horizontalRef, isOverXScrolling(horizontalRef));

  return (
    <PageContainer
      width={80}
      css={css`
        margin-top: 1rem;
      `}
    >
      <TimeLineContainer className="container">
        <div className="intro">
          <SectionTitle
            css={css`
              margin-bottom: 3rem;
              font-family: ${theme.fontStyle.archivo};
            `}
          >
            Frederique Constant, HISTORY.
          </SectionTitle>
        </div>
        <HorizontalTimeline className="horizontal-timeline" ref={horizontalRef}>
          <div className="opacity-overlay"></div>
          <div className="timeline">
            {brand.timeLine.map((timeLine, index) => {
              const isLast = index === brand.timeLine.length - 1;
              return (
                <>
                  <Card key={index}>
                    <CardItem>
                      <div>
                        <a className="link-image">
                          <BackgroundImage
                            image={timeLine.image}
                            className="image"
                          />
                        </a>
                      </div>
                      <div>
                        <Time>{timeLine.time}</Time>
                        <TimeTitle>{timeLine.title}</TimeTitle>
                        <TimeDescription>
                          {timeLine.description}
                        </TimeDescription>
                      </div>
                    </CardItem>
                  </Card>
                </>
              );
            })}
          </div>
        </HorizontalTimeline>
      </TimeLineContainer>
    </PageContainer>
  );
}

const TimeLineContainer = styled.div`
  transition: 0.33s ease all;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const TimeLineTitle = styled.h1`
  margin-bottom: 6rem;
  font-weight: 400;
  font-size: 28px;
  font-family: ${theme.fontStyle.roboto};
  white-space: nowrap;
`;

const HorizontalTimeline = styled.div`
  position: relative;

  cursor: grab;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    // display: none;
  }
  /* width */
  &::-webkit-scrollbar {
    // This is the height of the scrollbar.
    height: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    // background: #f1f1f1;
    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background: #e5e5e5;
    border: 2px solid transparent;
    background-clip: content-box; /* THIS IS IMPORTANT */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #cdcdcd;
    border-radius: 15px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.7, 0.7);
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-height: 960px) {
    h1 {
      font-size: 64px;
      // margin-bottom: 90px;
    }
  }
`;

const Card = styled.div<{ isLast?: boolean }>(
  ({ isLast }) => css`
    white-space: normal;
    display: inline-block;
    max-width: 350px;
    margin-right: 70px;
    div.image {
      height: 300px;
    }

    &:last-child {
      margin-right: 90px;
    }
  `,
);

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BackgroundImage = styled.div<{ image?: string }>(
  ({ image }) => css`
    background-image: url(${image});

    height: 250px;
    background-position: center;
    background-size: cover;
    background-color: #cdcdcd;
    margin-bottom: 30px;

    &:hover {
      transition: box-shadow 500ms ease; /* box-shadow에 트랜지션 추가 */
      box-shadow: 4px 4px 8px #373737;
    }
  `,
);

const Time = styled.h3`
  font-family: ${theme.fontStyle.archivo};
  color: ${theme.colors.white};
  font-weight: 500;
  margin: 0.5rem 0;
`;

const TimeTitle = styled.h4`
  font-family: ${theme.fontStyle.roboto};
  font-size: 1.5rem;
  margin: 0.1rem 0;
`;

const TimeDescription = styled.p`
  font-family: ${theme.fontStyle.roboto};
  font-size: 0.95rem;
  color: ${theme.colors.secondary};
`;

const StyledImageCover = styled.img`
  width: 40%;
  border-radius: 5px;
  @media screen and (max-width: ${theme.windowSize.small}) {
    height: 250px;
    object-fit: cover;
  }
`;
