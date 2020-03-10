import * as React from "react";

import styled from "@emotion/styled";
import { css } from "emotion";

import { colors, fonts } from "../../shared/config";

import { Link, useRouteMatch } from "react-router-dom";

import { Link as ScrollLink, scroller } from "react-scroll";

scroller.scrollTo("bottomNavbar", {
  smooth: "easeInQuart"
});

interface NavItemProps {
  itemStyle?: any;
  itemHoverStyle?: any;
  to: string;
}

const NavItem: React.FC<NavItemProps> = props => {
  const { itemStyle, itemHoverStyle, to } = props;

  return (
    <Link
      to={to}
      className={css`
        display: flex;
        text-decoration: none;
        align-items: center;
        padding: 20px 25px;
        text-decoration: none;
        ${itemStyle && {
          ...itemStyle
        }}
        &:hover {
          ${itemHoverStyle && { ...itemHoverStyle }};
        }
      `}
    >
      {props.children}
    </Link>
  );
};

interface ChooseScrollProps {
  itemStyle?: any;
  itemHoverStyle?: any;
  to: string;
  scroll?: boolean;
}
const ChooseScroll: React.FC<ChooseScrollProps> = props => {
  const { itemStyle, itemHoverStyle, to, scroll } = props;
  return scroll ? (
    <ScrollLink
      activeClass="active"
      to="bottomNavbar"
      spy={true}
      smooth={true}
      duration={2000}
      ignoreCancelEvents
    >
      <NavItem
        itemStyle={itemStyle}
        itemHoverStyle={itemHoverStyle}
        to={to}
        children={props.children}
      />
    </ScrollLink>
  ) : (
    <NavItem
      itemStyle={itemStyle}
      itemHoverStyle={itemHoverStyle}
      to={to}
      children={props.children}
    />
  );
};

const Blank = styled("div")`
  width: 10px;
`;

interface NavbarProps {
  style?: any;
  itemStyle?: any;
  itemHoverStyle?: any;
  scroll?: boolean;
}

export const Navbar: React.FC<NavbarProps> = props => {
  const { url } = useRouteMatch();
  const { itemStyle, itemHoverStyle, scroll, style } = props;

  return (
    <>
      <nav
        className={css`
          position: -webkit-sticky;
          width: 100%;
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: ${fonts.comic.heading};
          pointer-events: auto;
          z-index: 100;
          overflow: scroll;
          ${style && { ...style }}
        `}
      >
        <Blank />

        <ChooseScroll
          itemStyle={{ ...itemStyle }}
          itemHoverStyle={{ ...itemHoverStyle }}
          to={`/`}
          scroll={scroll}
        >
          go back
        </ChooseScroll>
        <ChooseScroll
          itemStyle={{ ...itemStyle }}
          itemHoverStyle={{ ...itemHoverStyle }}
          to={`${url}`}
          scroll={scroll}
        >
          home
        </ChooseScroll>
        {/* <ChooseScroll
          itemStyle={{ ...itemStyle }}
          itemHoverStyle={{ ...itemHoverStyle }}
          to={`${url}/projects`}
          scroll={scroll}
        >
          projects
        </ChooseScroll> */}
        <ChooseScroll
          itemStyle={{ ...itemStyle }}
          itemHoverStyle={{ ...itemHoverStyle }}
          to={`${url}/art`}
          scroll={scroll}
        >
          art
        </ChooseScroll>
        <ChooseScroll
          itemStyle={{ ...itemStyle }}
          itemHoverStyle={{ ...itemHoverStyle }}
          to={`${url}/photography`}
          scroll={scroll}
        >
          photography
        </ChooseScroll>
        <ChooseScroll
          itemStyle={{ ...itemStyle }}
          itemHoverStyle={{ ...itemHoverStyle }}
          to={`${url}/friends`}
          scroll={scroll}
        >
          friends' stories
        </ChooseScroll>
      </nav>
    </>
  );
};
