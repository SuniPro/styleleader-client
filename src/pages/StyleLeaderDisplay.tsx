/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {
  BrandCatalogAssets,
  BrandListView,
  CollectionListView,
} from "../components/carouselContents/Advertisement";
import styled from "@emotion/styled";
import { CardContents, CardFeed } from "../components/Board/DisplayBoard";
import { css } from "@emotion/react";
import { uid } from "uid";
import { Box, Modal, Typography } from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { getBoardList } from "../api/boards";
import { Spinner } from "../components/Spinner";
import { BasicModalBoxStyle } from "../components/layouts";
import { getDisplayAssets } from "../api/admin";

export function StyleLeaderDisplay() {
  const [open, setOpen] = useState(true);
  const { data: boardList } = useQuery({
    queryKey: ["getBoardList"],
    queryFn: () => getBoardList(),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  const { data: displayAssets } = useQuery({
    queryKey: ["getList"],
    queryFn: () => getDisplayAssets(),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  if (!boardList || !displayAssets) {
    return <Spinner />;
  }

  const filteredBoardList = boardList.filter((contents) => contents.important);

  const catalog = displayAssets.filter((data) => data.category === "catalog");
  const collection = displayAssets.filter(
    (data) => data.category === "collection",
  );

  return (
    <StyleLeaderDisplaySection>
      <BrandCatalogAssets key="catalog" catalog={catalog} />
      <BrandListView key="brandList" />
      <CollectionListView key="collectionList" collection={collection} />
      <div
        css={css`
          width: 100vw;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: "Montserrat", sans-serif;
        `}
      >
        <CardFeed cardLength={filteredBoardList.length}>
          {filteredBoardList.map((feed) => (
            <CardContents
              key={`i ${uid()}`}
              title={feed.title}
              content={feed.content}
            />
          ))}
        </CardFeed>
      </div>
      {filteredBoardList.map((item, index) => (
        <Modal
          key={index}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          children={NoticeModal(item.content)}
        />
      ))}
    </StyleLeaderDisplaySection>
  );
}

function NoticeModal(content: string) {
  return (
    <Box sx={BasicModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
    </Box>
  );
}

const StyleLeaderDisplaySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 80px;
`;
