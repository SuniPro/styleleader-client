/** @jsxImportSource @emotion/react */
import {
  Container,
  IconFuncButton,
  PageContainer,
  StyledWriteButton,
  TableIconButtonCase,
  EllipsisCase,
} from "../../layouts";
import { useQuery } from "@tanstack/react-query";
import { deleteDisplayAsset, getDisplayAssets } from "../../../api/admin";
import React, { useMemo } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DisplayAssets } from "../../../model/Display";
import { css } from "@emotion/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { Spinner } from "../../Spinner";
import { ReadyBanner } from "../../empty/ReadyBanner";
import { Pagination } from "../../Board/Table/TableParticle";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import { adminDeleteConfirm } from "../../../alert/alert";
import { useManagementModel } from "../hooks";
import { DisplayManageTable } from "../service/serviceManage";

export function BrandCatalog() {
  const { data: list } = useQuery({
    queryKey: ["getList"],
    queryFn: () => getDisplayAssets(),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  const { modalState, columnResizeMode, funcState, activeIdState } =
    useManagementModel();
  const { isOpen, open, close } = modalState;
  const { funcType, addOn, editOn } = funcState;
  const { activeId, setActiveId } = activeIdState;

  const deleteHandler = async (id: number) => {
    adminDeleteConfirm(() => deleteDisplayAsset(id));
  };

  const columns = useMemo<ColumnDef<DisplayAssets>[]>(
    () => [
      {
        id: "id",
        header: "번호",
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
        id: "title",
        header: "제목",
        accessorKey: "title",
        cell: ({ row }) => (
          <EllipsisCase
            text={row.getValue<string>("title")}
            textAlign="center"
          />
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
                editOn();
                setActiveId(row.original.id);
                open();
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
    [editOn, open, setActiveId],
  );

  const brandCatalog = useMemo(
    () => list?.filter((catalog) => catalog.category === "catalog") ?? [],
    [list],
  );

  const table = useReactTable<DisplayAssets>({
    data: brandCatalog ?? [],
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  if (!brandCatalog) {
    return <Spinner />;
  }

  if (brandCatalog.length === 0) {
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
      <DisplayManageTable
        close={close}
        columnResizeMode={columnResizeMode}
        displayAsset={
          brandCatalog.find((catalog) => catalog.id === activeId)
            ? brandCatalog.find((catalog) => catalog.id === activeId)!
            : brandCatalog.find((catalog) => catalog.id)!
        }
        table={table}
        isOpen={isOpen}
        funcType={funcType}
      />
      <Pagination table={table} />
      <StyledWriteButton
        onClick={() => {
          addOn();
          open();
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
