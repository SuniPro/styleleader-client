import styled from "@emotion/styled";
import { Input } from "@mui/material";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UnderLineInput = styled(Input)<{
  underLineColor: string;
  isWrite?: boolean;
}>(
  ({ underLineColor, isWrite }) => css`
    padding-left: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    width: 100%;

    &:after {
      border-bottom-color: ${underLineColor};
    }
  `,
);
