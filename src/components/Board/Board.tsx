import { BoardList } from "./BoardList";
import styled from "@emotion/styled";
import React from "react";

export function Board() {
  return (
    <Container>
      <BoardList></BoardList>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
`;
