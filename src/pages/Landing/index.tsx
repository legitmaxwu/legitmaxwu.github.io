/// <reference path="./index.d.ts"/>

import React from "react";
import styled from "@emotion/styled";
import { css } from "emotion";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

import { mediaQueries, colors, fonts } from "../../shared/config";

const settings = {
  LinkColor: colors.teal
};

const MainPage = styled("div")`
  background-color: white;

  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextHolder = styled("div")`
  height: auto;
  width: calc(100% - 220px);
  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const LinkStyle = styled("a")`
  color: ${settings.LinkColor};
  text-decoration: none;
  &:hover {
    filter: brightness(140%);
  }
`;

const Giraffe = styled("img")`
  height: 200px;
  width: 200px;
  margin: 10px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px dotted gray;
  ${mediaQueries.tablet} {
    display: none;
  }
`;

const P = styled("p")`
  margin: 20px;
`;

const Header = styled("h1")`
  margin: 20px;
  font-family: ${fonts.comic.heading};
`;

export default class LandingPage extends React.Component {
  render() {
    return (
      <MainPage>
        <div
          className={css`
            width: 50%;
            height: auto;
            ${mediaQueries.mobile} {
              width: 70%;
            }
            min-width: 300px;
            font-family: ${fonts.comic.body};
          `}
        >
          <Tilt
            className="Tilt"
            options={{
              reverse: true,
              scale: 1,
              max: 15,
              perspective: 1500,
              speed: 10000,
              reset: true
            }}
            style={{
              height: "auto",
              width: "100%"
            }}
          >
            <div className="Tilt-inner">
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  font-size: 20px;
                  padding: 20px;
                  border: 3px solid black;
                  border-radius: 20px;
                `}
              >
                <Giraffe src={"https://i.imgur.com/wSasxPZ.jpg"}></Giraffe>
                <TextHolder>
                  <Header>Hello :)</Header>
                  <P>
                    Welcome to my (WIP) site! Nothing much here yet but stay
                    tuned for cool stuff. Here's a{" "}
                    <Link
                      to="/story"
                      className={css`
                        color: ${settings.LinkColor};
                        text-decoration: none;
                        &:hover {
                          filter: brightness(140%);
                        }
                      `}
                    >
                      sneak peek
                    </Link>
                    !
                  </P>

                  <P>
                    Some links:{" "}
                    <LinkStyle
                      className={css`
                        font-weight: bold;
                      `}
                      href="http://novaforgood.org/"
                    >
                      Nova
                    </LinkStyle>
                    ,{" "}
                    <LinkStyle href="https://dailybruin.com/">
                      the Daily Bruin
                    </LinkStyle>
                    .
                  </P>

                  <P>
                    Also, here's my{" "}
                    <LinkStyle href="https://github.com/legitmaxwu">
                      GitHub
                    </LinkStyle>{" "}
                    and my{" "}
                    <LinkStyle href="https://www.linkedin.com/in/maxcwu/">
                      LinkedIn
                    </LinkStyle>
                    . (Feel free to connect and ping me about anything!)
                  </P>

                  <P>- Max</P>
                </TextHolder>
              </div>
            </div>
          </Tilt>
        </div>
      </MainPage>
    );
  }
}
