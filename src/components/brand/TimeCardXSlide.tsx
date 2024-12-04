/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { TimeLine } from "../../model/Collection";

import FC_1988 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_1988.jpg";
import FC_1992 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_1992.jpg";
import FC_1994 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_1994.jpg";
import FC_1997 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_1997.jpg";
import FC_2000 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2000.jpg";
import FC_2001 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2001.jpg";
import FC_2002 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2002.jpg";
import FC_2004 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2004.jpg";
import FC_2009 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2009.jpg";
import FC_2012 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2012.jpg";
import FC_2015 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2015.jpg";
import FC_2016 from "../../assets/Brand/History/FC/FC_WEB_History_Page_Pictures_2016.jpg";
import { PageContainer, SectionTitle } from "../layouts";
import { css } from "@emotion/react";
import { useRef } from "react";
import { isOverXScrolling, useHorizontalScroll } from "../../hooks/useWheel";

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
