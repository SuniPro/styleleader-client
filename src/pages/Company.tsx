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
  }, [navigate, selectedIndex]);

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
