/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import {
  BrandCatalog,
  ClockShowcase,
} from "../components/CarouselContents/Advertisement";
import styled from "@emotion/styled";
import { CardContents, CardFeed } from "../components/Board/DisplayBoard";
import { css } from "@emotion/react";
import { uid } from "uid";
import { Box, Modal, Typography } from "@mui/material";

import StyleLeaderMap from "../assets/maps/style-leader-map.jpg";

const CARDS = 1;

interface NewsFeedType {
  title: string;
  contents: ReactNode;
}

export const ModalBoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  border: "3px solid transparent",
  borderImage: "linear-gradient(to bottom, #d7bc6a 0%, #ffffff 150%)",
  borderImageSlice: 1,
  boxShadow: 24,
  p: 4,
  color: "#ffffff",
  backgroundColor: "black",
};

export function StyleLeaderDisplay() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const feedList: NewsFeedType[] = [
    { title: "페이지 준비중", contents: NoticeReady() },
    { title: "사무실 이전 공지", contents: NoticeMove() },
  ];

  return (
    <StyleLeaderDisplaySection>
      <BrandCatalog />
      <ClockShowcase />
      <div
        css={css`
          width: 100vw;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: "Montserrat", sans-serif;
        `}
      >
        <CardFeed cardLength={feedList.length}>
          {feedList.map((feed) => (
            <CardContents
              key={`i ${uid()}`}
              title={feed.title}
              content={feed.contents}
            />
          ))}
        </CardFeed>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {NoticeModal()}
      </Modal>
    </StyleLeaderDisplaySection>
  );
}

function NoticeModal() {
  return (
    <Box sx={ModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <p>
          2024년 10월 1일 부터 스타일리더 고객센터가
          <br />
          이전 영업하오니 이용에 참고하시기 바랍니다.
        </p>
        <p>위치 : 서울시 강남구 강남대로 126길 26길 SL빌딩 3층</p>
        <img src={StyleLeaderMap} width={300}></img>
        <br />
        <p>주의사항: 보증서 지참 부탁드립니다.</p>
        <p>영업시간: 09:00 - 18:00 (점심시간 12:00-13:00)</p>
        <p>문의번호: 02-2235-7848 (내선0번)</p>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
    </Box>
  );
}

function NoticeMove() {
  return (
    <>
      <p>
        2024년 10월 1일 부터 스타일리더 고객센터가
        <br />
        이전 영업하오니 이용에 참고하시기 바랍니다.
      </p>
      <p>위치 : 서울시 강남구 강남대로 126길 26길 SL빌딩 3층</p>
      <br />
      <p>주의사항: 보증서 지참 부탁드립니다.</p>
      <p>영업시간: 09:00 - 18:00 (점심시간 12:00-13:00)</p>
      <p>문의번호: 02-2235-7848 (내선0번)</p>
    </>
  );
}

function NoticeReady() {
  return (
    <>
      <p>
        브랜드와 서비스 기능은 아직 준비 중입니다.
        <br />
        AS 및 기타 문의는 아래의 전화 혹은 메일을 참고 바랍니다.
      </p>
      <br />
      <p>문의번호: 02-2235-7848 (내선0번)</p>
      <p>메일: cs@styleleader.co.kr</p>
      <p>영업시간: 09:00 - 18:00 (점심시간 12:00-13:00)</p>
    </>
  );
}

const StyleLeaderDisplaySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 80px;
`;
