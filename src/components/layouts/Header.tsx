/** @jsxImportSource @emotion/react */
import { HeaderLinkItem } from "../../cds/Navigation/NavigationLinkItem";
import styled from "@emotion/styled";
import Logo from "./LogoComponent";
import { css } from "@emotion/react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { checkMe, signOut } from "../../api/user";
import theme from "../../styles/theme";
import { StyledIconButton } from "./LayoutLayer";
import { error, success } from "../../alert/alert";

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

  function logout() {
    signOut()
      .then(() => success("로그아웃 되었습니다."))
      .catch((err) => {
        console.error(err);
        error("로그아웃 실패", "서버 연결을 확인해주세요.");
      });
  }

  function menuHandler(roleType?: string) {
    switch (roleType) {
      case "admin":
        return (
          <>
            <StyledIconButton icon={ManageAccountsIcon} />
            <StyledIconButton
              icon={SettingsIcon}
              func={() => navigate("/manage")}
            />
            <StyledIconButton icon={LogoutIcon} func={logout} />
          </>
        );
      case "writer":
        return <StyledIconButton icon={SettingsIcon} />;
      default:
        return (
          <StyledIconButton icon={LoginIcon} func={() => navigate("/sign")} />
        );
    }
  }

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
      <PersonalInfo>{menuHandler(user?.roleType)}</PersonalInfo>
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
  position: absolute;
  left: 50%;
  width: 500px;
  justify-content: center;
  transform: translate(-50%, 0%);
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
