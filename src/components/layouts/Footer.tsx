/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { ReactComponent as StyleLeaderGrayIcon } from "../../assets/Icons/styleLeader-ci-gray.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <StyleLeaderGrayIcon
          width={200}
          css={css`
            padding: 15px;
          `}
        ></StyleLeaderGrayIcon>
        <address
          css={css`
            font-style: inherit;
          `}
        >
          스타일리더 | 서울특별시 강남구 도산대로 456 일진청담빌딩 9층
        </address>
        <div>02-2235-3573 | example@example.com</div>
        <FooterButtons>
          <InstagramIcon href="https://about.codle.io" />
          <LocalMallIcon href="https://about.codle.io" />
          <YouTubeIcon href="https://about.codle.io" />
        </FooterButtons>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: relative;
  transform: translateY(0%);
  display: flex;
  align-items: flex-end;
  gap: 36px;

  background-color: black;
  color: white;
  width: 100%;

  @media only screen and (max-device-width: 600px) {
    /* 모바일에서는 로고가 하단에 나옴 */
    flex-direction: column-reverse;
    margin: 0 12px;
    align-items: flex-start;
  }
`;

const FooterContent = styled.div(
  ({ theme }) => css`
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 4px;
    flex: 1 0 0;
    /* Default/Paragraph/14px-Rg */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    align-items: center;
    transform: translateY(0%);
  `,
);

const FooterButtons = styled.div`
  display: flex;
  gap: 12px 8px;
  justify-content: center;

  flex-wrap: wrap;
  padding: 15px 0;
`;
