/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import classNames from "classnames";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ServiceCategory, ServiceContents } from "../../model/Service";
import theme from "../../styles/theme";
import { Box, Modal, Typography } from "@mui/material";
import { uid } from "uid";
import { getFile } from "../../api/file";
import { useNavigate } from "react-router-dom";
import { BasicModalBoxStyle, PageContainer } from "../layouts";
import { useQuery } from "@tanstack/react-query";
import { getServiceCategoryList } from "../../api/serviceCategory";
import { Spinner } from "../Spinner";
import { ReadyBanner } from "../empty/ReadyBanner";
import { error } from "../../alert/alert";

export function AccordionCategory() {
  const { data: categories } = useQuery({
    queryKey: ["getServiceCategoryList"],
    queryFn: () => getServiceCategoryList(),
    refetchInterval: 5000, // Options 객체로 refetchInterval 설정
  });

  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!categories) {
    return <Spinner />;
  }

  if (categories.length === 0) {
    return (
      <PageContainer
        css={css`
          align-items: center;
        `}
      >
        <ReadyBanner
          type="컨텐츠 없음"
          title="자료가 없습니다."
          description=""
        />
      </PageContainer>
    );
  }

  const handleClick = (slug: string) => {
    setActiveIndex(categories.findIndex((cat) => cat.slug === slug));
    setOpen(true);
  };

  const focusOff = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!(e.target as HTMLElement).classList.contains("category--image")) {
      setActiveIndex(0);
      setOpen(false);
    }
  };

  const classes = classNames({
    focused: open,
  });

  return (
    <CategoriesMainContainer
      className={"categories--menu-container " + classes}
      onClick={focusOff}
      style={{ height: window.innerHeight }}
    >
      <UnitListCategories className="categories menu">
        {categories.map((category, index) => {
          const isLast =
            index === categories.length - 1 || index === categories.length - 2;
          const shiftLeft = index < activeIndex;

          return (
            <ProjectCategory
              cat={category}
              key={"cat-" + index}
              handleClick={handleClick}
              active={index === activeIndex}
              focused={open}
              shiftLeft={shiftLeft}
              isLast={isLast}
            />
          );
        })}
      </UnitListCategories>
    </CategoriesMainContainer>
  );
}

function ProjectList(props: {
  serviceSlug: string;
  services: ServiceContents[];
}) {
  const { serviceSlug, services } = props;
  const navigate = useNavigate();
  const [activeContents, setActiveContents] = useState<ServiceContents>(
    services[0],
  );
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  return (
    <StyledProjectList className="project-list" key={uid()}>
      <ul className="menu vertical">
        {services.map((service, index) => (
          <>
            <li
              key={"service-" + uid() + index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveContents(service);
                if (serviceSlug === "userManual") {
                  getFile({ file: service.contents }).catch(() =>
                    error("다운로드 실패", "파일이 존재하지 않습니다."),
                  );
                } else if (service.contents.includes("/faq")) {
                  navigate(service.contents);
                } else {
                  setOpen(true);
                }
              }}
            >
              <p>
                <ProjectListClient>{service.name}</ProjectListClient>
                <ProjectListByLine>{service.description}</ProjectListByLine>
              </p>
            </li>
          </>
        ))}
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {ModalContents(activeContents)}
      </Modal>
    </StyledProjectList>
  );
}

function ModalContents(contents: ServiceContents) {
  return (
    <Box sx={BasicModalBoxStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <p
          css={css`
            margin-bottom: 30px;
            color: ${theme.colors.gold};
            font-size: 24px;
            font-weight: bold;
            font-family: ${theme.fontStyle.roboto};
          `}
        >
          {contents.name}
        </p>
        <p
          css={css`
            font-size: 16px;
            max-height: 400px;
            overflow-y: scroll;
          `}
        >
          {contents.contents.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
    </Box>
  );
}

const ProjectListClient = styled.h3`
  font-size: 18px;
  margin-bottom: 0;
  text-transform: capitalize;
  font-weight: bold;
`;

const ProjectListByLine = styled.h4`
  font-size: 12px;
  font-family: ${theme.fontStyle.roboto};
`;

function ProjectCategory(props: {
  cat: ServiceCategory;
  handleClick: (id: string) => void;
  active: boolean;
  focused: boolean;
  shiftLeft: boolean;
  isLast: boolean;
}) {
  const { cat, focused, active, isLast, shiftLeft, handleClick } = props;

  const navigate = useNavigate();

  const setActive = () => {
    handleClick(cat.slug);
  };

  const classes = classNames({
    category: true,
    isActive: active,
    isLast,
    shiftLeft,
  });

  const filteredServices =
    cat.slug === "faq" ? cat.services.slice(0, 4) : cat.services;

  return (
    <ProjectCategoriesList
      className={classes}
      focused={focused}
      active={active}
      shiftLeft={shiftLeft}
    >
      <CategoryContents isActive={active} focused={focused} isLast={isLast}>
        <h2>{cat.name}</h2>
        <ProjectList
          serviceSlug={cat.slug}
          services={filteredServices}
          key={`project-list ${uid()}`}
        />
      </CategoryContents>
      <CategoryImageContainer
        className="category--image-container"
        onClick={setActive}
        active={active}
        focused={focused}
      >
        <CategoryImage
          className="category--image"
          thumbnail={cat.thumbnail}
          isActive={active}
          focused={focused}
        />
      </CategoryImageContainer>
      <CategoryName className="category--name">
        <h6>{cat.name}</h6>
      </CategoryName>
      <CategoryCloseButton className="category--closeButton">
        <div
          css={css`
            margin: -15px;
            padding: 15px;
          `}
          onClick={() => navigate(-1)}
        >
          Back
        </div>
      </CategoryCloseButton>
    </ProjectCategoriesList>
  );
}

const CategoryCloseButton = styled.div`
  opacity: 0;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: -5rem;
  transition: opacity 200ms ease;
`;

const CategoryContents = styled.div<{
  isActive: boolean;
  focused: boolean;
  isLast: boolean;
}>(
  ({ isActive, focused, isLast }) => css`
    position: absolute;
    top: 50px;
    white-space: nowrap;
    right: 0;
    transform: translateX(90%);

    text-align: right;
    z-index: ${isActive && focused ? 99 : -1};
    visibility: ${isActive && focused ? "visible" : "hidden"};
    pointer-events: ${isActive && focused ? "all" : "none"};

    ${isLast && "right: initial;left: 0;transform: translateX(-120%);"}

    h2 {
      text-align: left;
      font-size: 44px;
      transform: ${isLast ? "translateX(100px)" : "translateX(-10px)"};
      text-transform: uppercase;
      font-weight: bold;
    }

    @media ${theme.windowSize.middle} {
      transform: translateX(-10%);
    }

    @media ${theme.windowSize.small} {
      transform: translateX(-10%);
    }
  `,
);

const StyledProjectList = styled.div`
  padding: 0 0 0 30px;
  text-align: left;

  li {
    text-align: left;
    opacity: 1;
    transition: all 300ms ease;
    list-style: none;
  }
`;

const CategoryName = styled.div`
  position: absolute;
  white-space: nowrap;
  width: calc(100% - 5px);
  transition: all 0.5s ease;
  padding-top: 5px;
  margin-top: 15px;
  margin-right: 5px;
  border-top: 1px solid #666;
  color: ${theme.colors.secondary};

  h6 {
    font-size: 18px;
    margin-top: 10px;
    color: inherit;
    text-transform: capitalize;
  }
`;

const ProjectCategoriesList = styled.li<{
  focused: boolean;
  active: boolean;
  shiftLeft: boolean;
}>(
  ({ focused, active, shiftLeft }) => css`
    transition: transform 500ms ease;
    position: relative;
    z-index: ${active ? 99 : -1};
    transform: ${focused && !active
      ? `translate3d(${shiftLeft ? "-" : ""}100%, 0, 0)`
      : "translate3d(0, 0, 0)"};
    list-style: none;
    .focused .category--name {
      opacity: 0;
    }

    .isLast .category--content {
      right: initial;
      left: 0;
      transform: translateX(-100%);
    }

    .category--content,
    .category--content .project-list,
    .category--content .project-list li {
      text-align: left;
    }

    .isLast .category--content,
    .isLast .category--content .project-list,
    .isLast .category--content .project-list li {
      text-align: right;
    }

    /*active states*/

    li.category.isActive {
      z-index: 99;
    }

    .isActive .category--content .project-list li {
      opacity: 1;
    }

    .focused .isActive .category--closeButton {
      opacity: 1;
      z-index: 99;
    }
  `,
);

const CategoryImage = styled.div<{
  thumbnail: string;
  isActive: boolean;
  focused: boolean;
}>(
  ({ thumbnail, isActive, focused }) => css`
    background: url(${thumbnail}) no-repeat center
      ${thumbnail.includes("WATCH") ? "left" : "center"};
    background-size: cover;
    height: 500px;
    width: ${isActive && focused ? "300px" : "calc(20vw - 20px)"};

    transition:
      opacity 500ms ease,
      width 500ms ease 100ms;

    opacity: ${focused ? 0.7 : 1};

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  `,
);

const CategoryImageContainer = styled.div<{
  active: boolean;
  focused: boolean;
}>(
  ({ active, focused }) => css`
    transform: ${active && focused
      ? "scale(1.1) translate3d(0, 0, 0)"
      : "scale(1) translate3d(0, 0, 0)"};

    background: #222;
    transition: all 500ms ease;

    .focused {
      opacity: 0.25;
    }
  `,
);

const CategoriesMainContainer = styled.div`
  position: relative;
  height: calc(100vh - 150px);
  width: 100%;

  a:hover,
  a:hover > * {
    color: grey;
  }

  .category {
    position: relative;
  }

  .categories--menu-container:not(.focused) li.category:hover .category--name {
    border-color: #eee;
    color: #eee;
  }
`;

const UnitListCategories = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  padding: 0;
`;
