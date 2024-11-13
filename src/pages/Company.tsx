import { TabMenu } from "../components/layouts/TabMenu";
import React from "react";
import { MainTitle, PageContainer } from "../components/layouts";
import { Outlet } from "react-router-dom";

export interface TabMenuListType {
  menu: string;
  path: string;
}

export const COMPANY_MENU: TabMenuListType[] = [
  { menu: "About us", path: "info" },
  { menu: "Notice", path: "board" },
];

export function Company() {
  return (
    <PageContainer width={80}>
      <MainTitle>Company</MainTitle>
      <TabMenu menuList={COMPANY_MENU} />
      <Outlet />
    </PageContainer>
  );
}
