/** @jsxImportSource @emotion/react */
import { TableHeader, TableBody, Pagination } from "./Table/TableParticle";
import {
  useReactTable,
  ColumnDef,
  getPaginationRowModel,
  getCoreRowModel,
  ColumnResizeMode,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { Board } from "../../model/Board";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { css } from "@emotion/react";
import {
  Container,
  EllipsisCase,
  StyledWriteButton,
  TableContainer,
} from "../layouts";
import { BoardEditor } from "./BoardEditor";
import { useQuery } from "@tanstack/react-query";
import { getBoardList } from "../../api/boards";
import { iso8601ToYYMMDDHHMM } from "../../utils/dateApi";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../layouts";
import { Spinner } from "../Spinner";
import { ReadyBanner } from "../empty/ReadyBanner";
import theme from "../../styles/theme";
import { useUserContext } from "../context/UserContext";

export function BoardList() {
  const { user } = useUserContext();

  const { data: boardList } = useQuery({
    queryKey: ["getBoardList"],
    queryFn: () => getBoardList(),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  const navigate = useNavigate();
  const [writing, setWriting] = useState<boolean>(true);
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");

  const columns = useMemo<ColumnDef<Board>[]>(
    () => [
      {
        id: "index",
        header: "번호",
        size: 100,
        accessorKey: "boardId",
        cell: ({ row }) => {
          return (
            <span
              css={css`
                width: 10px;
                height: 10px;
              `}
            >
              {row.original.important ? (
                <PriorityHighIcon fontSize={"small"} color={"warning"} />
              ) : (
                row.original.boardId
              )}
            </span>
          );
        },
      },
      {
        id: "title",
        header: "제목",
        accessorKey: "title",
        cell: ({ row }) => (
          <div onClick={() => navigate(`${row.original.boardId}`)}>
            <EllipsisCase
              css={css`
                padding: 15px 0;
              `}
              text={row.getValue<string>("title")}
              textAlign="left"
            />
          </div>
        ),
        size: 800,
      },
      { id: "writer", header: "작성자", accessorKey: "writer" },
      {
        id: "insertDate",
        header: "작성일",
        accessorKey: "insertDate",
        cell: ({ row }) =>
          iso8601ToYYMMDDHHMM(row.getValue<string>("insertDate")),
        size: 150,
      },
    ],
    [navigate],
  );

  const table = useReactTable<Board>({
    data: boardList ?? [],
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  if (!boardList) {
    return <Spinner />;
  }

  if (boardList.length === 0) {
    return (
      <PageContainer
        css={css`
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
    <>
      {writing ? (
        <Container
          css={css`
            align-items: flex-end;
            width: 100%;
          `}
        >
          <TableContainer>
            <TableHeader
              table={table}
              headerBorder={"1px solid #ffffff"}
              columnResizeMode={columnResizeMode}
            />
            <TableBody table={table} />
          </TableContainer>
          <Pagination table={table} />
          {user?.roleType && (
            <StyledWriteButton
              tone={theme.colors.gradientGoldBottom}
              onClick={() => setWriting((prev) => !prev)}
            >
              Write
            </StyledWriteButton>
          )}
        </Container>
      ) : (
        <Container
          css={css`
            width: 100%;
            align-items: center;
          `}
        >
          <BoardEditor writing={() => setWriting((prev) => !prev)} />
        </Container>
      )}
    </>
  );
}
