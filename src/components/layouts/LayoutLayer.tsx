import styled from "@emotion/styled";
import { Button, Input, SvgIconTypeMap } from "@mui/material";
import { css } from "@emotion/react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import theme from "../../styles/theme";

export const PageContainer = styled.div<{ width?: number }>(
  ({ width = 100 }) => css`
    width: ${width}%;
    color: white;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    letter-spacing: 2px;
    line-height: 2.4375rem;
    color: white;
  `,
);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ManagementTableContainer = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const Divider = styled.p`
  border-top: 1px solid #595a5c;
  width: 100%;
`;

export function IconFuncButton(props: {
  className?: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  func?: () => void;
  disable?: boolean;
}) {
  const { className, icon: Icon, func } = props;
  return (
    <IconWrapper className={className} onClick={func}>
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
  disabled?: boolean;
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
    border-image: linear-gradient(to bottom, #d7bc6a 0%, #ffffff 150%) 1;
  `,
);

export const TableContainer = styled.table`
  border-spacing: 0;
  width: 100%;
`;

export function EllipsisCase(props: {
  text: string;
  textAlign: string;
  className?: string;
  width?: number;
  func?: any;
}) {
  const { width, text, className, textAlign, func } = props;
  return (
    <TextCase className={className} onClick={func}>
      <TextArea textAlign={textAlign} width={width}>
        {text}
      </TextArea>
    </TextCase>
  );
}

export const TextCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextArea = styled.span<{ width?: number; textAlign: string }>(
  ({ width, textAlign }) => css`
    text-align: ${textAlign};
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    width: ${width}px;
    height: 100%;
  `,
);

export const StyledWriteButton = styled(Button)<{
  tone: string;
  textColor?: string;
  width?: number;
}>(
  ({ tone, width, textColor }) => css`
    width: ${width}px;
    margin-top: 20px;
    background: ${tone};
    color: ${textColor ? textColor : "#000000"};
    right: 0;
  `,
);

export const StyledIconButton = styled(IconFuncButton)`
  display: flex;
  flex-direction: row;
  padding: 1px 20px 1px 0;
  color: ${theme.colors.white};
`;

export const BasicModalBoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  border: "3px solid transparent",
  borderImage: "linear-gradient(to bottom, #d7bc6a 0%, #ffffff 150%)",
  borderImageSlice: 1,
  boxShadow: 24,
  p: 4,
  color: "#ffffff",
  backgroundColor: "black",
  height: "60vh",
  overflowY: "scroll",
};

export const AdminManageModalBoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  border: `1px solid ${theme.colors.basicBlack}`,
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  color: "#ffffff",
  backgroundColor: "black",
  height: "40%",
  overflowY: "scroll",
};

export const TableIconButtonCase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const StyledBlock = styled.div<{
  height: number;
  backgroundColor?: string;
}>(
  ({ height, backgroundColor }) => css`
    height: ${height}px;
    font-family: ${theme.fontStyle.roboto};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    background-color: ${backgroundColor};
    border: 1px solid ${theme.colors.gold};
    border-radius: 5px;
    padding-left: 10px;
    margin: 10px 0;
  `,
);
