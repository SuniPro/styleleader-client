/** @jsxImportSource @emotion/react */
import { PageContainer } from "../components/layouts";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { css } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";

interface activeState {
  activeId: string;
  setActiveId: (activeId: string) => void;
}

const MANAGE_FUNCTION = [
  {
    id: "brand Catalog",
    locate: "catalog",
  },
  {
    id: "display Collection",
    locate: "showcase",
  },
  {
    id: "brand Collection",
    locate: "collection",
  },
  {
    id: "service Manual",
    locate: "manual",
  },
  {
    id: "service Qna",
    locate: "questions",
  },
  {
    id: "service As",
    locate: "request",
  },
];

export function Management() {
  const [activeId, setActiveId] = useState<string>("brand Catalog");
  const navigate = useNavigate();

  useEffect(() => {
    const locate = MANAGE_FUNCTION.find((func) => func.id === activeId)?.locate;
    navigate(locate!);
  }, [activeId, navigate]);

  return (
    <PageContainer
      css={css`
        gap: 40px;
      `}
    >
      <SectionWrapper>
        <CheckBoxContainer>
          {MANAGE_FUNCTION.map((func) => (
            <StyledCheckBox
              key={func.id}
              title={func.id}
              activeState={{ activeId, setActiveId }}
            />
          ))}
        </CheckBoxContainer>
      </SectionWrapper>
      <Outlet />
    </PageContainer>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 20px;
`;

export function StyledCheckBox(props: {
  title: string;
  activeState: activeState;
}) {
  const { title, activeState } = props;
  const { activeId, setActiveId } = activeState;

  return (
    <CheckBox
      isActive={activeId === title}
      onClick={() => {
        setActiveId(title);
      }}
    >
      <label>{title}</label>
    </CheckBox>
  );
}

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const CheckBox = styled.div<{ isActive: boolean }>(
  ({ isActive }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 10px;
    height: 40px;
    color: ${isActive ? theme.colors.gold : theme.colors.gray};
    font-weight: bold;
    font-size: 15px;
    font-family: ${theme.fontStyle.archivo};
    text-transform: uppercase;

    transition: all 300ms ease;
  `,
);
