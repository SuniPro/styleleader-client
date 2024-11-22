/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import { deleteDisplayAsset } from "../../api/admin";
import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  ColumnResizeMode,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { adminDeleteConfirm } from "../../alert/alert";
import { DisplayAssets } from "../../model/Display";
import { css } from "@emotion/react";
import {
  Container,
  IconFuncButton,
  PageContainer,
  StyledWriteButton,
  TableContainer,
  TableIconButtonCase,
  TableTitle,
} from "../layouts";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Spinner } from "../Spinner";
import { ReadyBanner } from "../Empty/ReadyBanner";
import {
  generateNumberArray,
  PageNation,
  TableBody,
  TableHeader,
} from "../Board/Table/TableParticle";
import { Modal, SvgIconTypeMap } from "@mui/material";
import theme from "../../styles/theme";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import styled from "@emotion/styled";
import { getCollections } from "../../api/collections";
import { Collection } from "../../model/Collection";
import { ManageModal } from "./display/modal";

export function BrandCollection() {
  const { data: list } = useQuery({
    queryKey: ["getCollections"],
    queryFn: () => getCollections(),
    refetchInterval: 3000, // Options 객체로 refetchInterval 설정
  });

  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");
  const [activeId, setActiveId] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);

  const deleteHandler = async (id: number) => {
    adminDeleteConfirm(() => deleteDisplayAsset(id));
  };

  const columns = useMemo<ColumnDef<DisplayAssets>[]>(
    () => [
      {
        id: "id",
        header: "ID",
        size: 100,
        accessorKey: "id",
        cell: ({ row }) => {
          return (
            <span
              css={css`
                width: 10px;
                height: 10px;
              `}
            >
              {row.getValue<number>("id")}
            </span>
          );
        },
      },
      {
        id: "image",
        header: "이미지",
        accessorKey: "image",
        cell: ({ row }) => (
          <div
            css={css`
              width: 100px;
              height: 100px;
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background-image: url(${row.getValue<string>("image")});
                background-size: cover;
                background-position: center;
                width: 100%;
                height: 100%;
              `}
            />
          </div>
        ),
        size: 100,
      },
      {
        id: "category",
        header: "카테고리",
        accessorKey: "category",
        cell: ({ row }) => (
          <TableTitle>{row.getValue<string>("title")}</TableTitle>
        ),
        size: 200,
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
      {
        id: "link",
        header: "링크",
        accessorKey: "description",
        cell: ({ row }) => (
          <BasicLinkButton
            func={() => window.open(row.getValue<string>("link"))}
            icon={OpenInBrowserIcon}
          />
        ),
        size: 50,
      },
      {
        id: "func",
        header: "기능",
        cell: ({ row }) => (
          <TableIconButtonCase>
            <IconFuncButton
              icon={EditIcon}
              func={() => {
                setIsAdd(false);
                setActiveId(row.original.id);
                setOpen(true);
              }}
              css={css`
                padding: 0;
              `}
            />
            <IconFuncButton
              icon={DeleteIcon}
              func={() => {
                deleteHandler(row.original.id);
              }}
              css={css`
                padding: 0;
              `}
            />
          </TableIconButtonCase>
        ),
        size: 50,
      },
    ],
    [],
  );

  const table = useReactTable<DisplayAssets>({
    data: list ?? [],
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  if (!list) {
    return <Spinner />;
  }

  if (list.length === 0) {
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
    <Container
      css={css`
        align-items: flex-end;
        width: 90%;
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        children={
          <ManageModal
            catalog={list.find((item) => item.id === activeId) as Collection}
            close={() => setOpen(false)}
            isAdd={isAdd}
          />
        }
      />
      <div
        css={css`
          margin-top: 2rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: space-around;
        `}
        className="flex items-center gap-2"
      >
        <span className="flex items-center gap-1">
          <input
            css={css`
              color: white;
              border-radius: 6px;
              background-color: rgba(0, 0, 0, 0);
              border: 1px solid ${theme.colors.gold};
            `}
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            className="border p-1 rounded w-16"
            onChange={(e) => setPageIndex(parseInt(e.target.value))}
          />
          <button onClick={() => table.setPageIndex(pageIndex)}>이동</button>
        </span>
        <button
          className="border rounded p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>

        <span className="flex items-center gap-1">
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 5px;
              font-family: ${theme.fontStyle.archivo};
            `}
          >
            {generateNumberArray(table.getPageCount()).map((index) => {
              return (
                <li
                  css={css`
                    padding: 2px;
                  `}
                  onClick={() => table.setPageIndex(index - 1)}
                >
                  {index}
                </li>
              );
            })}
          </div>
          {/*<strong>*/}
          {/*  {table.getState().pagination.pageIndex + 1} of{" "}*/}
          {/*  {table.getPageCount().toLocaleString()}*/}
          {/*</strong>*/}
        </span>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/*<PageNation table={table} contents={list} pageSize={list.length} />*/}
      <StyledWriteButton
        onClick={() => {
          setOpen(true);
          setIsAdd(true);
        }}
        width={90}
        tone={theme.colors.gradientGoldBottom}
      >
        ADD
      </StyledWriteButton>
    </Container>
  );
}

export function BasicLinkButton(props: {
  className?: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  func: () => Window | null;
  text?: string;
}) {
  const { className, icon: Icon, func, text } = props;

  return (
    <ButtonWrapper onClick={func} className={className}>
      <Icon />
      <span>{text}</span>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;
