/** @jsxImportSource @emotion/react */
import { PageContainer } from "../components/layouts/PageLayouts";
import { ReadyBanner } from "../components/Empty/ReadyBanner";
import { css } from "@emotion/react";
import { BoardEditor } from "../components/Board/BoardEditor";

export function Brand() {
  return (
    <PageContainer
      css={css`
        align-items: center;
      `}
    >
      <ReadyBanner
        title="브랜드"
        description="AS 및 구매 문의는 전화 (02-2235-3573) 로 부탁드립니다."
      />

      <BoardEditor></BoardEditor>
    </PageContainer>
  );
}
