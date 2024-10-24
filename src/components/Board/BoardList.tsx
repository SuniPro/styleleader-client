/** @jsxImportSource @emotion/react */
import { TableHeader, TableBody } from "./Table/TableParticle";
import {
  useReactTable,
  ColumnDef,
  getPaginationRowModel,
  getCoreRowModel,
  ColumnResizeMode,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { AnnouncementType } from "../../model/Board";
import styled from "@emotion/styled";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button } from "@mui/material";
import { css } from "@emotion/react";
import { Container } from "../layouts/LayoutLayer";
import { BoardEditor } from "./BoardEditor";
import { useQuery } from "@tanstack/react-query";
import { getBoardList } from "../../api/boards";
import { iso8601ToYYMMDDHHMM } from "../../utils/dateApi";

export function BoardList() {
  const { data: boardList } = useQuery({
    queryKey: ["getBoardList"],
    queryFn: () => getBoardList(),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  const [writing, setWriting] = useState<boolean>(true);

  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");

  const columns = React.useMemo<ColumnDef<AnnouncementType>[]>(
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
          <TableTitle>{row.getValue<string>("title")}</TableTitle>
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
    [boardList],
  );

  const table = useReactTable<AnnouncementType>({
    data: boardList ?? [],
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <>
      {writing ? (
        <Container
          css={css`
            align-items: flex-end;
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
          <StyledWriteButton onClick={() => setWriting((prev) => !prev)}>
            Write
          </StyledWriteButton>
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

const TableContainer = styled.table`
  border-spacing: 0;
`;

const TableTitle = styled.p`
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledWriteButton = styled(Button)(
  () => css`
    margin-top: 20px;
    background: linear-gradient(to bottom, #d7bc6a, #ffe9a6);
    color: #000000;
    right: 0;
  `,
);
