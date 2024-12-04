/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import {
  deleteServiceContent,
  getServiceCategoryList,
} from "../../../api/serviceCategory";
import React, { useMemo } from "react";
import { ServiceCategory, ServiceContents } from "../../../model/Service";
import { useManagementModel } from "../hooks";
import { adminDeleteConfirm } from "../../../alert/alert";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { css } from "@emotion/react";
import {
  Container,
  EllipsisCase,
  IconFuncButton,
  PageContainer,
  StyledWriteButton,
  TableIconButtonCase,
} from "../../layouts";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Spinner } from "../../Spinner";
import { ReadyBanner } from "../../empty/ReadyBanner";
import theme from "../../../styles/theme";
import { Pagination } from "../../Board/Table/TableParticle";
import { ServiceManageTable } from "./serviceManage";

export function QuestionAndAnswer() {
  const { data: categories } = useQuery({
    queryKey: ["getServiceCategoryList"],
    queryFn: () => getServiceCategoryList(),
    refetchInterval: 4000, // Options 객체로 refetchInterval 설정
  });

  const { modalState, columnResizeMode, funcState, activeIdState } =
    useManagementModel();
  const { isOpen, open, close } = modalState;
  const { funcType, addOn, editOn } = funcState;
  const { activeId, setActiveId } = activeIdState;

  const deleteHandler = async (id: number) => {
    adminDeleteConfirm(() => deleteServiceContent(id));
  };

  const columns = useMemo<ColumnDef<ServiceContents>[]>(
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
        id: "name",
        header: "서비스 명",
        accessorKey: "name",
        cell: ({ row }) => (
          <EllipsisCase
            css={css`
              padding: 20px 0;
            `}
            width={300}
            text={row.getValue<string>("name")}
            textAlign="center"
          />
        ),
        size: 200,
      },
      {
        id: "description",
        header: "참고",
        accessorKey: "description",
        cell: ({ row }) => (
          <EllipsisCase
            width={400}
            text={row.getValue<string>("description")}
            textAlign="center"
          />
        ),
        size: 400,
      },
      {
        id: "contents",
        header: "서비스",
        accessorKey: "contents",
        cell: ({ row }) => (
          <EllipsisCase
            width={400}
            text={row.getValue<string>("contents")}
            textAlign="center"
          />
        ),
        size: 400,
      },
      {
        id: "func",
        header: "기능",
        cell: ({ row }) => (
          <TableIconButtonCase>
            <IconFuncButton
              icon={EditIcon}
              func={() => {
                console.log("row.original.id", row.original.id);
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
    [deleteHandler, editOn, open, setActiveId],
  );

  const faqOfServiceCategory: ServiceCategory | undefined = categories?.find(
    (catalog) => catalog.name === "FAQ",
  );

  const table = useReactTable<ServiceContents>({
    data: faqOfServiceCategory?.services ?? [],
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  if (!faqOfServiceCategory) {
    return <Spinner />;
  }

  if (faqOfServiceCategory.services.length === 0) {
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

  const services = faqOfServiceCategory.services;

  return (
    <Container
      css={css`
        width: 90%;
        align-items: flex-end;
      `}
    >
      <ServiceManageTable
        table={table}
        columnResizeMode={columnResizeMode}
        isOpen={isOpen}
        close={close}
        funcType={funcType}
        category={faqOfServiceCategory}
        service={
          services.find((content) => content.id === activeId)
            ? services.find((content) => content.id === activeId)!
            : services[0]
        }
      />
      <Pagination table={table} />
      <StyledWriteButton
        onClick={() => {
          open();
          addOn();
        }}
        width={90}
        tone={theme.colors.gradientGoldBottom}
      >
        ADD
      </StyledWriteButton>
    </Container>
  );
}
