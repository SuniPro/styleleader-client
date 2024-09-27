import { BoardList } from "./BoardList";
import styled from "@emotion/styled";

export function Board() {
  return (
    <Container>
      <BoardList></BoardList>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;
