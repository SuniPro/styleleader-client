/** @jsxImportSource @emotion/react */
import { HeaderLinkItem } from "../../cds/Navigation/NavigationLinkItem";
import styled from "@emotion/styled";
import Logo from "./LogoComponent";
import { css } from "@emotion/react";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { checkMe } from "../../api/user";
import theme from "../../styles/theme";
import { IconButton } from "./LayoutLayer";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
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

  const { data: user } = useQuery({
    queryKey: ["checkMe"],
    queryFn: () => checkMe(),
    refetchInterval: 5000,
  });

  return (
    <HeaderContainer scrollMove={position !== 0}>
      <Link
        to={"/"}
        css={css`
          width: 22px;
        `}
      >
        <Logo
          css={css`
            padding: 2px 0 2px 20px;
            position: absolute;
            @media ${theme.windowSize.small} {
              padding: 10px 0 2px 20px;
              width: 100px;
              height: 10px;
            }
            @media ${theme.windowSize.middle} {
              padding: 10px 0 2px 20px;
              width: 100px;
              height: 10px;
            }
          `}
        />
      </Link>
      <HeaderNavigation>
        <HeaderLinkItem
          to="company/info"
          label={<HeaderLinkLabel>COMPANY</HeaderLinkLabel>}
          isActive={location.pathname.includes("/company")}
        />
        <HeaderLinkItem
          to="brand"
          label={<HeaderLinkLabel>BRAND</HeaderLinkLabel>}
          isActive={location.pathname.includes("/brand")}
        />
        <HeaderLinkItem
          to="service"
          label={<HeaderLinkLabel>SERVICE</HeaderLinkLabel>}
          isActive={location.pathname.includes("/service")}
        />
      </HeaderNavigation>
      <PersonalInfo>
        {user ? (
          <>
            {user.roleType === "admin" && (
              <StyledIconButton icon={ManageAccountsIcon} />
            )}
            <StyledIconButton icon={LogoutIcon} />
          </>
        ) : (
          <StyledIconButton icon={LoginIcon} func={() => navigate("/sign")} />
        )}
      </PersonalInfo>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ scrollMove: boolean }>(
  ({ scrollMove }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

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
`;

const Username = styled.span`
  font-weight: 500;
  white-space: nowrap;
  color: white;
  font-size: 20px;
`;

const StyledIconButton = styled(IconButton)`
  display: flex;
  flex-direction: row;
  padding: 1px 20px 1px 0;
  color: ${theme.colors.white};
`;
