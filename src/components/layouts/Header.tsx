/** @jsxImportSource @emotion/react */
import { HeaderLinkItem } from "../../cds/Navigation/NavigationLinkItem";
import styled from "@emotion/styled";
import Logo from "./LogoComponent";
import { css } from "@emotion/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo
          css={css`
            left: 20px;
            position: absolute;
          `}
        />
      </Link>
      <HeaderNavigation>
        <HeaderLinkItem
          to="company"
          label={<HeaderLinkLabel>COMPANY</HeaderLinkLabel>}
        />
        <HeaderLinkItem
          to="brand"
          label={<HeaderLinkLabel>BRAND</HeaderLinkLabel>}
        />
        <HeaderLinkItem
          to="service"
          label={<HeaderLinkLabel>SERVICE</HeaderLinkLabel>}
        />
      </HeaderNavigation>
      <PersonalInfo>
        <LogoutIcon fontSize={"medium"} sx={{ color: "#ffffff" }} />
      </PersonalInfo>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 30px 0;
  position: fixed;
  z-index: 2;
`;

const HeaderLinkLabel = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
`;

const HeaderNavigation = styled.nav`
  display: flex;
  padding: 0 24px;
  gap: 40px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 30px;
  gap: 8px;
`;

const Username = styled.span`
  font-weight: 500;
  white-space: nowrap;
  color: white;
  font-size: 20px;
`;
