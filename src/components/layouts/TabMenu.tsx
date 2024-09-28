/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface ActiveFunctionProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export function TabMenu(props: {
  menuList: string[];
  activeFunction: ActiveFunctionProps;
}) {
  const { menuList } = props;

  const { selectedIndex, setSelectedIndex } = props.activeFunction;

  const handleClick = (index: number) => {
    setSelectedIndex(index); // 클릭된 항목의 인덱스를 저장
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
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
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
