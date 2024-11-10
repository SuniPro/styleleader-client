import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PageContainer = styled.div<{ width?: number }>(
  ({ width = 100 }) => css`
    width: ${width}%;
    color: white;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
);

export const SectionTitle = styled.h1<{ marginBottom?: number }>(
  ({ marginBottom }) => css`
    margin-bottom: ${marginBottom}px;
    font-family: Montserrat, sans-serif;
    font-size: 1.875rem;
    font-weight: bold;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    color: white;
  `,
);
