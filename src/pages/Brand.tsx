/** @jsxImportSource @emotion/react */
import { PageContainer } from "../components/layouts/PageLayouts";
import { ReadyBanner } from "../components/Empty/ReadyBanner";
import { css } from "@emotion/react";
import { CollectionView } from "../components/Brand/CollectionView";
import { HistoryView } from "../components/Brand/HistoryView";

export function Brand() {
  return (
    <>
      <HistoryView />;{/*<CollectionView />;*/}
    </>
  );
}
