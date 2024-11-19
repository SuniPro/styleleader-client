/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { MainTitle, PageContainer } from "../components/layouts";
import { ServiceContentsAsset } from "../assets/contents/service/ServiceContents";
import { ServiceContents } from "../model/Service";
import { Spinner } from "../components/Spinner";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import theme from "../styles/theme";

export function Faq() {
  const service = ServiceContentsAsset.find(
    (service) => service.slug === "faq",
  );
  if (!service) return <Spinner />;
  return (
    <PageContainer width={80}>
      <MainTitle
        css={css`
          margin-bottom: 2rem;
        `}
      >
        FAQ
      </MainTitle>
      <div
        css={css`
          display: grid;
          gap: 10px;
          width: 100%;
          grid-template-columns: 1fr 1fr;
        `}
      >
        {service.services
          .filter((service) => !service.name.includes("FAQ 더보기"))
          .map((contents, index) => (
            <BlogCard service={contents} key={index} />
          ))}
      </div>
    </PageContainer>
  );
}

function BlogCard(props: { service: ServiceContents }) {
  const { service } = props;
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <CardContainer
      onClick={flip}
      onMouseLeave={() => setFlipped(false)}
      onMouseEnter={() => setFlipped(true)}
      className={`card-container ${flipped ? " flipped" : ""}`}
    >
      <Front flipped={flipped} service={service}></Front>
      <Back flipped={flipped} service={service}></Back>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: 200px;
  padding: 0;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  box-sizing: border-box;

  &.flipped {
    .front {
      transform: rotateX(180deg);
    }
    .back {
      transform: rotateX(0deg);
    }
  }

  .front {
    z-index: 2;
    transform: rotateX(0deg);
    /* front tile styles go here! */
  }
  .back {
    background: $new-white;
    transform: rotateX(-180deg);
    padding: 20px;
    /* back tile styles go here! */
  }
`;

function Front(props: { service: ServiceContents; flipped: boolean }) {
  const { service, flipped } = props;
  return (
    <Card className="front" flipped={flipped}>
      <div className="main-area">
        <div className="blog-post">
          {/*<p className="date">{new Date().toLocaleDateString()}</p>*/}
          <p
            className="blog-content"
            css={css`
              font-size: 22px;
              font-weight: bold;
              color: ${theme.colors.gold};
            `}
          >
            {service.name}
          </p>
          <p className="read-more">Q. {service.description}</p>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div<{ flipped: boolean }>(
  ({ flipped }) => css`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 0 0 0 30px;
    position: absolute;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: -webkit-transform ease 500ms;
    transition: transform ease 500ms;
    border: 2px solid ${theme.colors.basicBlack};

    border-radius: 10px;

    display: flex;
    align-items: center;

    font-family: ${theme.fontStyle.montserrat};
  `,
);

function Back(props: { service: ServiceContents; flipped: boolean }) {
  const { service, flipped } = props;
  return (
    <Card
      className="back"
      flipped={flipped}
      css={css`
        font-size: 14px;
      `}
    >
      A.
      {service.contents.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
          <br />
        </React.Fragment>
      ))}
    </Card>
  );
}
