/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { getBoard } from "../api/boards";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { ReadyBanner } from "../components/Empty/ReadyBanner";
import { css } from "@emotion/react";
import { PageContainer } from "../components/layouts";
import { iso8601ToYYMMDDHHMM } from "../utils/dateApi";
import {
  Container,
  Divider,
  IconButton,
} from "../components/layouts/LayoutLayer";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import React, { useState } from "react";
import { BoardEditor } from "../components/Board/BoardEditor";
import { Spinner } from "../components/Spinner";

export function BoardDetail() {
  const { boardId } = useParams<{ boardId: string }>();
  const [writing, setWriting] = useState<boolean>(false);

  const { data: board } = useQuery({
    queryKey: ["getBoard"],
    queryFn: () => getBoard(boardId ?? ""),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  if (!board) {
    return (
      <PageContainer
        css={css`
          margin: 10rem 0;
          align-items: center;
        `}
      >
        <Spinner />
      </PageContainer>
    );
  }

  if (!board.title) {
    return (
      <PageContainer
        css={css`
          margin: 10rem 0;
          align-items: center;
        `}
      >
        <ReadyBanner
          type="컨텐츠 없음"
          title="자료가 없습니다."
          description=""
        />
      </PageContainer>
    );
  }

  return (
    <Container>
      {writing ? (
        <BoardEditor writing={() => setWriting((prev) => !prev)} />
      ) : (
        <>
          <div
            css={css`
              gap: 20px;
              width: 100%;
              display: flex;
              flex-direction: column;
            `}
          >
            <HeaderLine
              css={css`
                font-size: 30px;
                font-weight: bold;
                font-family: Roboto, sans-serif;
              `}
            >
              <HeaderItem>
                <PriorityHighIcon
                  fontSize="small"
                  color={board ? "info" : "warning"}
                />
                <div>{board.title}</div>
              </HeaderItem>
            </HeaderLine>
            <HeaderLine>
              <HeaderItem>
                작성 일자 : {iso8601ToYYMMDDHHMM(board.insertDate ?? "")}
              </HeaderItem>
              <HeaderItem
                css={css`
                  gap: 10px;
                `}
              >
                <IconButton
                  func={() => setWriting((prev) => !prev)}
                  icon={EditIcon}
                />
                <IconButton icon={ShareIcon}></IconButton>
              </HeaderItem>
            </HeaderLine>
          </div>
          <Divider />
          <ContentArea>
            <div dangerouslySetInnerHTML={{ __html: board.content }} />
          </ContentArea>
          <Divider />
        </>
      )}
    </Container>
  );
}

const HeaderLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const HeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentArea = styled.div`
  width: 100%;
`;
