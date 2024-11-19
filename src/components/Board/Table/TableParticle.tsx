import { flexRender } from "@tanstack/react-table";
import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { uid } from "uid";

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

export function TableCell(props: {
  getValue: any;
  row: any;
  column: any;
  table: any;
}) {
  const { getValue, row, column, table } = props;
  const initialValue = getValue();
  const columnMeta = column.columnDef.meta;
  const tableMeta = table.options.meta;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    tableMeta?.updateData(row.index, column.id, value, row.original);
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    tableMeta?.updateData(row.index, column.id, e.target.value);
  };

  if (tableMeta?.editedRows[row.id]) {
    return columnMeta?.type === "select" ? (
      <select onChange={onSelectChange} value={initialValue}>
        {columnMeta?.options?.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        // style={{width: "80%"}}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        type={columnMeta?.type || "text"}
      />
    );
  }
  return <span>{value}</span>;
}

interface PageNationProps {
  table: any | null;
  contents: any;
  pageIndexWriter: (index: number) => void;
  pageSizeWriter: (size: number) => void;
  pageSize: number;
  pageIndex: number;
}

export function PageNation(props: PageNationProps) {
  // const [dataLength, setDataLength] = useState(props.contents);
  const [pageSize, setPageSize] = useState<number>(props.pageSize);
  const [pageIndex, setPageIndex] = useState<number>(props.pageIndex);

  const [totalPages, setTotalPages] = useState<number>(props.pageSize);

  const pageArrayChecker = (pageSizeParam: number) => {
    let totalCountFromHeader = parseInt(props.contents, 10);

    let pageReturnCheck = totalCountFromHeader % pageSizeParam === 0;

    if (pageReturnCheck === true) {
      setTotalPages(Math.ceil(totalCountFromHeader / pageSizeParam));
    } else {
      setTotalPages(Math.floor(totalCountFromHeader / pageSizeParam) + 1);
    }
  };

  useEffect(() => {
    setPageIndex(props.pageIndex);
    setPageSize(props.pageSize);
  }, [props.pageIndex, props.pageSize]);

  useEffect(() => {
    pageArrayChecker(props.pageSize);
  }, [props.pageSize, props.contents]);

  const handlePageClick = (pageNumber: number) => {
    setPageIndex(pageNumber);
    props.pageIndexWriter(pageNumber);
  };

  const handleSizeClick = (pageSize: number) => {
    props.table.setPageSize(pageSize);
    props.pageSizeWriter(pageSize);
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
        <div className={"page-size-contents"}>
          <div className={"total-count"}>전체 : {props.contents} 건</div>
          <div className={"page-list"}>
            {[...Array(totalPages)].map((_, i) => {
              return (
                <li
                  className={pageIndex === i + 1 ? "on" : ""}
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
