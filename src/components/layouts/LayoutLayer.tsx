import styled from "@emotion/styled";
import { Input, SvgIconTypeMap } from "@mui/material";
import { css } from "@emotion/react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

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
