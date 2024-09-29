/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const STYLED_BUTTON_PADDING = 12;

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

  const buttonRef = useRef<HTMLButtonElement>(null);

  const buttonWidth =
    (buttonRef.current ? buttonRef.current.offsetWidth : 0) +
    STYLED_BUTTON_PADDING;

  return (
    <Link to={to}>
      <StyledButton
        ref={buttonRef}
        className={className}
        isActive={isActive}
        width={buttonWidth}
      >
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

const StyledButton = styled.button<{ isActive?: boolean; width?: number }>(
  ({ isActive, width }) => css`
    font-weight: bold;
    border: 0;
    font-size: 20px;
    background-color: rgb(255, 255, 255, 0);
    color: #ffffff;
    padding-bottom: 6px;
    position: relative;
    border-bottom: ${isActive ? "1px solid #d7bc6a" : "1px solid transparent"};
    transition:
      border-color 1s ease,
      border-width 1s ease;

    &:hover {
      border-bottom: 1px solid #d7bc6a;
    }
  `,
);
