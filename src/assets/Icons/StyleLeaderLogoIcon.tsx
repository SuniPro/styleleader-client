import styled from "@emotion/styled";
import styleLeaderImageJpg from "./style-leader-logo-normal.jpg";

export function StyleLeaderLogoIcon(props: { width?: string | number }) {
  const { width = 200 } = props;

  return (
    <ImageWrap>
      <img src={styleLeaderImageJpg} width={width} alt={"styleleader logo"} />
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  margin: 0 auto;
  left: 20px;
  position: absolute;
`;
