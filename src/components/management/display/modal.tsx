import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DisplayAssets } from "../../../model/Display";
import { addDisplayAsset, editDisplayAsset } from "../../../api/admin";
import { error, success } from "../../../alert/alert";
import { AdminManageModalBoxStyle, StyledWriteButton } from "../../layouts";
import theme from "../../../styles/theme";

export function ManageModal(props: {
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
      category: "collection",
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
        <StyledSpan>
          수정 중 모든 값을 지우면 자동으로 초기값으로 돌아갑니다.
        </StyledSpan>
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
          <ButtonCase>
            <StyledWriteButton
              width={150}
              onClick={close}
              textColor={theme.colors.white}
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
          </ButtonCase>
        </ObjectContainer>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
    </Box>
  );
}

function getImageName(imagePath: string): string {
  const match = imagePath.match(/collection\/(.+)/);
  return match ? match[1] : ""; // "catalog/" 이후의 문자열 반환
}

const StyledSpan = styled.span`
  font-size: 13px;
  color: ${theme.colors.secondary};
`;

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

const ButtonCase = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;
