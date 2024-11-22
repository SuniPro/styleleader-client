/** @jsxImportSource @emotion/react */
import {
  Container,
  IconFuncButton,
  PageContainer,
  TableContainer,
  TableTitle,
  AdminManageModalBoxStyle,
  StyledWriteButton,
  TableIconButtonCase,
} from "../../layouts";
import { useQuery } from "@tanstack/react-query";
import {
  addDisplayAsset,
  deleteDisplayAsset,
  editDisplayAsset,
  getDisplayAssets,
} from "../../../api/admin";
import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  ColumnResizeMode,
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
import { ReadyBanner } from "../../Empty/ReadyBanner";
import { TableBody, TableHeader } from "../../Board/Table/TableParticle";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  Box,
  Modal,
  SvgIconTypeMap,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import { adminDeleteConfirm, error, success } from "../../../alert/alert";

export function BrandCatalog() {
  const { data: list } = useQuery({
    queryKey: ["getList"],
    queryFn: () => getDisplayAssets(),
    refetchInterval: 3000, // Options 객체로 refetchInterval 설정
  });

  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");
  const [activeId, setActiveId] = useState<number>(0);

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

  const brandCatalog = list?.filter(
    (catalog) => catalog.category === "catalog",
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
            catalog={
              brandCatalog.find((item) => item.id === activeId) as DisplayAssets
            }
            close={() => setOpen(false)}
            isAdd={isAdd}
          />
        }
      />
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

function ManageModal(props: {
  catalog: DisplayAssets;
  close: () => void;
  isAdd: boolean;
}) {
  const { catalog, close, isAdd } = props;
  const [data, setData] = useState<DisplayAssets>(catalog);

  const saveHandler = async () => {
    const updatedData = {
      ...data,
      image: getImageName(data.image),
      category: "catalog",
    };
    const apiFunction = isAdd ? addDisplayAsset : editDisplayAsset;

    try {
      const result = await apiFunction(updatedData);
      if (result.id) {
        success("저장 완료");
      } else {
        error("저장 실패", "서버 오류가 발생했습니다.");
      }
    } catch {
      error("수정실패", "서버 연결을 확인해주세요.");
    } finally {
      close(); // 항상 한 번만 호출
    }
  };

  return (
    <Box sx={AdminManageModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <span
          css={css`
            font-size: 13px;
            color: ${theme.colors.secondary};
          `}
        >
          수정 중 모든 값을 지우면 자동으로 초기값으로 돌아갑니다.
        </span>
        <ObjectContainer>
          <ObjectContentBox>
            <ObjectInput
              onChange={(e) => {
                const value = e.target.value;
                setData((prev) => ({
                  ...prev,
                  image: value === "" ? catalog.image : value,
                }));
              }}
              label="이미지"
              variant="standard"
            />
            <ObjectInput
              onChange={(e) => {
                const value = e.target.value;
                setData((prev) => ({
                  ...prev,
                  title: value === "" ? catalog.title : value,
                }));
              }}
              label="모델명"
              variant="standard"
            />
            <ObjectInput
              onChange={(e) => {
                const value = e.target.value;
                setData((prev) => ({
                  ...prev,
                  description: value === "" ? catalog.description : value,
                }));
              }}
              label="링크"
              variant="standard"
            />
          </ObjectContentBox>
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-around;
              margin-top: 2rem;
            `}
          >
            <StyledWriteButton
              width={150}
              onClick={close}
              css={css`
                color: ${theme.colors.white};
              `}
              tone={theme.colors.gray}
            >
              CANCEL
            </StyledWriteButton>
            <StyledWriteButton
              width={150}
              tone={theme.colors.gradientGoldBottom}
              onClick={saveHandler}
            >
              SAVE
            </StyledWriteButton>
          </div>
        </ObjectContainer>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
    </Box>
  );
}

function getImageName(imagePath: string): string {
  const match = imagePath.match(/catalog\/(.+)/);
  return match ? match[1] : ""; // "catalog/" 이후의 문자열 반환
}

const ObjectContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;

  input,
  label {
    color: ${theme.colors.gray};
  }
`;
const ObjectContentBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;
const ObjectInput = styled(TextField)`
  margin: 8px 0;

  // Focus 되었을 시 라벨 컬러
  .Mui-focused {
    color: ${theme.colors.gold} !important;

    input {
      color: ${theme.colors.gold};
    }
  }

  // Disable underline
  .MuiInput-underline::before {
    border-bottom: 1px solid ${theme.colors.gray};
  }

  .css-5h82ro-MuiInputBase-root-MuiInput-root:hover:not(
      .Mui-disabled,
      .Mui-error
    ):before {
    border-bottom: 1px solid ${theme.colors.gray};
  }

  // active underline
  .css-5h82ro-MuiInputBase-root-MuiInput-root {
    &::after {
      border-bottom: 2px solid ${theme.colors.gold};
    }
  }
`;
