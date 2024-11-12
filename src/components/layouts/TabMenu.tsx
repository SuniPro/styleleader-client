/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { gsap } from "gsap";
import theme from "../../styles/theme";

export interface ActiveFunctionProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export function TabMenu(props: {
  menuList: string[];
  activeState: ActiveFunctionProps;
  activeFunction?: () => void;
}) {
  const state = window.location.pathname;
  const { menuList } = props;
  const { selectedIndex, setSelectedIndex } = props.activeState;

  const handleClick = (index: number) => {
    if (selectedIndex === 0 && !state.includes("/info")) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <TabMenuContainer>
      <TabMenuUnorderedList>
        {menuList.map((menu, index) => (
          <TabMenuList
            key={index}
            className={selectedIndex === index ? "active" : ""}
            isActive={selectedIndex === index}
            onClick={() => handleClick(index)}
          >
            <TabMenuContent isActive={selectedIndex === index}>
              {menu}
            </TabMenuContent>
          </TabMenuList>
        ))}
      </TabMenuUnorderedList>
    </TabMenuContainer>
  );
}
const TabMenuContainer = styled.div`
  border-radius: 10rem;
  padding: 15px 0;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

const TabMenuUnorderedList = styled.ul`
  width: 220px;
  height: 50px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #181818;
  border-radius: 500px;
  padding: 8px 10px;
`;

const TabMenuList = styled.li<{ isActive?: boolean }>(
  ({ isActive }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: #222;
    border-radius: 4rem;
    font-size: 1.2rem;
    padding: 1rem;
    transition:
      background-position 1s cubic-bezier(0.165, 0.84, 0.44, 1),
      all 1s ease;
    cursor: pointer;
    ${isActive && "background: linear-gradient(to bottom,#D7BC6A,#FFE9A6);"};

    width: 132px;
    height: 35%;

    /* 활성화된 상태에 대한 스타일 적용 */
    &.active {
      padding: 1rem 1.2rem;
    }
  `,
);

const TabMenuContent = styled.span<{ isActive?: boolean }>(
  ({ isActive }) => css`
    font-family: Roboto, sans-serif;
    width: 100%;
    font-size: 22px;
    font-weight: ${isActive ? "700" : "normal"};
    white-space: nowrap;
    color: ${isActive ? "#212121" : "#ffffff"};
  `,
);

export function TripleTabMenu(props: {
  className?: string;
  menuList: string[];
  activeState: ActiveFunctionProps;
}) {
  const { className, menuList, activeState } = props;

  const { selectedIndex, setSelectedIndex } = activeState;

  let currentLink: EventTarget & Element;
  let currentIndex = 0;
  const links = document.querySelectorAll("nav a");

  function addActive(e: React.MouseEvent, index: number) {
    const target = e.currentTarget;
    links.forEach((link) => link.classList.remove("active"));

    if (target !== currentLink) {
      let direction;
      if (currentIndex < index) direction = "right";
      else direction = "left";
      const slide = target.querySelector(".slide");

      gsap
        .timeline()
        .fromTo(
          slide,
          {
            transformOrigin: `${direction === "left" ? "right" : "left"} center`,
            scaleX: 0,
          },
          {
            delay: 0.1,
            duration: 0.25,
            scaleX: 1,
          },
        )
        .to(slide, {
          delay: 0.25,
          duration: 0.25,
          transformOrigin: `${direction} center`,
          scaleX: 0,
        });
      currentLink = target;
      currentIndex = index;
    }
  }

  return (
    <TripleTabNav className={className}>
      {menuList.map((menu, index) => (
        <TabLink
          href="#"
          onClick={(e) => {
            setSelectedIndex(index);
            addActive(e, index);
          }}
          active={selectedIndex === index}
        >
          <span className="text">{menu.toUpperCase()}</span>
          <div
            css={css`
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: ${theme.colors.gold};
              opacity: 0.2;
              transform: scaleX(0);
            `}
            className="slide"
          />
        </TabLink>
      ))}
    </TripleTabNav>
  );
}

export const TripleTabNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabLink = styled.a<{ active: boolean }>(
  ({ active }) => css`
    position: relative;
    text-decoration: none;
    font-family: ${theme.fontStyle.roboto};
    font-weight: bold;
    color: ${active ? theme.colors.gold : theme.colors.gray};
    margin: 0 1rem;
    transition:
      text-shadow 300ms ease,
      color 300ms ease;
    ${active && "text-shadow: 0 0 20px #4df9ff7c"}

    &:focus {
      outline: none;
      border: none;
    }
  `,
);
