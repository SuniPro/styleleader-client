/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { css } from "@emotion/react";

export interface TabMenuProps {
  icon: ReactNode;
  title: string;
}

export interface ActiveFunctionProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export function TabMenu(props: {
  menuList: TabMenuProps[];
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
            onClick={() => handleClick(index)}
          >
            <TabMenuIcon>{menu.icon}</TabMenuIcon>
            <TabMenuContent isActive={selectedIndex === index}>
              {menu.title}
            </TabMenuContent>
          </TabMenuList>
        ))}
      </TabMenuUnorderedList>
    </TabMenuContainer>
  );
}
const TabMenuContainer = styled.div`
  border-radius: 10rem;
  padding: 1rem 2rem;
  background-color: var(--color-secondary);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  margin-top: 50px;
`;

const TabMenuUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  padding: 0;
  border: 1px solid #d7bc6a;
  border-radius: 20px;
`;

const TabMenuList = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: #222;
  border-radius: 4rem;
  font-size: 1.2rem;
  padding: 1rem;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  /* 활성화된 상태에 대한 스타일 적용 */
  &.active {
    padding: 1rem 2rem;
  }
`;

const TabMenuIcon = styled.span`
  transform: translateY(2px);
`;

const TabMenuContent = styled.span<{ isActive?: boolean }>(
  ({ isActive }) => css`
    display: ${isActive ? "block" : "none"};
    color: white;
    font-weight: normal;
    font-family: Gothic, sans-serif;
  `,
);
