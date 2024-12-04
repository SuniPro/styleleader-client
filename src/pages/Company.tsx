/** @jsxImportSource @emotion/react */
import { TabMenu, TabMenuListType } from "../components/layouts/TabMenu";
import React, { useEffect, useState } from "react";
import { MainTitle, PageContainer } from "../components/layouts";
import { Outlet, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

export const COMPANY_MENU: TabMenuListType[] = [
  { menu: "About us", path: "info" },
  { menu: "Notice", path: "board" },
];

export function Company() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(COMPANY_MENU[selectedIndex].path);
    /* 위의 함수는 오직 selectedIndex가 변경되었을 때만 실행되어야합니다.
     * 하지만 boardList가 company의 자식요소로 있어 navigate의 실행이 발생하면, 해당 함수가 동작하여,
     * boardList의 기대하는 이동이 발생하지 않고 위의 함수가 동작하게 됩니다.
     * 따라서 이를 방지하기 위해 아래의 종속성에 navigate를 제거합니다.*/
    // eslint-disable-next-line
  }, [selectedIndex]);

  return (
    <PageContainer
      width={80}
      css={css`
        align-items: flex-start;
      `}
    >
      <MainTitle>Company</MainTitle>
      <TabMenu
        menuList={COMPANY_MENU}
        activeState={{ selectedIndex, setSelectedIndex }}
      />
      <Outlet />
    </PageContainer>
  );
}
