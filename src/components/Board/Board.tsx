import { BoardList } from "./BoardList";
import styled from "@emotion/styled";
import { BoardEditor } from "./BoardEditor";
import React from "react";

export function Board() {
  return (
    <Container>
      <BoardList></BoardList>
      <BoardEditor />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;
