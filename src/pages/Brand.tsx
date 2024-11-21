/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TimeLineProcessY } from "../components/Brand/TimeLine";
import { PageContainer } from "../components/layouts";
import theme from "../styles/theme";
import { CollectionView } from "../components/Brand/CollectionView";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCollectionListOfBrand } from "../api/collections";
import { Spinner } from "../components/Spinner";
import styled from "@emotion/styled";
import { TripleTabMenu } from "../components/layouts/TabMenu";
import { HistoryDescription } from "../assets/Brand/History/HistoryDescription";
import { useScrollToTop } from "../hooks/useWheel";

const BRAND_LIST = ["fc", "doxa", "alpina"];

export function Brand() {
  useScrollToTop();

  const pageRef = useRef<HTMLDivElement>(null);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const { data: collectionList } = useQuery({
    queryKey: ["getCollectionListOfBrand"],
    queryFn: () => getCollectionListOfBrand(BRAND_LIST[selectedIndex]),
    refetchInterval: 10000,
  });

  if (!collectionList) return <Spinner />;

  return (
    <PageContainer
      ref={pageRef}
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 6rem;
      `}
    >
      <TripleTabMenu
        css={css`
          margin-bottom: 1rem;
        `}
        menuList={BRAND_LIST}
        activeState={{ selectedIndex, setSelectedIndex }}
      />
      <BrandWrapper>
        <BrandHistoryTitle>
          {HistoryDescription[selectedIndex].historyTitle}
        </BrandHistoryTitle>
        <BrandHitoryDescription>
          {HistoryDescription[selectedIndex].historyDate}
        </BrandHitoryDescription>
      </BrandWrapper>
      <TimeLineProcessY brand={HistoryDescription[selectedIndex]} />
      <CollectionWrapper>
        <CollectionSlogan>
          {HistoryDescription[selectedIndex].collectionSlogan}
        </CollectionSlogan>
        <CollectionDescription>
          {HistoryDescription[selectedIndex].collectionList}
        </CollectionDescription>
      </CollectionWrapper>
      <CollectionView collectionList={collectionList} />
    </PageContainer>
  );
}

const BrandWrapper = styled.div`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrandHistoryTitle = styled.h1`
  margin-bottom: 0;
`;

const BrandHitoryDescription = styled.h1`
  font-size: 60px;
  margin-top: 10px;
  background: ${theme.colors.gradientGoldBottom};
  color: transparent;
  -webkit-background-clip: text;
`;

const CollectionWrapper = styled.div`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CollectionSlogan = styled.h1`
  margin-bottom: 0;
`;

const CollectionDescription = styled.h1`
  font-size: 40px;
  margin-top: 10px;
  margin-bottom: 0;
  background: ${theme.colors.gradientGoldBottom};
  color: transparent;
  -webkit-background-clip: text;
`;
