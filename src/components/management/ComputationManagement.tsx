/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TripleTabMenu } from "../layouts/TabMenu";
import { useState } from "react";
import { Divider, PageContainer, StyledBlock } from "../layouts";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

import InamesSite from "../../assets/image/manage/inamesSite.png";
import NameServerSelect from "../../assets/image/manage/nameServerSelect.png";
import nameServerChange from "../../assets/image/manage/nameServerChange.png";
import { useUserContext } from "../context/UserContext";
import { Spinner } from "../Spinner";

const MANAGE_LIST = ["host", "aws", "docker"];

const COMPUTATION_ASSETS = [
  {
    id: "host",
    component: <Host />,
  },
  {
    id: "aws",
    component: <Aws />,
  },
  {
    id: "docker",
    component: <Docker />,
  },
];

export function ComputationManagement() {
  const { user, isLoading, isError } = useUserContext();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const manage = COMPUTATION_ASSETS.find(
    (manage) => manage.id === MANAGE_LIST[selectedIndex],
  )?.component;

  if (!user || isLoading || isError) return <Spinner />;

  return (
    <>
      <PageContainer width={80}>
        <TripleTabMenu
          css={css`
            margin-bottom: 1rem;
          `}
          menuList={MANAGE_LIST}
          activeState={{ selectedIndex, setSelectedIndex }}
        />
        {manage}
      </PageContainer>
    </>
  );
}

function Host() {
  return (
    <>
      <StyledArticle>
        <h1>HOST</h1>
        <h1>STYLE_LEADER HOST</h1>
        <h4>도메인과 호스트의 정보 및 사용법을 설명하기 위한 섹션입니다.</h4>
        <Divider />
        <section>
          <h4>도메인</h4>
          <p>
            현재 도메인을 관리하는 사이트는{" "}
            <span onClick={() => window.open("http://inames.co.kr")}>
              아이네임즈
            </span>
            입니다.
          </p>
          <p>
            해당 사이트에서는 네임 서버라는 것을 관리할 수 있는데, <br />이
            네임서버는 이후에 설명할 Route 53를 통해 수령받은 네임서버가
            입력되어 있습니다.
          </p>

          <p>
            여기서 의문이 발생할 수 있는 부분은 대략{" "}
            <EffectiveSpan css={css``}>3가지로 좁혀지리라 생각</EffectiveSpan>
            됩니다.
          </p>
          <QuestionContainer>
            <p>1. 네임서버가 무엇인가?</p>
            <p>2. 네임서버를 입력하면 어떻게 되는가?</p>
            <p>3. 어떻게 입력하는가?</p>
          </QuestionContainer>

          <TextContainer>
            <h3>1. 네임서버가 무엇인가?</h3>
            <p>
              흔히 네임서버라고 부르는 것은 DNS로, Domain Name Server가 정식
              명칭입니다. DNS는 IP 주소와 도메인을 연결하는 역할을 수행합니다.
              <br />
              <br />
              원래 모든 사이트는 123.45.678.910 형태와 같은 IP의 주소를 가지고
              있습니다. 하지만 <br />
              <EffectiveSpan>
                DNS 를 통해서 123.45.678.910가 아닌 example.co.kr로 접속할 수
                있는 것
              </EffectiveSpan>{" "}
              입니다.
            </p>
          </TextContainer>
          <TextContainer>
            <h3>2. 네임서버를 입력하면 어떻게 되는가?</h3>
            <p>
              위에서 설명된 것처럼 IP와 도메인이 연결되어, 이제 접속할 도메인을
              입력하면, IP로 자동연결되어 사이트에 접속할 수 있게 됩니다.
            </p>
          </TextContainer>
          <TextContainer>
            <h3>3. 어떻게 입력하는가?</h3>
            <p>
              우선 inames 서버에 접속합니다. 접속하면 아래의 이미지와 같은
              정보가 보여집니다.
              <br />
              <br />
              이중 네임서버 변경을 클릭합니다. <br />
              <img width={400} src={InamesSite} alt="InamesSite" />
            </p>
            <p>
              그리고 네임서버를 변경할 도메인을 선택, 아래의 네임서버 변경을
              누릅니다.
              <br />
              <img width={400} src={NameServerSelect} alt="NameServerSelect" />
            </p>
            <p>
              그러면 아래의 화면이 나오는 데 이 화면에서 Route 53를 통해
              수령받은 네임서버를 입력합니다.
              <br />
              <img
                width={400}
                src={nameServerChange}
                alt="nameServerChange"
              ></img>
            </p>
          </TextContainer>
        </section>
      </StyledArticle>
    </>
  );
}

function Aws() {
  const { user, isLoading, isError } = useUserContext();

  if (isLoading || isError) return <Spinner />;

  return (
    <>
      <StyledArticle>
        <h1>AWS</h1>
        <h1>AWS ASSETS INFO</h1>
        <h4>DB, API, Client, Assets 의 정보를 설명하기 위한 섹션입니다.</h4>
        <Divider />
        <section>
          <h4>DB</h4>
          <p>RDBS는 Aws 의 RDS를 사용하고 있습니다.</p>
          <p>
            RDS는 aws에서 제공하는 관계형 데이터베이스 서비스로 현재 사용하는
            엔진은 <br />
            mariadb 10.11.9 이며, 모니터링은 aws rds 서비스에 접속하여 모니터링
            탭에서 확인할 수 있습니다.
          </p>
          {user?.roleType === "admin" && (
            <QuestionContainer>
              <p>ID : styleleader</p>
              <p>PASSWORD : style7848</p>
            </QuestionContainer>
          )}
        </section>

        <section>
          <h4>S3 INFO</h4>
          <p>
            AWS S3는 이미지, PDF 등 대용량의 파일들을 보관하기 위한 서비스
            입니다.
            <br /> 위의 파일들은 DB에 보관 시 DB의 관리가 어려워지기 때문에
            파일은 S3에 보관하고 파일의 경로만을 DB에 입력하여 사용하고
            있습니다.
          </p>
          <p>
            AWS S3는 aws에 접속하여 s3 메뉴를 클릭함으로 사용할 수 있습니다.
          </p>
          <p>
            s3를 접속하면 버킷 리스트가 나오는데 이 때 원하는 버킷을 클릭하여
            내부의 파일들을 확인할 수 있습니다.
          </p>
          <p>여기서는 버켓의 사용법만을 다루겠습니다.</p>
          <QuestionContainer>
            <p>1. 현재 S3는 DB의 내용과 동일하게 되어있습니다.</p>
            <p>
              2. 이미지를 추가하고 싶다면 우선 해당하는 폴더에 이미지를
              올립니다.
            </p>
            <p>
              3. 만약 history 메뉴 하단의 collection에 이미지를 추가하고 싶다면,
              <br />
              collection 폴더에 접속, 해당하는 브랜드 폴더에 이미지를
              업로드합니다.
            </p>
            <p>
              4. 이제 styleleader.co.kr에서 로그인 후 Management 아이콘을 클릭해
              <br />
              해당하는 메뉴에 접속하고 하단의 ADD 버튼을 클릭하고, 필요한 정보를
              입력합니다.
              <br />
              <EffectiveSpan>
                이 때, image에는 반드시 파일이름만을 작성해야합니다.
              </EffectiveSpan>
            </p>
            <p>
              5. styleleader.co.kr에서 해당 history에 접속, 하단의 collection을
              확인합니다.
            </p>
          </QuestionContainer>
        </section>

        <section>
          <h4>API INFO</h4>
          <p>
            메인 API는 Java 17에 spring-boot 3.2.10로 작성되었으며, orm은 JPA로
            구성되었습니다.
            <br />
            인증정보는 jwt로 식별합니다.
            <br />
            <br /> Reactive programming을 염두에 두고 작업되었습니다.
          </p>

          <h4>API HOST</h4>

          <p>해당 API는 aws의 EC2 서비스에 호스팅 되어있습니다.</p>
          <p>
            EC2는 aws 의 클라우딩 컴퓨터 서비스로 가상서버를 제공하고 이를
            사용할 수 있게하는 서비스입니다.
            <br />
            <br />
            현재 api가 ec2 서비스를 사용하는 이유는 퍼블릭 IP, 보안정책 등
            온프레미스 환경에서의 api 구축보다 ec2에서 구축하는 것이 가성비
            측면에서 우수하기 때문입니다.
          </p>
          <p>
            EC2는 기본적으로 aws 에서 관리하고 있지만, 내부의 파일을 확인하고
            시스템 구성을 수정하기 위해서는 서버에 접속할 필요가 있습니다.
            <br />본 섹션에서는 접속방법과 현재 서비스의 상태를 확인하는
            방법만을 서술하겠습니다.
          </p>
          <QuestionContainer>
            <p>1. EC2 접속 요령</p>
            <p>
              - 터미널을 통해 아래의 명령어를 입력합니다. <br />이 때{" "}
              <EffectiveSpan>
                반드시 키파일이 있는 폴더에서 아래의 명령어가 입력되어야합니다.
              </EffectiveSpan>
              <br />
              <br />
              <StyledBlock height={60}>
                ssh -i "styleleader-keypair.pem"
                ec2-user@ec2-54-180-230-22.ap-northeast-2.compute.amazonaws.com
              </StyledBlock>
            </p>
            <p>2. API 상태확인</p>
            <p>접속 시 아래의 명령어를 통해 log 파일에 접근하고 </p>
            <StyledBlock height={40}>cd dev/api/styleleader/logs</StyledBlock>
            <p>
              아래의 명령어를 통해 log 정보를 획득합니다. <br />
              숫자는 아래에서부터 몇 줄을 보여줄지를 선택하며, -f 옵션은 현재
              발생하는 로그를 지속적으로 추적합니다.
            </p>
            <StyledBlock height={80}>
              tail -1000 styleleader-main-api-log.log
              <br />
              <br />
              tail -f styleleader-main-api-log.log
            </StyledBlock>
            <p>
              fileZila 와 같은 ftp 서비스를 사용해 파일을 다운 받는 것도
              가능하니, 이 점 참고바랍니다.{" "}
            </p>
          </QuestionContainer>
        </section>

        <section>
          <h4>CLIENT INFO</h4>
          <p>
            Client는 node 22 버전의 react 18로 작성되었습니다.
            <br />
            번들구성은 CRA이며, 웹서버는 nginx로 구축되어있습니다.
            <br />
          </p>

          <h4>CLIENT HOST</h4>

          <p>해당 client는 aws의 EC2 서비스에 호스팅 되어있습니다.</p>

          <QuestionContainer>
            <p>1. EC2 접속 요령</p>
            <p>
              - 터미널을 통해 아래의 명령어를 입력합니다. <br />이 때{" "}
              <EffectiveSpan>
                반드시 키파일이 있는 폴더에서 아래의 명령어가 입력되어야합니다.
              </EffectiveSpan>
              <br />
              <br />
              <StyledBlock height={60}>
                ssh -i "styleleader-keypair.pem"
                ec2-user@ec2-13-209-20-126.ap-northeast-2.compute.amazonaws.com
              </StyledBlock>
            </p>
          </QuestionContainer>
        </section>
      </StyledArticle>
    </>
  );
}

function Docker() {
  return (
    <>
      <StyledArticle>
        <h1>DOCKER</h1>
        <h1>SERVER-CLIENT CODE MANAGE INFRA</h1>
        <h4>Client 와 API 의 코드 변경 시 사용되는 Docker 사용 요령입니다.</h4>
        <Divider />
        <section>
          <h4>DOCKER INFO</h4>
          <p>
            docker는 기본적으로 코드를 포함한, 어떠한 프로그램 혹은 기타 infra
            등을 어디에서든 쉽게 실행하기 위한 프로그램이라고 이해하시면 됩니다.
            <br />
            <br />
            사용을 하게 될일이 거의 없겠지만 만약 사용 시 현재 서버의 상태를
            확인하기 위한 명령어들이 사용될 것이라 생각됩니다.
            <br />
            <br />
            따라서, EC2에서의 docker를 사용하기위한 명령어와 docker의 이미지를
            다운받는 것까지 아래의 명령어를 통해 설명하겠습니다.
          </p>

          <h4>EC2에서의 사용</h4>

          <QuestionContainer>
            <p>1. 우선 EC2 접속에 접속합니다.</p>
            <p>
              - 터미널을 통해 아래의 명령어를 입력합니다. <br />이 때
              <EffectiveSpan>
                {" "}
                반드시 키파일이 있는 폴더에서 아래의 명령어가 입력되어야합니다.
              </EffectiveSpan>
              <br />
              <br />
              <StyledBlock height={60}>
                ssh -i "styleleader-keypair.pem"
                ec2-user@ec2-13-209-20-126.ap-northeast-2.compute.amazonaws.com
              </StyledBlock>
            </p>
            <p>
              2. 성공적으로 접속했다면 아래의 명령어들로 관련정보를 확인합니다.
            </p>
            <p>
              아래의 명령어는 현재 실행되고 있는 컨테이너를 확인합니다.
              <StyledBlock height={40}>docker ps</StyledBlock>
            </p>
            <p>
              컨테이너의 ID를 확인하면 아래의 명령어로 컨테이너를 정지할 수
              있습니다.
              <StyledBlock height={40}>
                docker stop {"<컨테이너 아이디>"}
              </StyledBlock>
              아래의 명령어로는 컨테이너를 실행할 수 있습니다.
              <br />이 때{" "}
              <EffectiveSpan>
                반드시 자신이 접속한 EC2를 확인하고 입력하시기 바랍니다.
              </EffectiveSpan>
              <StyledBlock height={40}>
                sudo docker run -d -p 8080:8080 sosunhyeun/styleleader-api:0.1
              </StyledBlock>
              <StyledBlock height={40}>
                sudo sudo docker run -p 3000:80
                sosunhyeun/styleleader-client:0.1
              </StyledBlock>
            </p>
            <p>
              3. 이제 styleleader.co.kr을 통해 정상적으로 실행되었는지를
              확인합니다.
            </p>
          </QuestionContainer>
        </section>
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  width: 100%;
`;

const EffectiveSpan = styled.span`
  color: ${theme.colors.gold};
`;

const TextContainer = styled.div`
  padding: 20px 0;
`;

const QuestionContainer = styled.div`
  padding: 40px 0 40px 10px;

  p {
    font-size: 16px;
  }

  img {
    width: 300px;
    background-size: cover;
  }
`;
