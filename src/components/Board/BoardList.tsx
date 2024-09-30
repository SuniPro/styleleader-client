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

const announcementDummy = [
  {
    boardId: 1,
    writer: "nana",
    title:
      "사무실을 이전합니다. 서울시 강남구 강남대로 126길 26 (논현동 145-8) SL 빌딩 3층 스타일리더 고객센터",
    content:
      "사무실을 이전합니다. 서울시 강남구 강남대로 126길 26 (논현동 145-8) SL 빌딩 3층 스타일리더 고객센터",
    category: "announcement",
    important: true,
    insertDate: "2023.03.03",
    insertId: "NaNa",
    updateDate: null,
    updateId: null,
  },
];

export function BoardList() {
  const [data, setData] = useState<AnnouncementType[]>(announcementDummy);

  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>("onChange");

  const columns = React.useMemo<ColumnDef<AnnouncementType>[]>(
    () => [
      {
        id: "index",
        header: "번호",
        size: 100,
        minSize: 50,
        accessorKey: "boardId",
        cell: ({ row }) => {
          return (
            <>
              {row.original.important ? (
                <PriorityHighIcon color={"warning"} />
              ) : (
                row.original.boardId
              )}
            </>
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
        size: 150,
      },
    ],
    [data],
  );

  const table = useReactTable({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <TableContainer>
      <TableHeader
        table={table}
        headerBorder={"1px solid #ffffff"}
        columnResizeMode={columnResizeMode}
      ></TableHeader>
      <TableBody table={table}></TableBody>
    </TableContainer>
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
