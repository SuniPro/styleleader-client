/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CollectionView } from "../components/Brand/CollectionView";
import { HistoryView } from "../components/Brand/HistoryView";

export function Brand() {
  return (
    <main
      css={css`
        width: 100%;
      `}
    >
      <HistoryView />;
      <CollectionView />;
    </main>
  );
}
