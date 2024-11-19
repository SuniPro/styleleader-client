/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Container, PageContainer } from "../components/layouts";
import { css } from "@emotion/react";
import "@iconscout/unicons/css/line.css";
import { useState } from "react";
import { TabMenu, TabMenuListType } from "../components/layouts/TabMenu";
import theme from "../styles/theme";
import { signIn, signUp } from "../api/user";
import { error, success } from "../alert/alert";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export const SIGN_MENU: TabMenuListType[] = [
  { menu: "SIGN IN", path: "info" },
  { menu: "SIGN UP", path: "board" },
];

interface SignInfoType {
  email: string;
  password: string;
}

export function Sign() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [signInfo, setSignInfo] = useState<SignInfoType>({
    email: "",
    password: "",
  });
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signInHandler = () => {
    if (!signInfo.email.includes("@")) {
      error("로그인 실패", "이메일은 @가 포함되어야합니다.");
    } else if (signInfo.password.length < 8) {
      error("로그인 실패", "비밀번호는 최소 8자리를 넘어야합니다.");
    }
    setIsLoading(true);

    signIn(signInfo)
      .then((r) => {
        if (r.status === 200) {
          success("로그인 성공");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const signUpHandler = () => {
    if (!signInfo.email.includes("@")) {
      error("회원가입 실패", "이메일은 @가 포함되어야합니다.");
    } else if (signInfo.password.length < 8) {
      error("회원가입 실패", "비밀번호는 최소 8자리를 넘어야합니다.");
    } else if (signInfo.password !== passwordCheck) {
      error("회원가입 실패", "비밀번호와 비밀번호 확인은 동일해야합니다.");
    }

    signUp({
      email: signInfo.email,
      password: signInfo.password,
      roleType: "admin",
    }).then(() => success(signInfo.email.split("@")[0] + "님 환영합니다."));
  };

  return (
    <PageContainer
      css={css`
        align-items: center;
        margin-top: 5rem;
      `}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Section className="section">
          <Container
            css={css`
              align-items: center;
              margin-bottom: 4rem;
            `}
          >
            <TabMenu
              menuList={SIGN_MENU}
              activeState={{ selectedIndex, setSelectedIndex }}
            />
            <Card3DWrap
              css={css`
                margin-left: auto !important;
                margin-right: auto !important;
              `}
            >
              <Card3DWrapper
                isSignUp={selectedIndex === 1}
                className="card-3d-wrapper"
              >
                <Card className="card-front">
                  <CenterWrap>
                    <SignTitle>Log In</SignTitle>
                    <FormGroup>
                      <FormStyle
                        type="email"
                        name="logemail"
                        className="form-style"
                        placeholder="Your Email"
                        id="logemail"
                        autoComplete="off"
                        onChange={(e) => {
                          setSignInfo((prev) => ({
                            email: e.target.value,
                            password: prev.password,
                          }));
                        }}
                      />
                      <i
                        css={css`
                          color: ${!signInfo.email.includes("@") &&
                          `${theme.colors.warning} !important `};
                        `}
                        className="input-icon uil uil-at"
                      />
                    </FormGroup>
                    <FormGroup
                      css={css`
                        margin-top: 0.5rem !important;
                      `}
                    >
                      <FormStyle
                        type="password"
                        name="logpass"
                        className="form-style"
                        placeholder="Your Password"
                        id="logpass"
                        autoComplete="off"
                        onChange={(e) =>
                          setSignInfo((prev) => ({
                            email: prev.email,
                            password: e.target.value,
                          }))
                        }
                      />
                      <i className="input-icon uil uil-lock-alt"></i>
                    </FormGroup>
                    <StyledSignButton onClick={signInHandler}>
                      submit
                    </StyledSignButton>
                    <p className="mb-0 mt-4 text-center">
                      <label className="link">Forgot your password?</label>
                    </p>
                  </CenterWrap>
                </Card>
                <Card
                  css={css`
                    transform: rotateY(180deg);
                  `}
                >
                  <CenterWrap>
                    <SignTitle>Sign Up</SignTitle>
                    <FormGroup
                      css={css`
                        margin-top: 0.5rem !important;
                      `}
                    >
                      <FormStyle
                        type="email"
                        name="logemail"
                        className="form-style"
                        placeholder="Your Email"
                        id="logemail"
                        autoComplete="off"
                        onChange={(e) => {
                          setSignInfo((prev) => ({
                            email: e.target.value,
                            password: prev.password,
                          }));
                        }}
                      />
                      <i
                        css={css`
                          color: ${!signInfo.email.includes("@") &&
                          `${theme.colors.warning} !important `};
                        `}
                        className="input-icon uil uil-at"
                      />
                    </FormGroup>
                    <FormGroup
                      css={css`
                        margin-top: 0.5rem !important;
                      `}
                    >
                      <FormStyle
                        type="password"
                        name="logpass"
                        className="form-style"
                        placeholder="Your Password"
                        id="logpass"
                        autoComplete="off"
                        onChange={(e) =>
                          setSignInfo((prev) => ({
                            email: prev.email,
                            password: e.target.value,
                          }))
                        }
                      />
                      <i className="input-icon uil uil-lock-alt"></i>
                    </FormGroup>
                    <FormGroup
                      css={css`
                        margin-top: 0.5rem !important;
                      `}
                    >
                      <FormStyle
                        type="password"
                        name="logpass"
                        className="form-style"
                        placeholder="Password Check"
                        id="logpass"
                        autoComplete="off"
                        onChange={(e) => setPasswordCheck(e.target.value)}
                      />
                      <i
                        css={css`
                          color: ${signInfo.password === passwordCheck
                            ? ""
                            : "red !important"};
                        `}
                        className="input-icon uil uil-check"
                      />
                    </FormGroup>
                    <StyledSignButton onClick={signUpHandler}>
                      submit
                    </StyledSignButton>
                  </CenterWrap>
                </Card>
              </Card3DWrapper>
            </Card3DWrap>
          </Container>
        </Section>
      )}
    </PageContainer>
  );
}

const Card3DWrap = styled.div`
  position: relative;
  width: 500px;
  max-width: 100%;
  height: 450px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
`;

const Card3DWrapper = styled.div<{ isSignUp: boolean }>(
  ({ isSignUp }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 600ms ease-out;

    transform: ${isSignUp ? "rotateY(180deg)" : ""};
  `,
);

const FormGroup = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.basicBlack};
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const CenterWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormStyle = styled.input`
  padding: 13px 20px 13px 55px;
  height: 48px;
  width: 70%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  outline: none;
  color: ${theme.colors.white};
  background-color: black;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
`;

const StyledSignButton = styled.button`
  width: 20%;
  margin-top: 1rem;
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: ${theme.colors.lightGold};
  color: ${theme.colors.basicBlack};

  &:hover {
    background-color: ${theme.colors.lightGold};
    color: ${theme.colors.basicBlack};
    box-shadow: 0 8px 24px 0 rgba(255, 255, 255, 0.2);
  }
`;

const SignTitle = styled.h2`
  padding-left: 0.5rem;
`;

const Section = styled.div`
  position: relative;
  width: 100%;
  display: block;

  a {
    cursor: pointer;
    transition: all 200ms linear;
  }

  .link {
    color: ${theme.colors.secondary};
  }

  .link:hover {
    color: ${theme.colors.lightGold};
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.7;
  }

  h4 {
    font-weight: 600;
  }

  h6 span {
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .input-icon {
    position: absolute;
    top: 15%;
    left: 4%;
    height: 48px;
    font-size: 24px;
    line-height: 48px;
    text-align: left;
    color: #ffeba7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:-ms-input-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input::-moz-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:-moz-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input::-webkit-input-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus:-ms-input-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus::-moz-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus:-moz-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:focus::-webkit-input-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
`;
