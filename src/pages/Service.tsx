/** @jsxImportSource @emotion/react */
import { PageContainer } from "../components/layouts/PageLayouts";
import { ReadyBanner } from "../components/Empty/ReadyBanner";
import { css } from "@emotion/react";

export function Service() {
  return (
    <PageContainer
      css={css`
        align-items: center;
      `}
    >
      <ReadyBanner
        title="서비스 기능은 아직 준비중입니다"
        description="AS 및 구매 문의는 전화 (02-2235-3573) 로 부탁드립니다."
      />
    </PageContainer>
  );
}
