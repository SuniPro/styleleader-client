/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard, getBoard } from "../api/boards";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { ReadyBanner } from "../components/Empty/ReadyBanner";
import { css } from "@emotion/react";
import {
  Container,
  Divider,
  IconFuncButton,
  PageContainer,
} from "../components/layouts";
import { iso8601ToYYMMDDHHMM } from "../utils/dateApi";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { BoardEditor } from "../components/Board/BoardEditor";
import { Spinner } from "../components/Spinner";
import { Board } from "../model/Board";
import { success } from "../alert/alert";

const extractFilenames = (board: Board) => {
  if (!board) return;
  const content = board.content;

  const s3Url = process.env.REACT_APP_S3_URL ?? "";

  // 정규식을 사용하여 모든 img 태그의 src 값을 추출
  const regex = /<img[\s\S]*?src="([^"]+)"/g;
  const matches = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    matches.push(match[1]); // 매칭된 URL 저장
  }

  return matches
    .filter((src) => src.startsWith(s3Url))
    .map((src) => src.replace(s3Url, ""));
};

export function BoardDetail() {
  const { boardId } = useParams<{ boardId: string }>();
  const [writing, setWriting] = useState<boolean>(false);
  const navigate = useNavigate();

  const { data: board } = useQuery({
    queryKey: ["getBoard"],
    queryFn: () => getBoard(boardId ?? ""),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  if (!board) {
    return <Spinner />;
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

  const deleteHandler = () => {
    deleteBoard(board.boardId!, extractFilenames(board)).then(() => {
      success("삭제 완료");
      setTimeout(() => {
        navigate("/board");
      }, 1500);
    });
  };

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
                  color={board.important ? "warning" : "info"}
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
                <IconFuncButton
                  func={() => setWriting((prev) => !prev)}
                  icon={EditIcon}
                />
                <IconFuncButton icon={ShareIcon} />
                <IconFuncButton icon={DeleteIcon} func={deleteHandler} />
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
