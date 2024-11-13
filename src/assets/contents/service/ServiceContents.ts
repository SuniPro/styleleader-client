import { ServiceCategory } from "../../../model/Service";
import CA_FICTURE from "../../image/CA_PICTURE.jpg";
import WATCH_REPAIR from "../../image/WATCH_REPAIR.jpg";
import FC_COLLECTION_MANUFACTURE from "../../CollectionImage/FC_COLLECTION-CLASSICS-GENTS.jpeg";

export const ServiceContentsAsset: ServiceCategory[] = [
  {
    thumbnail: CA_FICTURE,
    taxonomy: "modal&pageLocate",
    count: 6,
    name: "FAQ",
    slug: "faq",
    id: "faq",
    services: [
      {
        name: "시계 구매 후, 시계 정지",
        description:
          "시계구매 후 얼마 지나지 않아 시계가 정지됐어요. 불량인가요?",
        contents:
          "쿼츠시계의 경우 시계가 작동하는 것을 확인하기 위해 스위스에서 조립되었을 때부터 배터리가 들어가 있습니다. 대부분 조립되어있던 배터리 수명이 다한 것이기 때문에 불량이 아닙니다. \n" +
          "기계식 시계 같은 경우 먼저 용두를 돌려 태엽을 감아주세요. 태엽을 감은 후에도 작동이 안되면 증상에 따라 다르기에 문의 부탁드립니다.",
      },
      {
        name: "배터리 가격과 수명",
        description: "배터리 교체의 비용은 어떻게 되나요?",
        contents:
          "배터리 교체비용: 30,000원~40,000원\n" +
          "수명: 1년 반~2년\n" +
          "배터리 시계는 배터리 수명이 다되어 작동되지 않을 때 배터리를 빠르게 교체해주시지 않으면 배터리에서 누액이 나와 내부기계를 부식시킬 수 있습니다. 배터리 수명이 다 되어 작동이 되지 않으면 빠르게 본사 서비스 센터로 방문 또는 문의 바랍니다.",
      },
      {
        name: "밴드, 버틀의 가격",
        description: "밴드, 버틀의 가격은 어떻게 되나요?",
        contents:
          "일반 가죽밴드: 160,000원~170,000원\n" +
          "버클: 40,000원~270,000원\n" +
          "\n" +
          "악어가죽밴드와 메탈밴드 또는 자세한 이미지나 문의사항은 전화문의 또는 카카오톡(스타일리더CS상담) 상담 부탁드립니다.",
      },
      {
        name: "FAQ 더보기",
        description: "더 많은 정보가 필요해요.",
        contents: "/service/faq",
      },
    ],
  },
  {
    thumbnail: WATCH_REPAIR,
    taxonomy: "modal",
    count: 8,
    name: "AS",
    slug: "asManual",
    id: "asManual",
    services: [
      {
        name: "방문 접수",
        description: "평일 접수 가능",
        contents:
          "★점심시간 접수불가★\n" +
          "★주말제외 평일 접수 가능★\n" +
          "9:00~11:00 (11시 이후 접수 불가)\n" +
          "13:00~17:00 (17시 이후 접수 불가)\n" +
          "\n" +
          "보증서 지참하여 방문\n" +
          "* 오토매틱시계 :당일수리 불가(상태에 따라 다름)\n" +
          "* 쿼츠시계 : 배터리교체 및 밴드교체 당일수리 가능 30분소요",
      },
      {
        name: "택배 접수",
        description: "케이스는 받지 않습니다.",
        contents:
          "★상단 주소로 선불 발송\n" +
          "★케이스 받지 않습니다.★\n" +
          "케이스는 분실 우려가 있어 받지 않습니다.\n" +
          "\n" +
          "케이스 제외한 시계만 에어캡 포장하여 보증서,메모 내부동봉 발송\n" +
          "\n" +
          "1.메모: 성함, 연락처, A/S원하시는 부분, 수리완료 후 받으실 주소\n" +
          "(미기입시 발생되는 접수누락 및 지연 책임지지 않습니다.)\n" +
          "2.시계\n" +
          "3.보증서\n" +
          "\n" +
          "다시한번 말씀드립니다. 위 4가지 확인 후 동봉하지 않을시 접수누락으로 인한 수리지연 책임지지 않습니다.\n" +
          "\n" +
          "접수 후 순차적으로 1~2주 이내로 견적 및 수리관련 안내드리겠습니다. 감사합니다!",
      },
      {
        name: "프레드릭 콘스탄트 매장 접수",
        description: "시계 및 보증서 지참 필수",
        contents:
          "시계와 보증서 지참 후 프레드릭 콘스탄트 매장방문 접수\n" +
          "\n" +
          "* 보증서 분실 시 수리기록  또는 구매내역이 있어야 수리와 부자재구매가 가능합니다.\n" +
          "\n" +
          "보증서/보증\n" +
          "\n" +
          "2021년 이후 구매는 구입일로부터 5년 보증기간이며 배터리, 시계정지, 기본점검 등 무상으로 진행됩니다.\n" +
          "단 본사가 아닌 다른 외부에서 시계를 연 경우(수리, 배터리교체 포함), 외부충격(상태마다 다름 문의 후 진행여부확인), 크라운(용두)이상, 심한 스크래치, 찍힌자국, 폴리싱은 제외입니다.\n" +
          "\n" +
          "\n" +
          "병행수입 또는 해외 직구로 구매하신 제품은 AS 접수 및 부자재 구매가 불가합니다.\n" +
          "스타일리더를 통해 정식 수입된 시계와 해외 정식 구매처에서 구매한 시계만 접수가 가능합니다.\n" +
          "보증서에는 구매처와 구매일자, 홀로그램스티커, 모델명, 고유 시리얼 넘버가 기재되어 있어야 합니다.\n" +
          "보증서를 분실한 경우 수리기록 또는 구매내역이 있어야 AS 접수 및 부자재 구매가 가능합니다. \n" +
          "만약, 보증서를 분실하셨다면 우선 구매처를 확인하시고 구매처에 연락하여 구매 이력 또는 영수증을 받으시고 접수해주세요.\n" +
          "2016년 6월 이후부터 정식 수입된 프레드릭 콘스탄트 제품 보증서에는 스타일리더 정식 홀로그램 스티커가 있습니다. 확인 후 접수 부탁드립니다.\n" +
          "* 보증기간내에 정식 AS센터를 제외한 외부오픈 흔적 발견시 보증기간이 적용되지 않습니다. 꼭 참고바랍니다.",
      },
    ],
  },
  {
    thumbnail: FC_COLLECTION_MANUFACTURE,
    taxonomy: "download",
    count: 3,
    name: "사용설명서",
    slug: "userManual",
    id: "userManual",
    services: [
      {
        name: "프레드릭 콘스탄트 쿼츠시계",
        description: "사용 설명서 다운로드",
        contents: "manual/frederique_constant_automatic_manual.pdf",
      },
      {
        name: "프레드릭 콘스탄트 쿼츠시계",
        description: "사용 설명서 다운로드",
        contents: "manual/frederique_constant_quartz_manual.pdf",
      },
    ],
  },
];
