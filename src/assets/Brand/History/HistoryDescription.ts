import { TimeLine } from "../../../model/Collection";
import FC_1988 from "./FC/FC_WEB_History_Page_Pictures_1988.jpg";
import FC_1992 from "./FC/FC_WEB_History_Page_Pictures_1992.jpg";
import FC_1994 from "./FC/FC_WEB_History_Page_Pictures_1994.jpg";
import FC_1997 from "./FC/FC_WEB_History_Page_Pictures_1997.jpg";
import FC_2000 from "./FC/FC_WEB_History_Page_Pictures_2000.jpg";
import FC_2001 from "./FC/FC_WEB_History_Page_Pictures_2001.jpg";
import FC_2002 from "./FC/FC_WEB_History_Page_Pictures_2002.jpg";
import FC_2004 from "./FC/FC_WEB_History_Page_Pictures_2004.jpg";
import FC_2006 from "./FC/FC_WEB_History_Page_Pictures_2006.jpg";
import FC_2007 from "./FC/FC_WEB_History_Page_Pictures_2007.jpg";
import FC_2008_A from "./FC/FC_WEB_History_Page_Pictures_2008_A.jpg";
import FC_2008_B from "./FC/FC_WEB_History_Page_Pictures_2008_B.jpg";
import FC_2009 from "./FC/FC_WEB_History_Page_Pictures_2009.jpg";
import FC_2012 from "./FC/FC_WEB_History_Page_Pictures_2012.jpg";
import FC_2015 from "./FC/FC_WEB_History_Page_Pictures_2015.jpg";
import FC_2016 from "./FC/FC_WEB_History_Page_Pictures_2016.jpg";
import FC_2017 from "./FC/FC_WEB_History_Page_Pictures_2017.jpg";
import FC_2018_A from "./FC/FC_WEB_History_Page_Pictures_2018_A.jpg";
import FC_2018_B from "./FC/FC_WEB_History_Page_Pictures_2018_B.jpg";
import FC_2019 from "./FC/FC_WEB_History_Page_Pictures_2019.jpg";
import FC_2020 from "./FC/FC_WEB_History_Page_Pictures_2020.jpg";
import FC_2021 from "./FC/FC_WEB_History_Page_Pictures_2021.jpg";
import FC_2023 from "./FC/FC_WEB_History_Page_Pictures_2023.jpg";

import DOXA_1889 from "./DOXA/1889.webp";
import DOXA_1890 from "./DOXA/1890.webp";
import DOXA_1906 from "./DOXA/1906.webp";
import DOXA_1907 from "./DOXA/1907.webp";
import DOXA_1936 from "./DOXA/1936.webp";
import DOXA_1957 from "./DOXA/1957.webp";
import DOXA_2019 from "./DOXA/2019.webp";

import ALPINA_HISTORIC_MOOD from "./ALPINA/Alpina_Historic_Mood_Image.jpg";
import ALPINA_MOOD_SPORT_WATCH from "./ALPINA/Historic_Mood_Image_Sport_Watches_.jpg";
import ALPINA_MOOD_ALPINISTS from "./ALPINA/Historic_Mood_Image_Alpinists_.jpg";

export interface BrandHistory {
  historyTitle: string;
  historyDate: string;
  collectionSlogan: string;
  collectionList: string;
  timeLine: TimeLine[];
}

export const HistoryDescription: BrandHistory[] = [
  {
    historyTitle: "brand Extends, For Affordable LUXURY",
    historyDate: "1988 ~ 2023",
    collectionSlogan: "Live your passion, Frederique Constant",
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
        time: "2004",
        title: "첫 번째 매뉴팩처 칼리버",
        description:
          "브랜드의 첫 번째 매뉴팩처 칼리버인 FC-910이 완전히 자체 개발 및 조립되어 출시되었습니다. 이를 기념하기 위해, 이 첫 매뉴팩처 무브먼트는 6시 방향에 상징적인 하트 비트 오프닝을 특징으로 합니다.",
      },
      {
        image: FC_2006,
        time: "2006",
        title: "Plan-les-Ouates에서 매뉴팩처 건물 건설 ",
        description: "Plan-les-Ouates에 새롭게 설립된 매뉴팩처 건물의 준공식.",
      },
      {
        image: FC_2007,
        time: "2007",
        title: "빈티지 랠리 컬렉션 출시",
        description:
          "영국 자동차 브랜드 오스틴-힐리와의 파트너십 시작 및 전용 빈티지 랠리 컬렉션 제작.",
      },
      {
        image: FC_2008_A,
        time: "2008",
        title: "투르비용 매뉴팩처 리미티드 에디션 출시",
        description:
          "프레드릭 콘스탄트, FC-980 매뉴팩처 칼리버와 실리콘 이스케이프먼트를 장착한 첫 번째 투르비용 매뉴팩처 리미티드 에디션 공개. \n" +
          "6시 방향에 위치한 투르비용은 다이얼의 프레데릭 콘스탄트 상징인 하트 비트 오픈워크를 연상시킵니다.",
      },
      {
        image: FC_2008_B,
        time: "2008",
        title: "첫 번째 매뉴팩처 칼리버",
        description:
          "같은 해, 피터 스타스, 핌 쿠슬라그, 그리고 로버트 반 파펠렌담은 프레드릭 콘스탄트 그룹 내에 새로운 브랜드인 아틀리에 드 모나코(Ateliers deMonaco)를 설립했습니다. \n" +
          "이 브랜드는 고급 소재로 제작되고 미닛 리피터와 같은 매우 복잡한 메커니즘을 갖춘 파인 워치메이킹 타임피스를 제공합니다.",
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
      {
        image: FC_2017,
        time: "2017",
        title: "플라이백 크로노그래프 매뉴팩처 출시",
        description:
          "전통적인 플라이백 메커니즘은 클러치 시스템으로 작동하는 여러 개의 칼럼 휠로 구성되어 있습니다.\n" +
          "플라이백 크로노그래프 매뉴팩처를 작동시키는 FC-760 매뉴팩처 칼리버는 이러한 복잡성을 없애고, 표준 칼럼 휠 대신에 별 모양의 휠(특허받음)을 사용합니다. 이로 인해 더 얇은 무브먼트와 더 적은 부품 및 작동으로 이루어집니다.",
      },
      {
        image: FC_2018_A,
        time: "2017",
        title: "클래식 하이브리드 매뉴팩처 타임피스 출시",
        description:
          "독점적인 카펜터스 갤러리에서 공개된 클래식 하이브리드 매뉴팩처 타임피스는 연결된 기능을 갖추고 있으며,\n" +
          "시계 제조 역사상 처음으로 쿼츠 칼리버와 기계식 무브먼트를 결합합니다.",
      },
      {
        image: FC_2018_B,
        time: "2018",
        title: "전무 이사로 Niels Eggerding 임명 ",
        description:
          "Niels Eggerding는 2012년 그룹에 부영업 이사로 합류하기 전, 시계 제조업계에서 11년 동안 근무했습니다. \n" +
          "2014년에는 판매 부사장으로 승진하였고, 그의 강력한 비즈니스 능력 덕분에 2018년에 그룹의 전무 이사로 임명되었습니다.",
      },
      {
        image: FC_2019,
        time: "2019",
        title: "매뉴팩처 확장 및 매뉴팩처 체험 창설",
        description:
          "생산 능력을 높이고 그룹의 성장하는 수요와 확장을 지원하기 위해, 매뉴팩처 총 면적이 6200 m²로 확장되었습니다.  \n" +
          "또한, 그룹의 역사를 되짚어보는 대중 개방형 박물관인 매뉴팩처 체험관도 만들어졌습니다.",
      },
      {
        image: FC_2020,
        time: "2020",
        title: "스마트워치 바이탈리티 라인 출시",
        description:
          "연결된 시계 분야에서 지속적으로 나아가며,  \n" +
          "요청 시 디지털 화면을 표시하고 통합된 심박수 센서가 장착된 스마트워치 바이탈리티 라인을 출시합니다.",
      },
      {
        image: FC_2021,
        time: "2021",
        title: "세계 최초, 슬림라인 모노리식 매뉴팩처",
        description:
          "기계식 시계 조정의 원칙 재정의 \n" +
          "\n" +
          "표준 구성의 26개 부품을 대체하는 단일 실리콘 발진기\n" +
          "표준 무브먼트 구성에 맞는 크기의 혁신적인 디자인\n" +
          "놀라운 40Hz의 높은 주파수\n" +
          "80시간의 파워 리저브\n" +
          "\n" +
          "메종의 30번째 자체 제작 무브먼트: FC-810  \n",
      },
      {
        image: FC_2023,
        time: "2023",
        title: "프레드릭 콘스탄트 35주년 기념",
        description:
          "• 세계에서 가장 권위 있는 고급 시계 전시회인 워치스 앤 원더스에서 처음 선보임 \n" +
          "• 메종은 자랑스럽게 현대적인 스타일, 슬림한 라인, 다양한 소재 선택으로 투르비용 매뉴팩처를 재구성함\n" +
          " • 새로운 매뉴팩처 무브먼트 출시\n" +
          "메종의 31번째 자체 제작 무브먼트\n",
      },
    ],
  },
  {
    historyTitle: "Your call to adventure",
    historyDate: "1889 ~ 2019",
    collectionSlogan: "The adventure continues.",
    collectionList: "DOXA SUB. THE LEGEND LIVES ON.",
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
  {
    historyTitle: "The Timekeeper of choice for Alpinists",
    historyDate: "1883 ~ NOW",
    collectionSlogan: "Collection For Alpinists",
    collectionList: "Alpiner · StartTimer · SEA STRONG · Heritage",
    timeLine: [
      {
        image: ALPINA_HISTORIC_MOOD,
        time: "1883",
        title: "THE BRAND",
        description:
          "우리의 여정은 스위스 시계 제조의 요람인 쥐라 산맥의 깊은 곳에 위치한 작은 마을 르 로클에서 시작됩니다. \n 조르주 뒤코문은 13명의 자녀 중 한 명으로 1880년, 열두 살의 나이에 시계 장인의 견습생으로 일하기 시작했습니다. 집안이 넉넉하지 않았기 때문에 조르주는 자신의 몫을 가족 수입에 기여해야 했습니다. 근면과 절제를 중시하는 조르쥬의 기질과 기계적인 정밀성과 아름다움에 대한 열정은 점점 더 숙련되고 전문적인 손을 거쳐 시계를 제작하게 되었습니다.",
      },
      {
        image: ALPINA_MOOD_SPORT_WATCH,
        time: "1938",
        title: "History of alpina",
        description:
          '그는 Alpina가 시계의 품질, 내구성, 정밀성 및 디자인으로 전 세계적으로 엄청난 성공을 거둘 것이라고 확신했습니다. 그는 스포츠맨, 엔지니어, 기술자 및 모험가에게 이상적인 시계를 제공하고 싶었습니다. Hauser는 1938년 "Alpina 4" 컨셉트를 도입하면서 자신의 비전을 현실로 만들었습니다.\n' +
          '그 해에 하우저는 진정한 "스포츠 시계"로 여겨지기를 원하는 모든 시계에 필수적인 네 가지 원칙을 부과함으로써 스포츠 시계에 혁명을 일으켰습니다. 그는 스포츠 시계는 다음 네 가지 특성을 모두 가져야 한다고 주장했습니다.',
      },
      {
        image: ALPINA_MOOD_ALPINISTS,
        time: "NOW",
        title: "The timekeeper of choice for alpinists",
        description:
          '이러한 원칙과 특성을 엄격히 고수함으로써 전설적인 "알피나 4" 시계는 알피니스트, 공군 조종사, 다이버, 해군 및 군대가 선택하는 타임키퍼가 되었습니다.\n' +
          '임무 수행에 절대적인 신뢰성이 중요한 모든 분야에서 "알피나 4"는 신뢰할 수 있는 시간 측정의 핵심이 되었습니다.\n' +
          '진정으로 혁신적인 "알피나 4" 제조 요구 사항을 지속적으로 고수하면서 회사는 1970년대 소위 "쿼츠 위기"가 스위스 기계식 시계 제조업체에 큰 부정적인 영향을 미칠 때까지 비교할 수 없는 성공을 거두었습니다.\n' +
          "1920년대에 알피나는 이미 전 세계 2,000개 이상의 매장에서 판매되고 있었는데, 당시로서는 엄청난 숫자였습니다. \n" +
          "알피나는 스위스 시계의 최초 선두 제조업체 중 하나였다고 해도 과언이 아닙니다.\n" +
          "오늘날 알피나의 설립에 기반한 이상과 혁신은 제네바 공장에서 여전히 살아있으며, 가장 엄격한 시계 기준에 맞춰 전문 스포츠 시계를 제작하고 있습니다.",
      },
    ],
  },
];
