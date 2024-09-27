/** @jsxImportSource @emotion/react */
import {
  Brand,
  ClockShowcase,
} from "../components/CarouselContents/Advertisement";
import React from "react";
import styled from "@emotion/styled";
import { CardContents, CardFeed } from "../components/Board/DisplayBoard";
import { css } from "@emotion/react";
import { uid } from "uid";

const CARDS = 10;

export function StyleLeaderDisplay() {
  return (
    <StyleLeaderDisplaySection>
      <Brand />
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
        <CardFeed>
          {[...new Array(CARDS)].map((_, i) => (
            <CardContents
              key={`i ${uid()}`}
              title={"Card " + (i + 1)}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          ))}
        </CardFeed>
      </div>
    </StyleLeaderDisplaySection>
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
