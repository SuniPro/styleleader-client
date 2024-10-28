/** @jsxImportSource @emotion/react */
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styled from "@emotion/styled";

export function ReadyBanner(props: {
  type?: string;
  title: string;
  description: string;
}) {
  const { type = "서비스 준비중", title, description } = props;
  return (
    <BannerContainer>
      <WarningAmberIcon sx={{ fontSize: "60px", color: "#d7bc6a" }} />
      <BannerTitle>{type}</BannerTitle>
      <BannerDescription>{title}</BannerDescription>
      <BannerDescription>{description}</BannerDescription>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
  justify-content: center;
  font-size: 20px;
  border: 3px solid transparent;
  border-radius: 50%;
  border-image: linear-gradient(to bottom, #d7bc6a 0%, #ffffff 150%);
  border-image-slice: 1;
`;

const BannerTitle = styled.h1`
  color: #d7bc6a;
`;

const BannerDescription = styled.span`
  padding: 5px;
  color: white;
`;
