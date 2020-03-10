/// <reference path="./index.d.ts"/>

import React from "react";
import styled from "@emotion/styled";
import { css } from "emotion";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

import { mediaQueries, colors, fonts, Emoji } from "../../shared/config";

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
  ${mediaQueries.mobile} {
    font-size: 14px;
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
  margin: 15px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px dotted gray;
  ${mediaQueries.tablet} {
    display: none;
  }
`;

const P = styled("p")`
  margin: 20px;
  ${mediaQueries.mobile} {
    margin: 16px;
  }
`;

const Header = styled("h1")`
  margin: 20px;
  ${mediaQueries.mobile} {
    margin: 16px;
  }
  font-family: ${fonts.comic.heading};
`;

export default class LandingPage extends React.Component {
  render() {
    return (
      <MainPage>
        <div
          className={css`
            width: 65%;
            height: auto;
            ${mediaQueries.mobile} {
              width: 80%;
            }
            min-width: 300px;
            font-family: ${fonts.comic.body};
          `}
        >
          <Tilt
            className="Tilt"
            options={{
              reverse: true,
              scale: 1.02,
              max: 13,
              perspective: 1000,
              speed: 20000,
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
                  ${mediaQueries.mobile} {
                    padding: 10px;
                  }
                  border: 3px solid black;
                  border-radius: 20px;
                `}
              >
                <Giraffe src={"https://i.imgur.com/wSasxPZ.jpg"}></Giraffe>

                <TextHolder>
                  <Header>Hello :)</Header>
                  <P>
                    Welcome to my site! <Emoji label="wave" symbol="👋" /> I'm a
                    second-year student at UCLA. I strive to{" "}
                    <span
                      className={css`
                        color: #089ed1;
                        font-weight: bold;
                      `}
                    >
                      make waves
                    </span>{" "}
                    <Emoji label="wave" symbol="🌊" /> in interesting ways.
                  </P>

                  <P>
                    Right now, I'm most invested in building{" "}
                    <LinkStyle
                      className={css`
                        font-weight: bold;
                      `}
                      href="http://novaforgood.org/"
                      target="_blank"
                    >
                      Nova <Emoji label="stars" symbol="✨" />
                    </LinkStyle>
                    , where we connect college students with nonprofits through
                    pro-bono collaborations. I also lead the External Sites team
                    at the{" "}
                    <LinkStyle
                      className={css`
                        font-weight: bold;
                      `}
                      href="https://dailybruin.com/about/"
                      target="_blank"
                    >
                      Daily Bruin <Emoji label="memo" symbol="📝" />
                    </LinkStyle>
                    , where we use multimedia to tell stories like the{" "}
                    <LinkStyle
                      href="http://dailytrojan.dailybruin.com/"
                      target="_blank"
                    >
                      this
                    </LinkStyle>
                    ,{" "}
                    <LinkStyle
                      href="https://features.dailybruin.com/2019/beyondthereports/"
                      target="_blank"
                    >
                      this
                    </LinkStyle>
                    , and{" "}
                    <LinkStyle
                      href="https://features.dailybruin.com/2019/wasted-opportunity/"
                      target="_blank"
                    >
                      this
                    </LinkStyle>
                    .
                  </P>

                  <P>
                    Check out my{" "}
                    <LinkStyle
                      href="https://maxcwu.home.blog/"
                      target="_blank"
                      className={css`
                        font-weight: bold;
                      `}
                    >
                      blog <Emoji label="pencil" symbol="✏️" />
                    </LinkStyle>{" "}
                    and my{" "}
                    <LinkStyle
                      href="https://github.com/legitmaxwu"
                      target="_blank"
                      className={css`
                        font-weight: bold;
                      `}
                    >
                      GitHub <Emoji label="computer" symbol="🖥️" />
                    </LinkStyle>
                    . Also, here's my{" "}
                    <LinkStyle
                      href="https://www.linkedin.com/in/maxcwu/"
                      target="_blank"
                      className={css`
                        font-weight: bold;
                      `}
                    >
                      LinkedIn <Emoji label="handshake" symbol="🤝" />
                    </LinkStyle>
                    . I put some of my interests there, so connect with me and
                    let's talk!
                  </P>

                  <P>- Max</P>

                  <P>
                    PS: my real website is{" "}
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
                      here
                    </Link>{" "}
                    :P (I'd love for you to check it out!)
                  </P>
                </TextHolder>
              </div>
            </div>
          </Tilt>
        </div>
      </MainPage>
    );
  }
}
