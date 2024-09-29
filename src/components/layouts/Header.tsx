/** @jsxImportSource @emotion/react */
import { HeaderLinkItem } from "../../cds/Navigation/NavigationLinkItem";
import styled from "@emotion/styled";
import Logo from "./LogoComponent";
import { css } from "@emotion/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const location = useLocation();

  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <HeaderContainer scrollMove={position !== 0}>
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
          isActive={location.pathname === "/company"}
        />
        <HeaderLinkItem
          to="brand"
          label={<HeaderLinkLabel>BRAND</HeaderLinkLabel>}
          isActive={location.pathname === "/brand"}
        />
        <HeaderLinkItem
          to="service"
          label={<HeaderLinkLabel>SERVICE</HeaderLinkLabel>}
          isActive={location.pathname === "/service"}
        />
      </HeaderNavigation>
      <PersonalInfo>
        <LogoutIcon fontSize={"medium"} sx={{ color: "#ffffff" }} />
      </PersonalInfo>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ scrollMove: boolean }>(
  ({ scrollMove }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 15px 0;
    position: fixed;
    z-index: 2;

    background-color: ${scrollMove ? "black" : "rgba(255, 255, 255, 0)"};
  `,
);

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
