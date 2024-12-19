import styled from "@emotion/styled";
import { IconTypcnChevronLeftOutline } from "../../assets/Icons/ChevronOutlineArrow";
import { IconTypcnChevronRightOutline } from "../../assets/Icons/ChevronOutlineArrow";
import React, { Children, useEffect, useRef, useState } from "react";
import { css, useTheme } from "@emotion/react";
import { SectionTitle } from "../layouts";
import theme from "../../styles/theme";

const COLOR_GRAY = "#9CA3AF";
const COLOR_BLACK = "#1F2937";
const COLOR_SIZE = 300;

export function CardFeed(props: { children: any; cardLength: number }) {
  const { children, cardLength } = props;
  const cardFeedContainer = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [active, setActive] = useState(cardLength - 1);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(0);

  useEffect(() => {
    setContainerWidth(cardFeedContainer.current?.offsetWidth);
  }, [cardFeedContainer.current?.offsetWidth]);

  const count = Children.count(children);

  return (
    <CardFeedContainer theme={theme} ref={cardFeedContainer}>
      <SectionTitle>STYLE LEADER FEED</SectionTitle>
      <CardStack cardSize={containerWidth ? containerWidth * 0.35 : COLOR_SIZE}>
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

export function CardContents(props: { title: string; content: string }) {
  const { title, content } = props;
  return (
    <CardCase colorGray={COLOR_GRAY} colorBlack={COLOR_BLACK}>
      <h2>{title}</h2>
      <CardFeedContents dangerouslySetInnerHTML={{ __html: content }} />
    </CardCase>
  );
}

const CardStack = styled.div<{ cardSize: number }>(
  ({ cardSize }) => css`
    position: relative;
    width: ${cardSize}px;
    height: ${cardSize}rem;
    perspective: 500px;
    transform-style: preserve-3d;

    .nav {
      color: white;
      font-size: ${theme.fontSize.lg};
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
    text-align: center;
    transition: all 0.3s ease-out;
    color: ${theme.colors.white};

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

const CardFeedContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  font-family: Montserrat, sans-serif;
`;

const CardFeedContents = styled.div`
  overflow-y: scroll;
`;
