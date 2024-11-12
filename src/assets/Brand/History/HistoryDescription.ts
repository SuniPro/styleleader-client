import { TimeLine } from "../../../model/Collection";
import FC_1988 from "./FC/FC_WEB_History_Page_Pictures_1988.jpg";
import FC_1992 from "./FC/FC_WEB_History_Page_Pictures_1992.jpg";
import FC_1994 from "./FC/FC_WEB_History_Page_Pictures_1994.jpg";
import FC_1997 from "./FC/FC_WEB_History_Page_Pictures_1997.jpg";
import FC_2000 from "./FC/FC_WEB_History_Page_Pictures_2000.jpg";
import FC_2001 from "./FC/FC_WEB_History_Page_Pictures_2001.jpg";
import FC_2002 from "./FC/FC_WEB_History_Page_Pictures_2002.jpg";
import FC_2004 from "./FC/FC_WEB_History_Page_Pictures_2004.jpg";
import FC_2009 from "./FC/FC_WEB_History_Page_Pictures_2009.jpg";
import FC_2012 from "./FC/FC_WEB_History_Page_Pictures_2012.jpg";
import FC_2015 from "./FC/FC_WEB_History_Page_Pictures_2015.jpg";
import FC_2016 from "./FC/FC_WEB_History_Page_Pictures_2016.jpg";

import DOXA_1889 from "./DOXA/1889.webp";
import DOXA_1890 from "./DOXA/1890.webp";
import DOXA_1906 from "./DOXA/1906.webp";
import DOXA_1907 from "./DOXA/1907.webp";
import DOXA_1936 from "./DOXA/1936.webp";
import DOXA_1957 from "./DOXA/1957.webp";
import DOXA_2019 from "./DOXA/2019.webp";

export interface BrandHistory {
  historyTitle: string;
  historyDate: string;
  collectionSlogan: string;
  collectionList: string;
  timeLine: TimeLine[];
}

export const HistoryDescription: BrandHistory[] = [
  {
    historyTitle: "Brand Extends, For Affordable LUXURY",
    historyDate: "1988 ~ 2023",
    collectionSlogan: "Affordable LUXURY, For YOU",
    collectionList: "MANUFACTURE · HIGHLIFE · CLASSICS",
    timeLine: [
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
    ],
  },
  {
    historyTitle: "To be Continue, The adventure",
    historyDate: "1889 ~ 2019",
    collectionSlogan: "If the adventure is with YOU",
    collectionList: "SUB200 · SUB300 · LIMITED EDITION",
    timeLine: [
      {
        image: DOXA_1889,
        time: "1889",
        title: "스위스 워치메이킹의 요람에서",
        description:
          "우리의 여정은 스위스 시계 제조의 요람인 쥐라 산맥의 깊은 곳에 위치한 작은 마을 르 로클에서 시작됩니다. \n 조르주 뒤코문은 13명의 자녀 중 한 명으로 1880년, 열두 살의 나이에 시계 장인의 견습생으로 일하기 시작했습니다. 집안이 넉넉하지 않았기 때문에 조르주는 자신의 몫을 가족 수입에 기여해야 했습니다. 근면과 절제를 중시하는 조르쥬의 기질과 기계적인 정밀성과 아름다움에 대한 열정은 점점 더 숙련되고 전문적인 손을 거쳐 시계를 제작하게 되었습니다.",
      },
      {
        image: DOXA_1890,
        time: "1890",
        title: "1889. 모험이 시작됩니다...",
        description:
          "조지는 독창성, 세심한 배려, 신속한 서비스, 고객 지향성으로 탄탄한 명성을 쌓아왔으며, 심지어 시계 한 개를 배달하기 위해 20킬로미터를 걸어가기도 했습니다. 하지만 그는 결코 만족하지 않았습니다. 조지는 작은 부품과 무브먼트 하나하나에 생명을 불어넣으면서 어떻게 하면 더 나은 시계를 만들 수 있을지 상상했습니다. 조르주는 곧 자신의 안전 지대에서 벗어날 때가 되었다는 것을 깨닫고 21살에 자신의 사업체 '조르주 뒤코문, 파브리크 독사'를 열었습니다.",
      },
      {
        image: DOXA_1906,
        time: "1906",
        title: "품질, 가치의 새로운 이름...",
        description:
          '"DOXA"는 영광을 뜻하는 그리스어입니다. 시간이 지나면서 가치와 품질, 탁월한 장인정신으로 명성이 높은 화려한 시계를 의미하게 되었습니다.\n' +
          " 조르쥬의 독특한 장인 정신은 유라 지역과 뇌샤텔, 스위스를 넘어 전 세계적으로 인정받았습니다. 그의 포켓워치는 1905년 벨기에 리에주에서 열린 만국박람회(Exposition Universelle et Internationale)에서 영예를 안았고,\n" +
          " 1906년에는 이탈리아 밀라노에서 열린 만국박람회에서 조르쥬의 항자성 독사(DOXA)가 금메달을 수상했습니다.",
      },
      {
        image: DOXA_1907,
        time: "1907",
        title: "...그리고, 혁신",
        description:
          "조르쥬의 독창성과 최적화 능력은 20세기 초 자동차 혁명이 던진 문제를 완벽하게 해결해 주었습니다. \n" +
          "내구 레이스가 대세였던 당시에는 적절한 파워 리저브를 갖춘 견고하고 안정적인 대시보드 장착형 시계가 필요했습니다.\n" +
          ' 조르쥬는 1907년 "8-데이 독사 칼리버"에 대한 특허를 출원했고, 이는 부가티 레이싱카의 표준 장비이자 업계 표준이 되었습니다.\n' +
          " 다른 자동차 브랜드의 계기판에도 곧바로 DOXA가 탑재되었고, 곧이어 선박과 비행기도 그 뒤를 따랐습니다.",
      },
      {
        image: DOXA_1936,
        time: "1936",
        title: "내구성과 정확성에 대한 명성",
        description:
          "제로는 변하지 않는 내구성과 찰나의 정확성을 구현하기 위해 혁신에 몰두했습니다. \n" +
          "1936년 조르주가 세상을 떠나자 그의 사위인 자크 나르뎅(유명한 시조 브랜드의 창립자인 율리스 나르뎅의 손자)이 경영권을 물려받아 그 여정을 이어나갔습니다. \n" +
          "여행용 및 스포츠 시계에 초점을 맞추면서도 독사는 모든 유형의 고객을 위한 시계를 지속적으로 개발했습니다. 알람, 링 시계, 날짜 포인터, 점핑 초침과 같은 기술적 진보와 같은 혁신이 이루어졌습니다.",
      },
      {
        image: DOXA_1957,
        time: "1957",
        title: "시대를 초월하는 것은 목적의 순수성에서 비롯됩니다.",
        description:
          '독사는 1957년 바우하우스에서 영감을 받은 미니멀한 "그라픽" 드레스 워치 컬렉션으로 미적 감각을 인정받으며 클래식 브랜드로서의 입지를 굳혔습니다. \n' +
          "10년 후, 성장하는 스포츠 다이버 커뮤니티를 위해 특수 설계된 전문가용 SUB 다이빙 시계가 최초로 출시되어 기술력을 인정받았습니다. \n" +
          "SUB는 다이빙의 전설 자크 이브 쿠스토와 함께 개발되었으며, 급진적인 혁신을 도입하여 오늘날까지도 군인 및 프로 다이버들의 기준이 되고 있습니다.",
      },
      {
        image: DOXA_2019,
        time: "2019",
        title: "모험은 계속됩니다...",
        description:
          "쿼츠 기술의 등장은 스위스 시계 제조 산업에 격동의 시기를 가져왔습니다.\n" +
          " 독사를 비롯한 여러 유명 브랜드가 해결해야 했던 많은 과제 중 하나였습니다. \n" +
          "1997년 제니 가문이 독사를 인수하면서 4대에 걸쳐 시계 제조 분야에서 활동해 온 가문과 아이코닉 컬렉션의 지속적인 매력을 결합하여 새로운 시대가 시작되었습니다. \n" +
          "본사는 스위스 비엘/비엔으로 이전했습니다.",
      },
    ],
  },
];
