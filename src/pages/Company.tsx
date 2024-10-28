import { TabMenu } from "../components/layouts/TabMenu";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { PageContainer } from "../components/layouts/PageLayouts";
import { Outlet, useNavigate } from "react-router-dom";

export function Company() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selectedIndex === 0 ? "info" : "board");
  }, [selectedIndex]);

  const companyMenu = ["About us", "Notice"];

  return (
    <PageContainer>
      <Title>Company</Title>
      <TabMenu
        menuList={companyMenu}
        activeFunction={{ selectedIndex, setSelectedIndex }}
      />
      <Outlet />
    </PageContainer>
  );
}

const Title = styled.div`
  font-size: 40px;
  font-family: Roboto, sans-serif;

  font-weight: 800;
`;
