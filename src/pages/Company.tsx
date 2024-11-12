import { TabMenu } from "../components/layouts/TabMenu";
import React, { useEffect, useState } from "react";
import { MainTitle, PageContainer } from "../components/layouts";
import { Outlet, useNavigate } from "react-router-dom";

export const COMPANY_MENU = ["About us", "Notice"];

export function Company() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selectedIndex === 0 ? "info" : "board");
  }, [selectedIndex]);

  return (
    <PageContainer width={80}>
      <MainTitle>Company</MainTitle>
      <TabMenu
        menuList={COMPANY_MENU}
        activeFunction={{ selectedIndex, setSelectedIndex }}
      />
      <Outlet />
    </PageContainer>
  );
}
