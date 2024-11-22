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
    id: "brandCatalog",
    locate: "catalog",
  },
  {
    id: "displayCollection",
    locate: "showcase",
  },
  {
    id: "brandCollection",
    locate: "collection",
  },
];

export function Management() {
  const [activeId, setActiveId] = useState<string>("brandCatalog");
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
        {MANAGE_FUNCTION.map((func) => (
          <StyledCheckBox
            key={func.id}
            title={func.id}
            activeState={{ activeId, setActiveId }}
          />
        ))}
      </SectionWrapper>
      <Outlet />
    </PageContainer>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
    <CheckBoxContainer
      isActive={activeId === title}
      onClick={() => {
        setActiveId(title);
      }}
    >
      <label>{title}</label>
    </CheckBoxContainer>
  );
}

const CheckBoxContainer = styled.div<{ isActive: boolean }>(
  ({ isActive }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 10px;
    height: 40px;
    color: ${isActive ? theme.colors.gold : theme.colors.gray};
    border: 1px solid ${isActive ? theme.colors.gold : theme.colors.gray};
    font-weight: bold;
    font-size: 15px;
    font-family: ${theme.fontStyle.archivo};
    text-transform: capitalize;

    transition: all 300ms ease;
  `,
);
