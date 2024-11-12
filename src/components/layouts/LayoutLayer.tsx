import styled from "@emotion/styled";
import { Input, SvgIconTypeMap } from "@mui/material";
import { css } from "@emotion/react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const PageContainer = styled.div<{ width?: number }>(
  ({ width = 100 }) => css`
    width: ${width}%;
    color: white;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
);

export const MainTitle = styled.div`
  font-size: 40px;
  font-family: Roboto, sans-serif;

  font-weight: 800;
`;

export const SectionTitle = styled.h1<{ marginBottom?: number }>(
  ({ marginBottom }) => css`
    margin-bottom: ${marginBottom}px;
    font-family: Montserrat, sans-serif;
    font-size: 1.875rem;
    font-weight: bold;
    letter-spacing: 1.6px;
    line-height: 2.4375rem;
    color: white;
  `,
);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Divider = styled.p`
  border-top: 1px solid #595a5c;
  width: 100%;
`;

export function IconButton(props: {
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  func?: () => void;
}) {
  const { icon: Icon, func } = props;
  return (
    <IconWrapper onClick={func}>
      <Icon />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const UnderLineInput = styled(Input)<{
  underLineColor: string;
  isWrite?: boolean;
}>(
  ({ underLineColor }) => css`
    padding-left: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    width: 100%;

    &:after {
      border-bottom-color: ${underLineColor};
    }
  `,
);

export const BrandedBox = styled.div<{ width: number; height: number }>(
  ({ width, height }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${width}px;
    height: ${height}px;
    justify-content: center;
    font-size: 20px;
    border: 3px solid transparent;
    border-radius: 50%;
    border-image: linear-gradient(to bottom, #d7bc6a 0%, #ffffff 150%);
    border-image-slice: 1;
  `,
);
