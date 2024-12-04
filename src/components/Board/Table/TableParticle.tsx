import { flexRender, Table } from "@tanstack/react-table";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { uid } from "uid";
import { DisplayAssets } from "../../../model/Display";
import { IconFuncButton } from "../../layouts";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import theme from "../../../styles/theme";
import { useHorizontalScroll } from "../../../hooks/useWheel";

export function generateNumberArray(upTo: number): number[] {
  if (upTo < 1) {
    throw new Error("Input must be greater than or equal to 1.");
  }
  return Array.from({ length: upTo }, (_, index) => index + 1);
}

export function TableHeader(props: {
  table: any;
  columnResizeMode: any;
  headerBorder?: string;
}) {
  const { table, columnResizeMode, headerBorder } = props;

  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup: any) => (
        <TableHeaderTr border={headerBorder} key={uid()}>
          {headerGroup.headers.map((header: any) => (
            <TableHeaderTh
              key={header.id}
              {...{
                colSpan: header.colSpan,
                style: {
                  position: "relative",
                  width: header.getSize(),
                },
              }}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              <div
                {...{
                  onMouseDown: header.getResizeHandler(),
                  onTouchStart: header.getResizeHandler(),
                  className: `resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`,
                  style: {
                    transform:
                      columnResizeMode === "onEnd" &&
                      header.column.getIsResizing()
                        ? `translateX(${
                            table.getState().columnSizingInfo.deltaOffset
                          }px)`
                        : "",
                  },
                }}
              />
            </TableHeaderTh>
          ))}
        </TableHeaderTr>
      ))}
    </thead>
  );
}

export function TableBody(props: { table: any }) {
  const { table } = props;

  return (
    <tbody>
      {table.getRowModel().rows.map((row: any) => (
        <TableBodyTr key={row.id}>
          {row.getVisibleCells().map((cell: any) => {
            const originalId = cell.id; // 예시로 주어진 문자열
            const modifiedId = originalId.replace(/^[0-9]+_/, ""); // 숫자로 시작하는 모든 접두사를 제거한 문자열
            return (
              <td
                key={`${row.id}-${cell.id}`}
                id={modifiedId}
                {...{
                  style: {
                    width: cell.column.getSize(),
                  },
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            );
          })}
        </TableBodyTr>
      ))}
    </tbody>
  );
}

type Option = {
  label: string;
  value: string;
};

interface PageNationProps {
  table: Table<DisplayAssets>;
  contents: any;
  pageSize: number;
}

export function PageNation(props: PageNationProps) {
  const { table, contents, pageSize } = props;

  const [totalPages, setTotalPages] = useState<number>(pageSize);

  const pageArrayChecker = (pageSizeParam: number) => {
    let totalCountFromHeader = parseInt(props.contents, 10);

    let pageReturnCheck = totalCountFromHeader % pageSizeParam === 0;

    if (pageReturnCheck) {
      setTotalPages(Math.ceil(totalCountFromHeader / pageSizeParam));
    } else {
      setTotalPages(Math.floor(totalCountFromHeader / pageSizeParam) + 1);
    }
  };

  useEffect(() => {
    pageArrayChecker(pageSize);
  }, [pageSize, contents, pageArrayChecker]);

  const handlePageClick = (pageNumber: number) => {
    table.setPageIndex(pageNumber);
  };

  const handleSizeClick = (pageSize: number) => {
    table.setPageSize(pageSize);
  };

  return (
    <>
      <div className="pagination-wrapper">
        <ul className="pg-unit">
          {[10, 20, 50, 100].map((pageSize) => (
            <li
              key={pageSize}
              className={
                pageSize === props.table.getState().pagination.pageSize
                  ? "on"
                  : ""
              }
              onClick={() => handleSizeClick(pageSize)}
            >
              {pageSize}
            </li>
          ))}
        </ul>
        <div className="page-size-contents">
          <div className="total-count">전체 : {props.contents} 건</div>
          <div className="page-list">
            {contents.map((item: any, i: number) => {
              return (
                <li
                  className={""}
                  key={i + 1}
                  onClick={() => handlePageClick(i + 1)}
                >
                  {i + 1}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const TableHeaderTr = styled.tr<{ border?: string }>(
  ({ border }) => css`
    td,
    th {
      border-bottom: ${border}; /* 하단에 border 추가 */
      padding-bottom: 16px;
    }
  `,
);

const TableHeaderTh = styled.th`
  padding: 8px 0 9px 0;
  height: 14px;
`;

const TableBodyTr = styled.tr`
  font-size: 16px;
  font-family: Roboto, sans-serif;
  text-align: center;

  td p {
    max-width: 800px;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export function Pagination(props: { table: Table<any> }) {
  const { table } = props;
  const pageListAreaRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(pageListAreaRef);

  return (
    <PageNationWrapper>
      <PageNationContainer>
        <PaginationButtonCase>
          <IconFuncButton
            func={() => table.firstPage()}
            disable={!table.getCanPreviousPage()}
            icon={KeyboardDoubleArrowLeftIcon}
          />
          <IconFuncButton
            func={() => table.previousPage()}
            disable={!table.getCanPreviousPage()}
            icon={ArrowBackIosNewIcon}
          />
        </PaginationButtonCase>
        <span>
          <PageListArea ref={pageListAreaRef}>
            {generateNumberArray(table.getPageCount()).map((index) => {
              return (
                <PageList
                  key={index}
                  onClick={() => {
                    table.setPageIndex(index - 1);
                  }}
                  isActive={table.getState().pagination.pageIndex === index - 1}
                >
                  {index}
                </PageList>
              );
            })}
          </PageListArea>
          {/*<strong>*/}
          {/*  {table.getState().pagination.pageIndex + 1} of{" "}*/}
          {/*  {table.getPageCount().toLocaleString()}*/}
          {/*</strong>*/}
        </span>
        <PaginationButtonCase>
          <IconFuncButton
            func={() => table.nextPage()}
            disable={!table.getCanNextPage()}
            icon={ArrowForwardIosIcon}
          />
          <IconFuncButton
            func={() => table.lastPage()}
            disable={!table.getCanNextPage()}
            icon={KeyboardDoubleArrowRightIcon}
          />
        </PaginationButtonCase>
      </PageNationContainer>
      {/*<span className="flex items-center gap-1">*/}
      {/*  <input*/}
      {/*    css={css`*/}
      {/*      color: white;*/}
      {/*      border-radius: 6px;*/}
      {/*      background-color: rgba(0, 0, 0, 0);*/}
      {/*      border: 1px solid ${theme.colors.gold};*/}
      {/*    `}*/}
      {/*    max={table.getPageCount()}*/}
      {/*    defaultValue={table.getState().pagination.pageIndex + 1}*/}
      {/*    className="border p-1 rounded w-16"*/}
      {/*    onChange={(e) => setPageIndex(parseInt(e.target.value))}*/}
      {/*  />*/}
      {/*  <button onClick={() => table.setPageIndex(pageIndex)}>이동</button>*/}
      {/*</span>*/}
      <PageViewSelector
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
      </PageViewSelector>
    </PageNationWrapper>
  );
}

export const PageNationWrapper = styled.section`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  font-family: ${theme.fontStyle.archivo};
`;

export const PageNationContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-around;
  width: 40%;
`;

export const PaginationButtonCase = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const PageList = styled.li<{ isActive: boolean }>(
  ({ isActive }) => css`
    cursor: pointer;
    color: ${isActive ? theme.colors.gold : theme.colors.white};
    padding: 2px;
  `,
);

export const PageListArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 200px;
  overflow-x: scroll;
`;

export const PageViewSelector = styled.select`
  border-color: ${theme.colors.basicBlack};
  background-color: rgba(0, 0, 0, 0);
  padding-left: 8px;
  color: white;
  width: 60px;
  height: 30px;
  border-radius: 10px;
  font-family: ${theme.fontStyle.archivo};
`;
