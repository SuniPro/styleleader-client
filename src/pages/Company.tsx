import { TabMenu } from "../components/layouts/TabMenu";
import { useState } from "react";
import { Board } from "../components/Board/Board";
import { Introduce } from "../components/Introduce";
import styled from "@emotion/styled";

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
    <Container>
      <Title>Company</Title>
      <TabMenu
        menuList={companyMenu}
        activeFunction={{ selectedIndex, setSelectedIndex }}
      />
      {CompanyContents(selectedIndex)}
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  color: white;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 40px;
  font-family: Roboto, sans-serif;

  font-weight: 800;
`;
