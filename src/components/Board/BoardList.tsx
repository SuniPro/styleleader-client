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
import { BoardEditor } from "./BoardEditor";

const announcementDummy = [
  {
    boardId: 1,
    writer: "nana",
    title: "test입니다.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "announcement",
    important: true,
    insertDate: "2023.03.03",
    insertId: "NaNa",
    updateDate: null,
    updateId: null,
  },
  {
    boardId: 2,
    writer: "nana",
    title: "test입니다.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "announcement",
    important: false,
    insertDate: "2023.03.03",
    insertId: "NaNa",
    updateDate: null,
    updateId: null,
  },
  {
    boardId: 3,
    writer: "nana",
    title: "test입니다.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "announcement",
    important: false,
    insertDate: "2023.03.03",
    insertId: "NaNa",
    updateDate: null,
    updateId: null,
  },
  {
    boardId: 4,
    writer: "nana",
    title: "test입니다.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "announcement",
    important: false,
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
