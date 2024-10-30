import styled from "@emotion/styled";
import { IconTypcnChevronLeftOutline } from "../../assets/Icons/ChevronOutlineArrow";
import { IconTypcnChevronRightOutline } from "../../assets/Icons/ChevronOutlineArrow";
import React, { Children, ReactNode, useState } from "react";
import { css, Theme, useTheme } from "@emotion/react";

const COLOR_GRAY = "#9CA3AF";
const COLOR_BLACK = "#1F2937";
const COLOR_SIZE = 23;

export function CardFeed(props: { children: any; cardLength: number }) {
  const { children, cardLength } = props;

  const theme = useTheme();

  const [active, setActive] = useState(cardLength - 1);
  const count = Children.count(children);

  return (
    <CardFeedContainer theme={theme}>
      <CardFeedTitle>STYLE LEADER FEED</CardFeedTitle>
      <CardStack cardSize={COLOR_SIZE}>
        {active > 0 && (
          <button className="nav left" onClick={() => setActive((i) => i - 1)}>
            <IconTypcnChevronLeftOutline />
          </button>
        )}
        {Children.map(children, (child, i) => {
          const offset = (active - i) / 3;
          const direction = Math.sign(active - i);
          const absOffset = Math.abs(active - i) / 3;
          return (
            <CardContainer
              offset={offset}
              direction={direction}
              absOffset={absOffset}
            >
              {child}
            </CardContainer>
          );
        })}
        {active < count - 1 && (
          <button className="nav right" onClick={() => setActive((i) => i + 1)}>
            <IconTypcnChevronRightOutline />
          </button>
        )}
      </CardStack>
    </CardFeedContainer>
  );
}

export function CardContents(props: { title: string; content: ReactNode }) {
  const { title, content } = props;
  return (
    <CardCase colorGray={COLOR_GRAY} colorBlack={COLOR_BLACK}>
      <h2>{title}</h2>
      <div>{content}</div>
    </CardCase>
  );
}

const CardStack = styled.div<{ cardSize: number }>(
  ({ cardSize }) => css`
    position: relative;
    width: ${cardSize}rem;
    height: ${cardSize}rem;
    perspective: 500px;
    transform-style: preserve-3d;

    .nav {
      color: white;
      font-size: 5rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      z-index: 2;
      cursor: pointer;
      user-select: none;
      background: unset;
      border: unset;

      &.left {
        transform: translateX(-100%) translatey(-50%);
      }

      &.right {
        right: 0;
        transform: translateX(100%) translatey(-50%);
      }
    }
  `,
);

const CardContainer = styled.div<{
  offset: number;
  absOffset: number;
  direction: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(${(props) => `calc(${props.offset} * 50deg)`})
    scaleY(${(props) => `calc(1 + ${props.absOffset} * -0.4)`})
    translateZ(${(props) => `calc(${props.absOffset} * -30rem)`})
    translateX(${(props) => `calc(${props.direction} * -5rem)`});
  filter: blur(${(props) => `calc(${props.absOffset} * 1rem)`});
  transition: all 0.3s ease-out;
`;

const CardCase = styled.div<{ colorGray: string; colorBlack: string }>(
  ({ colorGray }) => css`
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    background-color: hsl(280deg, 40%, calc(100% * 50%));
    border-radius: 1rem;
    color: ${colorGray};
    text-align: justify;
    transition: all 0.3s ease-out;
    color: white;

    h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 0 0 0.7em;
      color: #d7bc6a;
    }

    p,
    h2 {
      transition: all 0.3s ease-out;
      opacity: 1;
    }
  `,
);

const CardFeedContainer = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: Montserrat, sans-serif;
  `,
);

const CardFeedTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 1.875rem;
  letter-spacing: 1.6px;
  line-height: 2.4375rem;
  color: white;
`;
