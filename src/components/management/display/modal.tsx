/** @jsxImportSource @emotion/react */
import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DisplayAssets } from "../../../model/Display";
import { addDisplayAsset, editDisplayAsset } from "../../../api/admin";
import { error, success } from "../../../alert/alert";
import { AdminManageModalBoxStyle, StyledWriteButton } from "../../layouts";
import theme from "../../../styles/theme";
import { css } from "@emotion/react";
import { Collection } from "../../../model/Collection";
import { ServiceCategory, ServiceContents } from "../../../model/Service";
import {
  addServiceContent,
  editServiceContent,
} from "../../../api/serviceCategory";
import { addCollections, editCollections } from "../../../api/collections";

/** 본 파일의 함수들이 사용하는 타입들에서 string 요소만을 추출하기 위한 타입입니다. */
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export function Addendum() {
  return (
    <AddendumText>
      수정 중 모든 값을 지우면 자동으로 초기값으로 돌아갑니다.
    </AddendumText>
  );
}

const AddendumText = styled.span`
  font-size: 13px;
  color: ${theme.colors.secondary};
`;

export function DisplayManageModal(props: {
  displayAsset: DisplayAssets;
  close: () => void;
  funcType: boolean;
}) {
  const { displayAsset, close, funcType } = props;

  const attachment: DisplayAssets = { ...displayAsset };

  const saveHandler = async () => {
    const updatedData = {
      ...attachment,
      image: getImageName(attachment.image, displayAsset.category),
      category: displayAsset.category,
    };
    const apiFunction = funcType ? addDisplayAsset : editDisplayAsset;

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

  const handleChange = (key: StringKeys<DisplayAssets>, value: string) => {
    attachment[key] = value === "" ? (displayAsset[key] as string) : value;
  };

  return (
    <Box sx={AdminManageModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <Addendum />
        <ObjectContainer>
          <ObjectContentBox>
            {/* 변경가능한 값이 모두 string이며, 객체별로 input이 생겨야하가에 작성된 로직입니다.
              object keys 를 통해 key 별로 objectInput을 생성하는데, 타입이 string인 요소만 생성합니다.
              첫번째 구분에 타입단언이 들어간 이유는 defaultValue에 id와 같은 요소가 인입될 가능성에 의해 타입 에러가 발생하기 때문입니다. */}
            {(Object.keys(displayAsset) as StringKeys<DisplayAssets>[])
              .filter(
                (key) => typeof displayAsset[key] === "string", // string 타입이고 id가 아닌 것만 필터링
              )
              .map((key) => {
                return (
                  <ObjectInput
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize label
                    variant="standard"
                    defaultValue={
                      key === "image"
                        ? getImageName(displayAsset[key], displayAsset.category)
                        : displayAsset[key]
                    } // Default value from collection
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                );
              })}
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

export function CollectionManageModal(props: {
  collection: Collection;
  close: () => void;
  funcType: boolean;
}) {
  const { collection, close, funcType } = props;

  const attachment: Collection = { ...collection };

  const saveHandler = async () => {
    const updatedData = {
      ...attachment,
      image: getImageName(attachment.image, collection.brand),
    };

    const apiFunction = funcType ? addCollections : editCollections;

    try {
      const result = await apiFunction(updatedData);
      if (result) {
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

  const handleChange = (key: StringKeys<Collection>, value: string) => {
    attachment[key] = value === "" ? (collection[key] as string) : value;
  };

  return (
    <Box sx={AdminManageModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <Addendum />
        <ObjectContainer>
          <ObjectContentBox>
            {/* 변경가능한 값이 모두 string이며, 객체별로 input이 생겨야하가에 작성된 로직입니다.
              object keys 를 통해 key 별로 objectInput을 생성하는데, 타입이 string인 요소만 생성합니다.
              첫번째 구분에 타입단언이 들어간 이유는 defaultValue에 id와 같은 요소가 인입될 가능성에 의해 타입 에러가 발생하기 때문입니다. */}
            {(Object.keys(collection) as StringKeys<Collection>[])
              .filter(
                (key) => typeof collection[key] === "string", // string 타입이고 id가 아닌 것만 필터링
              )
              .map((key) => {
                return (
                  <ObjectInput
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize label
                    variant="standard"
                    defaultValue={
                      key === "image"
                        ? getImageName(
                            collection[key],
                            "collection/" + collection.brand,
                          )
                        : collection[key]
                    } // Default value from collection
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                );
              })}
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

export function CategoryManageModal(props: {
  category: ServiceCategory;
  service: ServiceContents;
  close: () => void;
  funcType: boolean;
}) {
  const { category, service, close, funcType } = props;

  const attachment: ServiceContents = { ...service };

  const saveHandler = async () => {
    const updatedAttachment = {
      ...attachment,
      categoryId: category.id,
      categoryName: category.name,
    };
    const apiFunction = funcType ? addServiceContent : editServiceContent;

    try {
      const result = await apiFunction(updatedAttachment);
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

  const handleChange = (key: StringKeys<ServiceContents>, value: string) => {
    attachment[key] = value === "" ? (service[key] as string) : value;
  };

  return (
    <Box sx={AdminManageModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <Addendum />
        <ObjectContainer>
          <ObjectContentBox>
            {/* 변경가능한 값이 모두 string이며, 객체별로 input이 생겨야하가에 작성된 로직입니다.
              object keys 를 통해 key 별로 objectInput을 생성하는데, 타입이 string인 요소만 생성합니다.
              첫번째 구분에 타입단언이 들어간 이유는 defaultValue에 id와 같은 요소가 인입될 가능성에 의해 타입 에러가 발생하기 때문입니다. */}
            {(Object.keys(service) as StringKeys<ServiceContents>[])
              .filter(
                (key) => typeof service[key] === "string", // string 타입이고 id가 아닌 것만 필터링
              )
              .map((key) => {
                return (
                  <ObjectInput
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize label
                    variant="standard"
                    defaultValue={service[key]} // Default value from collection
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                );
              })}
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

/** filter 인수를 받아 이미지 주소에서 필터링 후 반환합니다.
 * 현재 DB에 경로를 제외한 파일 이름만이 보관되어 있어 취한 방법입니다. */
export function getImageName(imagePath: string, filter: string): string {
  const escapedFilter = filter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // 특수문자 이스케이프
  const regex = new RegExp(`${escapedFilter}/(.+)`);
  const match = imagePath.match(regex);
  return match ? match[1] : ""; // `${filter}/` 이후의 문자열 반환
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

const ButtonCase = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;
