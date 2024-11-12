/** @jsxImportSource @emotion/react */
import { PageContainer } from "../components/layouts";
import { AccordionCategory } from "../components/service/accordian";
import { css } from "@emotion/react";

export function Service() {
  return (
    <PageContainer
      css={css`
        margin-top: 1rem;
      `}
    >
      <AccordionCategory />
    </PageContainer>
  );
}
