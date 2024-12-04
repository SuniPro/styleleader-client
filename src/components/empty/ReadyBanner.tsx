/** @jsxImportSource @emotion/react */
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styled from "@emotion/styled";
import { BrandedBox } from "../layouts";

export function ReadyBanner(props: {
  type?: string;
  title: string;
  description: string;
}) {
  const { type = "서비스 준비중", title, description } = props;
  return (
    <BrandedBox width={600} height={400}>
      <WarningAmberIcon sx={{ fontSize: "60px", color: "#d7bc6a" }} />
      <BannerTitle>{type}</BannerTitle>
      <BannerDescription>{title}</BannerDescription>
      <BannerDescription>{description}</BannerDescription>
    </BrandedBox>
  );
}

const BannerTitle = styled.h1`
  color: #d7bc6a;
`;

const BannerDescription = styled.span`
  padding: 5px;
  color: white;
`;
