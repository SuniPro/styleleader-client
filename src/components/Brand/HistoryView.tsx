import styled from "@emotion/styled";
import theme from "../../styles/theme";
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
import FC_2017 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2017.jpg";
import FC_2018 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2018.jpg";
import FC_2019 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2019.jpg";
import FC_2020 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2020.jpg";
import FC_2021 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2021.jpg";
import FC_2023 from "../../assets/BrandImage/History/FC/FC_WEB_History_Page_Pictures_2023.jpg";
import { PageContainer } from "../layouts/PageLayouts";
import { uid } from "uid";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

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

export function HistoryView() {
  const [randomFactors, setRandomFactors] = useState<number[]>([]);

  useEffect(() => {
    // 무작위성 갱신
    const factors: number[] = FC_TIMELINE.map(() => Math.random() * 10000);
    setRandomFactors(factors);
  }, []);

  return (
    <PageContainer>
      <TimeLineWrapper>
        <StyeldTitle>Events</StyeldTitle>
        <section>
          <StyledSubTitle>2 December</StyledSubTitle>
          <TimeTable>
            {FC_TIMELINE.map((timeLine, index) => {
              const factor = randomFactors[index];
              return (
                <TimeLineBox key={index}>
                  {factor % 2 === 0 ? (
                    <>
                      <div>
                        <Time>{timeLine.time}</Time>
                        <TimeTitle>{timeLine.title}</TimeTitle>
                        <TimeDescription>{timeLine.title}</TimeDescription>
                      </div>
                      {timeLine.image && <StyledImage src={timeLine.image} />}
                    </>
                  ) : (
                    <>
                      {timeLine.image && <StyledImage src={timeLine.image} />}
                      <div>
                        <Time>{timeLine.time}</Time>
                        <TimeTitle>{timeLine.title}</TimeTitle>
                        <TimeDescription>{timeLine.title}</TimeDescription>
                      </div>
                    </>
                  )}
                </TimeLineBox>
              );
            })}
          </TimeTable>
        </section>
      </TimeLineWrapper>
    </PageContainer>
  );
}

const TimeLineWrapper = styled.main`
  width: 100%;
  margin: auto;
  scroll-behavior: smooth;
`;

const StyeldTitle = styled.h1`
  font-family: ${theme.fontStyle.poppins};
  color: ${theme.colors.white};
`;

const StyledSubTitle = styled.h2`
  color: ${theme.colors.luxuryGreen};
  font-family: ${theme.fontStyle.poppins};
  font-weight: 500;
`;

const TimeTable = styled.div`
  @media screen and (min-width: ${theme.windowSize.small}) {
    display: grid;
    grid-auto-flow: column;
    gird-gap: 1rem;
  }

  @media screen and (min-width: ${theme.windowSize.large}) {
    grid-template-columns: 1fr 2fr 1fr 2fr;
  }
  @media screen and (min-width: ${theme.windowSize
      .small}) and (max-width: ${theme.windowSize.large}) {
    grid-template-columns: 1fr 2fr;
  }
`;

const TimeLineBox = styled.article`
  padding-bottom: 1rem;
  border-bottom: 1px solid #4d4d4d;

  &:nth-of-type(4) {
    grid-area: 1/2/4/3;
  }

  &:nth-of-type(8) {
    @media screen and (min-width: 1025px) {
      grid-area: 1/4/4/-1;
    }
    @media screen and (min-width: ${theme.windowSize
        .small}) and (max-width: ${theme.windowSize.large}) {
      grid-area: 4/2/8/3;
    }
  }

  &:nth-of-type(4n + 3) {
    @media screen and (min-width: 1025px) {
      border-bottom: 0;
    }
  }
  &:nth-of-type(4) {
    @media screen and (min-width: 1025px) {
      border-right: $border;
      padding-right: 1rem;
    }
  }
  &:nth-of-type(4n) {
    @media screen and (min-width: ${theme.windowSize.small}) {
      border-left: $border;
      border-bottom: 0;
      padding-left: 1rem;
    }
  }
`;

const Time = styled.h3`
  font-family: ${theme.fontStyle.poppins};
  color: ${theme.colors.white};
  font-weight: 500;
  margin: 0.5rem 0;
`;

const TimeTitle = styled.h4`
  font-family: ${theme.fontStyle.montserrat};
  font-size: 1.5rem;
  margin: 0.1rem 0;
`;

const TimeDescription = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 0.95rem;
  color: ${theme.colors.secondary};
`;

const ImageCase = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  width: 40%;
  border-radius: 5px;
  @media screen and (max-width: ${theme.windowSize.small}) {
    height: 250px;
    object-fit: cover;
  }
`;
