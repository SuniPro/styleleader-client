/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { ReactComponent as StyleLeaderLogo } from "../assets/Icons/styleLeader-ci-trandy.svg";

export function Introduce() {
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
          <Card className="card">
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
              ></MapMarker>
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
                css={css`
                  padding: 20px;
                `}
              />
            </Thumb>

            <article>
              <h1>우리는 스위스 명품 시계의 품위를 다룹니다.</h1>
              <span>Harry Brignull</span>
            </article>
          </Card>
        </div>
        <div className="item-3">
          <Card
            href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
            className="card"
          >
            <Thumb
              className="thumb"
              css={css`
                background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg);
              `}
            />
            <article>
              <h1>Created by You, July Edition</h1>
              <p>
                Welcome to our monthly feature of fantastic tutorial results
                created by you, the Envato Tuts+ community!{" "}
              </p>
              <span>Melody Nieves</span>
            </article>
          </Card>
        </div>
        <div className="item-4">
          <Card
            href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826"
            className="card"
          >
            <Thumb
              className="thumb"
              css={css`
                background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png);
              `}
            />
            <article>
              <h1>How to Code a Scrolling “Alien Lander” Website</h1>
              <p>
                We’ll be putting things together so that as you scroll down from
                the top of the page you’ll see an “Alien Lander” making its way
                to touch down.
              </p>
              <span>Kezz Bracey</span>
            </article>
          </Card>
        </div>
        <div className="item-5">
          <Card
            href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139"
            className="card"
          >
            <Thumb
              className="thumb"
              css={css`
                background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg);
              `}
            />
            <article>
              <h1>
                How to Create a “Stranger Things” Text Effect in Adobe Photoshop
              </h1>
              <span>Rose</span>
            </article>
          </Card>
        </div>
        <div className="item-6">
          <Card
            href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
            className="card"
          >
            <Thumb
              className="thumb"
              css={css`
                background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg);
              `}
            />
            <article>
              <h1>
                5 Inspirational Business Portraits and How to Make Your Own
              </h1>
              <span>Marie Gardiner</span>
            </article>
          </Card>
        </div>
        <div className="item-7">
          <Card
            href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281"
            className="card"
          >
            <Thumb
              className="thumb"
              css={css`
                background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png);
              `}
            />
            <article>
              <h1>
                Notes From Behind the Firewall: The State of Web Design in China
              </h1>
              <span>Kendra Schaefer</span>
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
`;

const Thumb = styled.div`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
`;
