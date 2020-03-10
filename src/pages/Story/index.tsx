import React from "react";

import Parallax from "../../components/StoryParallax";
import { Navbar } from "../../components/Navbar";

import { ArtPage } from "./ArtPage";
import { ProjectsPage } from "./ProjectsPage";
import { PhotographyPage } from "./PhotographyPage";
import { FriendsPage } from "./FriendsPage";

import { css } from "emotion";
import { colors } from "../../shared/config";

import { Element } from "react-scroll";

import { Switch, Route, useRouteMatch } from "react-router-dom";

export const StoryPage: React.FC = () => {
  const { path } = useRouteMatch();
  // const bottomColor = "#010220";
  const bottomColor = "#003366";
  return (
    <div>
      <Navbar
        style={{
          position: "absolute",
          backgroundColor: "transparent"
        }}
        itemStyle={{ color: colors.black, fontWeight: "bold" }}
        itemHoverStyle={{
          color: colors.white
        }}
        scroll
      />
      <Parallax />
      <Element name="bottomNavbar" />
      <Navbar
        style={{ backgroundColor: "rgba(1, 2, 32, 0.7)" }}
        itemStyle={{ color: colors.white }}
        itemHoverStyle={{
          textShadow: "-0.06ex 0 white, 0.06ex 0 white;",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          transition: "0.3s"
        }}
      />

      <div
        className={css`
          height: 15vh;
          width: 100%;
          background-image: linear-gradient(#010220, ${bottomColor});
          color: white;
          margin-top: -50px;
          border-top: 50px solid #010220;
          /* outline: 300px solid #010220; */
          /* z-index: -200 !important; */
        `}
      ></div>

      <div
        className={css`
          min-height: 100vh;
          width: 100%;
          background-color: ${bottomColor};
          z-index: 10;
          color: white;
        `}
      >
        <Switch>
          <Route exact path={path}>
            <div
              className={css`
                text-align: center;
                line-height: 400px;
              `}
            >
              Thanks so much for stopping by! ^_^ This is still a WIP but stay
              tuned for more content heh. (hint: click 'art' or 'photography')
            </div>
          </Route>
          <Route path={`${path}/projects`}>
            <ProjectsPage />
          </Route>
          <Route path={`${path}/art`}>
            <ArtPage />
          </Route>
          <Route path={`${path}/photography`}>
            <PhotographyPage />
          </Route>
          <Route path={`${path}/friends`}>
            <FriendsPage />
          </Route>
        </Switch>
      </div>

      <div
        className={css`
          height: 100px;
          width: 100%;
          background-image: linear-gradient(${bottomColor}, #010220);
          z-index: 10;
          color: white;

          line-height: 100px;
          text-align: center;
        `}
      >
        hi this is a footer
      </div>
    </div>
  );
};
