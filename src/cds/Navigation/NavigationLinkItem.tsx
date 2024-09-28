/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export function HeaderLinkItem(props: {
  className?: string;
  startIcon?: (isActive: boolean) => React.ReactNode;
  endIcon?: (isActive: boolean) => React.ReactNode;
  label: React.ReactNode;
  end?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  to: string;
}) {
  const { className, label, isActive = false, disabled, to } = props;

  return (
    <Link to={to}>
      <StyledButton className={className} isActive={isActive}>
        {label}
      </StyledButton>
    </Link>
  );
}

export function NavigationLinkItem(props: {
  className?: string;
  startIcon?: (isActive: boolean) => React.ReactNode;
  endIcon?: (isActive: boolean) => React.ReactNode;
  label: React.ReactNode;
  end?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  to: string;
}) {
  const { className, label, isActive = false, disabled, to } = props;

  return (
    <>
      <Link to={to}>
        <StyledButton className={className} isActive={isActive}>
          {label}
        </StyledButton>
      </Link>
    </>
  );
}

const StyledButton = styled.button<{ isActive?: boolean }>(
  ({ isActive }) => css`
    font-weight: bold;
    border: 0;
    font-size: 20px;
    background-color: rgb(255, 255, 255, 0);
    color: #ffffff;
    padding-bottom: 6px;
    border-bottom: ${isActive && "1px solid #d7bc6a"};
    // TODO 좌우로 사라짐 딜레이 한 0.5
    //transition: all 0.3s ease;
  `,
);
