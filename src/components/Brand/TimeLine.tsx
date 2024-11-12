/** @jsxImportSource @emotion/react */
import { TimeLine } from "../../model/Collection";
import FC_1988 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_1988.jpg";
import FC_1992 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_1992.jpg";
import FC_1994 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_1994.jpg";
import FC_1997 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_1997.jpg";
import FC_2000 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2000.jpg";
import FC_2001 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2001.jpg";
import FC_2002 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2002.jpg";
import FC_2004 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2004.jpg";
import FC_2009 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2009.jpg";
import FC_2012 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2012.jpg";
import FC_2015 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2015.jpg";
import FC_2016 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2016.jpg";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { css } from "@emotion/react";
import { PageContainer } from "../layouts";
import React, { useEffect, useRef, useState } from "react";
import { useScrollPosition } from "../../hooks/useWheel";

const LOCATION_DOT_WIDTH = 11;
const TIMELINE_MARGIN_TOP = 200;
const LOCATION_DOT_HEIGHT = 8;

const FC_TIMELINE: TimeLine[] = [
  {
    image: FC_1988,
    time: "1988",
    title: "프레드릭 콘스탄트의 탄생",
    description:
      "Aletta와 Peter Stas는 그들 만의 시계 컬렉션을 디자인하기 시작했습니다.",
  },
  {
    image: FC_1992,
    time: "1992",
    title: "첫번째 컬렉션",
    description:
      "4년간의 노력 끝에, 제네바 시계 제작자가 조립한 스위스 무브먼트를 탑재한 18세기 컬렉션이 출시되었습니다.",
  },
  {
    image: FC_1994,
    time: "1994",
    title: "하트비트 디자인의 첫 등장",
    description:
      "기계식 무브먼트의 심장을 보여주기 위해 다이얼의 12시 방향에 구멍이 있는 첫 번째 하트 비트 타임 피스를 출시했습니다. \n" +
      "이 하트 비트는 이후 브랜드의 시그니처가 되었습니다.",
  },
  {
    image: FC_1997,
    time: "1997",
    title: "스위스 제네바로 이동",
    description:
      "Aletta와 Peter Stas는 스위스 제네바의 카루주로 이사했습니다. 프레드릭 콘스탄트는 처음으로 바젤월드에 전시회에 참가합니다.",
  },
  {
    image: FC_2000,
    time: "2000",
    title: "셰네부르로 이동",
    description:
      "사무실을 카루즈(Carouge)에서 더 큰 생산 장소인 셰네-부르(Chêne-Bourg)로 이전합니다.",
  },
  {
    image: FC_2001,
    time: "2001",
    title: "당신의 열정을 살아가라는 슬로건의 탄생과 핌 코슬라흐의 도착",
    description:
      '"Live your Passion" 슬로건은 성공에 대한 열정을 공유하는 Aletta와 Peter Stas와 같은 사람들을 상징합니다. \n' +
      "같은 해에 브랜드는 결단력 있는 전환점을 맞이하며 \n" +
      "Pim Koeslag을 개발 팀의 일원으로 맞이합니다.",
  },
  {
    image: FC_2002,
    time: "2002",
    title: "당신의 열정을 살아가라는 슬로건의 탄생과 핌 코슬라흐의 도착",
    description:
      '"Live your Passion" 슬로건은 성공에 대한 열정을 공유하는 Aletta와 Peter Stas와 같은 사람들을 상징합니다. \n' +
      "같은 해에 브랜드는 결단력 있는 전환점을 맞이하며 \n" +
      "Pim Koeslag을 개발 팀의 일원으로 맞이합니다.",
  },
  {
    image: FC_2004,
    time: "2002",
    title: "첫 번째 매뉴팩처 칼리버",
    description:
      "브랜드의 첫 번째 매뉴팩처 칼리버인 FC-910이 완전히 자체 개발 및 조립되어 출시되었습니다. 이를 기념하기 위해, 이 첫 매뉴팩처 무브먼트는 6시 방향에 상징적인 하트 비트 오프닝을 특징으로 합니다.",
  },
  {
    image: FC_2009,
    time: "2009",
    title: "런어바웃 컬렉션 출시",
    description:
      "1920년대의 유명한 보트를 모티브로 한 런어바웃(Runabout) 컬렉션을 소개합니다. 2013년, 이러한 유명한 목조 보트를 보존하는 데 전념하는 리바 역사협회(Riva Historical Society)와 파트너십을 맺습니다.",
  },
  {
    image: FC_2012,
    time: "2012",
    title: "클래식 월드타이머 매뉴팩처 타임피스 출시",
    description:
      "미래 베스트셀러 중 하나가 공개됩니다. 세계 24개 주요 도시의 시간대를 표시하며, 끊임없이 여행하는 비즈니스맨에게 완벽한 시계입니다. \n" +
      "FC-718 매뉴팩처 칼리버의 모든 기능은 크라운만으로 조정할 수 있습니다.",
  },
  {
    image: FC_2015,
    time: "2015",
    title: "첫 번째 스위스 하이테크 스마트워치 출시",
    description:
      "스위스 메이드의 첫 번째 스마트워치로, 연결 기능을 갖추고 아날로그 다이얼을 제공합니다. \n" +
      "이 시계는 쿼츠 칼리버에 장착된 전자 모듈을 갖추고 있으며, 프레드릭 콘스탄트 스마트워치 앱과 연결됩니다.",
  },
  {
    image: FC_2016,
    time: "2016",
    title: "시티즌 시계 주식회사가 프레데리크 콘스탄트 그룹을 인수",
    description:
      "Aletta와 Peter Stas는 프레드릭 콘스탄트 그룹의 미래에 대해 생각하기 시작하고 시티즌의 인수 제안을 수락하기로 결정합니다. ",
  },
];

export function TimeLineProcessY() {
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
  }, []);

  const dotRightFactor = timeLineRef.current
    ? timeLineRef.current.offsetWidth / 2 - LOCATION_DOT_WIDTH / 2
    : 0;

  return (
    <PageContainer
      ref={pageContainerRef}
      css={css`
        align-items: center;
      `}
    >
      <TimeLineWrapper ref={timeLineRef}>
        <BarArea>
          <BarProcess style={{ height: `${scrollPosition}px` }}>
            <Bar></Bar>
          </BarProcess>
        </BarArea>
        <TimeObjectList>
          {FC_TIMELINE.map((item, index) => {
            const arrive: boolean =
              scrollPosition >=
              topOffsets[index] + LOCATION_DOT_HEIGHT - TIMELINE_MARGIN_TOP;

            return (
              <ContentsList key={index}>
                <ContentsContainer>
                  <TextArea arrive={arrive}>
                    <StyledDescription>
                      <DescriptionTitle className="description-title">
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
                                TIMELINE_MARGIN_TOP / 2 +
                                -LOCATION_DOT_HEIGHT * 2 -
                                20 >=
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
                    <StyledImage src={item.image} alt="" />
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
  margin-top: 200px;
`;

const BarArea = styled.div`
  text-align: right;
  position: absolute;
  left: 50%;
  top: 49.45%;
  width: 2px !important;
  margin-left: -1px;
  height: calc(98% + 14px);
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
    transform: scaleX(0.7); /* 원하는 비율로 조절 */
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

  font-family: ${theme.fontStyle.roboto};

  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  align-items: flex-end;
`;

const DescriptionTitle = styled.h1`
  color: ${theme.colors.gold};
`;

const DescriptionSubTitle = styled.h3``;

const DescriptionContents = styled.p`
  width: 50%;
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
