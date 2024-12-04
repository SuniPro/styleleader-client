/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ReactComponent as StyleLeaderLogo } from "../assets/Icons/styleLeader-ci-trandy.svg";

import KlpgaLogo from "../assets/Icons/klpga.png";
import KoreaHeartsLogo from "../assets/Icons/koreaHearts.png";
import ShinsegaeLogo from "../assets/Icons/shinsegae.png";
import LotteLogo from "../assets/Icons/lotte.png";
import HyundaiLogo from "../assets/Icons/hyundai.png";

export function IntroduceCardCell() {
  return (
    <>
      <IntroduceContainer
        className="band"
        css={css`
          @media only screen and (min-width: 500px) {
            .band {
              grid-template-columns: 1fr 1fr;
            }
            .item-1 {
              grid-column: 1 / span 2;
            }
            .item-1 h1 {
              font-size: 30px;
            }
          }

          @media only screen and (min-width: 850px) {
            .band {
              grid-template-columns: 1fr 1fr 1fr 1fr;
            }
          }
        `}
      >
        <div className="item-1">
          <Card
            className="card"
            css={css`
              img {
                padding: 0;
              }
            `}
          >
            <Map
              center={{ lat: 37.5097068966865, lng: 127.024670188825 }}
              className={"thumb"}
              level={3}
              css={css`
                width: 100%;
                height: 300px;
              `}
            >
              <MapMarker
                position={{ lat: 37.5097068966865, lng: 127.024670188825 }}
              />
            </Map>
            <article>
              <h1>STYLE LEADER</h1>
              <span style={{ fontSize: "15px" }}>
                서울시 강남구 강남대로 126길 26, SL빌딩 3층 스타일리더 고객센터{" "}
              </span>
            </article>
          </Card>
        </div>
        <div className="item-2">
          <Card className="card">
            <Thumb className="thumb">
              <StyleLeaderLogo
                width={200}
                css={css`
                  padding: 20px;
                `}
              />
            </Thumb>

            <article>
              <h1>
                우리는 스위스 명품시계의 <br />
                품위를 다룹니다.
              </h1>
              <span>STYLE LEADER</span>
            </article>
          </Card>
        </div>
        <div className="item-3">
          <Card className="card">
            <img width={150} src={KlpgaLogo} />
            <article>
              <h1>파트너사</h1>
              <p>
                Korea Ladies Professional Golf Association 한국여자프로골프 공식
                파트너사입니다.
              </p>
              <span>K LPGA</span>
            </article>
          </Card>
        </div>
        <div className="item-4">
          <Card className="card">
            <img width={150} src={KoreaHeartsLogo} />
            <article>
              <h1>후원사</h1>
              <p>
                2014년부터 한국심장재단과 따뜻한 동행을 시작한 후원사입니다.
              </p>
              <span>@koreaheartfoundation</span>
            </article>
          </Card>
        </div>
        <div className="item-5">
          <Card className="card">
            <img width={150} src={ShinsegaeLogo} />
            <article>
              <h1>매장 위치</h1>
              <p>
                본점 02-310-1970
                <br />
                하남점 031- 8072-1870
                <br />
                경기점 031-695-1655
              </p>
              <span>SHINSEGAE DEPARTMENT</span>
            </article>
          </Card>
        </div>
        <div className="item-6">
          <Card className="card">
            <img width={150} src={LotteLogo} />
            <article>
              <h1>매장 위치</h1>
              <p>
                본점 에비뉴엘 02-2118-6124 <br />
                잠실점 02-2143-7122 <br /> 강남점 02-531-2287
              </p>
              <span>LOTTE DEPARTMENT</span>
            </article>
          </Card>
        </div>
        <div className="item-7">
          <Card className="card">
            <img width={125} src={HyundaiLogo} />
            <article>
              <h1>매장 위치</h1>
              <p>
                판교점 031-5170-2246
                <br />
                대전점 042-332-2216
              </p>
              <span>HYUNDAI DEPARTMENT</span>
            </article>
          </Card>
        </div>
      </IntroduceContainer>
    </>
  );
}

const IntroduceContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  @media only screen and (min-width: 500px) {
    .band {
      grid-template-columns: 1fr 1fr;
    }
  }

  h1 {
    font-size: 20px;
    margin: 0;
    color: #333;
  }
`;

const Card = styled.a`
  min-height: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #444;
  position: relative;
  top: 0;
  transition: all 0.1s ease-in;

  background-size: cover;
  background-position: center center;

  align-items: center;
  justify-content: center;

  :hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }

  article {
    padding: 20px;
    display: flex;

    flex: 1;
    justify-content: space-between;
    flex-direction: column;
  }

  p {
    flex: 1; /* make p grow to fill available space*/
    line-height: 1.4;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 2em 0 0 0;
  }

  img {
    padding: 20px;
  }
`;

const Thumb = styled.div`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
`;
