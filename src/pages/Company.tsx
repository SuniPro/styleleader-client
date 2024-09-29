import { TabMenu } from "../components/layouts/TabMenu";
import React, { useState } from "react";
import { Board } from "../components/Board/Board";
import { Introduce } from "../components/Introduce";
import styled from "@emotion/styled";
import { PageContainer } from "../components/layouts/PageLayouts";

export function Company() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const companyMenu = ["About us", "Notice"];

  function CompanyContents(index: number) {
    switch (index) {
      case 0:
        return <Introduce />;
      case 1:
        return <Board></Board>;
    }
  }

  return (
    <PageContainer>
      <Title>Company</Title>
      <TabMenu
        menuList={companyMenu}
        activeFunction={{ selectedIndex, setSelectedIndex }}
      />
      {CompanyContents(selectedIndex)}
    </PageContainer>
  );
}

const Title = styled.div`
  font-size: 40px;
  font-family: Roboto, sans-serif;

  font-weight: 800;
`;
