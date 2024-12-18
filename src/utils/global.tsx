import { css, Global } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "Montserrat";
    src: url("/src/assets/font/montserrat/Montserrat-Bold.ttf")
      format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Gothic";
    src: url("/src/assets/font/gothic/GothicA1-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }
`;

function GlobalStyle() {
  return <Global styles={style}></Global>;
}
