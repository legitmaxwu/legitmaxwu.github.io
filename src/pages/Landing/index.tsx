/// <reference path="./index.d.ts"/>

import React from "react";
import styled from "@emotion/styled";
import { css } from "emotion";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { mediaQueries, colors, fonts, Emoji } from "../../shared/config";
import { FaGithub } from "react-icons/fa";
const settings = {
  LinkColor: "#0078ed",
};

const Spacer = styled.div`
  width: 100%;
  height: 10px;
`;

const MainPage = styled("div")`
  background-color: white;

  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  ${mediaQueries.mobile} {
    padding: 0;
    flex-direction: column;
    height: auto;
  }
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
  font-family: ${fonts.landing.body};
  font-weight: 400;
  text-decoration: none;
  &:hover {
    /* filter: brightness(140%); */
    text-decoration: underline;
  }
  /* &::before {
    content: "→ ";
  } */
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
  font-family: ${fonts.landing.body};
  font-weight: 400;
  margin: 0;
  margin-top: 15px;
  ${mediaQueries.mobile} {
  }
`;

const ListItem = styled("li")`
  list-style-type: none;
  list-style-position: inside;
  text-indent: -0.9em;
  padding-left: 1em;
  font-family: ${fonts.landing.body};
  font-weight: 400;
  margin: 0;
  margin-top: 3px;
  &::before {
    content: "-\xa0\xa0";
  }
`;

const Header = styled("h1")`
  margin: 20px;
  ${mediaQueries.mobile} {
    margin: 16px;
  }
  font-family: ${fonts.landing.heading};
`;

const DesktopView = styled("div")`
  ${mediaQueries.mobile} {
    display: none;
  }
`;
const MobileView = styled("div")`
  ${mediaQueries.notMobile} {
    display: none;
  }
`;
const Img = styled("img")`
  object-fit: cover;
  width: 400px;
  filter: grayscale(45%) brightness(110%);
  ${mediaQueries.mobile} {
    width: 100%;
    max-height: 70vh;
  }
`;

const BodyText = styled("div")`
  width: 400px;
  box-sizing: border-box;
  padding: 30px;
  ${mediaQueries.mobile} {
    width: 100%;
  }
`;

const SemiBold = styled("span")`
  font-weight: 600;
`;

const NewHeader = styled("h1")`
  font-weight: 600;
  margin: 0;
  font-family: ${fonts.landing.heading};
`;

const OnlinePresenceLinks = () => {
  return (
    <React.Fragment>
      <LinkStyle
        target="_top"
        href="mailto:chengmaxwu@gmail.com?subject=Email me about anything"
      >
        Email
      </LinkStyle>
      {" | "}
      <LinkStyle target="_blank" href="https://www.linkedin.com/in/maxcwu/">
        LinkedIn
      </LinkStyle>
      {" | "}
      <LinkStyle target="_blank" href="https://github.com/legitmaxwu">
        Github
      </LinkStyle>
    </React.Fragment>
  );
};

export default class LandingPage extends React.Component {
  render() {
    return (
      <MainPage>
        <DesktopView>
          <Img src="https://i.imgur.com/Vjd0fNb.png" />
          <div>
            <Spacer />
            <OnlinePresenceLinks />
          </div>
        </DesktopView>
        <MobileView>
          <Img src="https://i.imgur.com/Vjd0fNb.png" />
        </MobileView>
        <BodyText>
          <NewHeader>Max Wu</NewHeader>
          <MobileView>
            <OnlinePresenceLinks />
          </MobileView>
          <P>
            Hi! I'm a junior studying CS at UCLA. I find much fulfillment in{" "}
            <b>building consumer products</b> and{" "}
            <b>understanding new perspectives</b>. One embarrassing fact about
            me is that I've changed the text here like 10 times already.
          </P>
          <P>
            If you think we'd vibe, please{" "}
            <LinkStyle
              target="_blank"
              href="https://www.linkedin.com/in/maxcwu/"
            >
              reach out
            </LinkStyle>{" "}
            for a chat!
          </P>
          <DesktopView>
            <Spacer />
            <Spacer />
          </DesktopView>

          <P>
            <SemiBold>Links</SemiBold>
          </P>
          <ListItem>
            <LinkStyle target="_blank" href="https://novaforgood.org/">
              <b>Nova</b>
            </LinkStyle>
          </ListItem>
          {/* <P>
            <SemiBold>Past</SemiBold>
          </P>
          <ListItem>
            <LinkStyle
              target="_blank"
              href="https://covidstories.dailybruin.com/"
            >
              COVID-19 Student Stories (Daily Bruin)
            </LinkStyle>
          </ListItem>
          <ListItem>
            <LinkStyle
              target="_blank"
              href="https://developer.ibm.com/callforcode/blogs/call-for-code-2019-finalist-rove/"
            >
              Natural disaster response routing
            </LinkStyle>
          </ListItem>
          <ListItem>
            <LinkStyle target="_blank" href="https://youtu.be/mrbjgF5SDc4">
              Efficient ocean-wave energy turbine
            </LinkStyle>
          </ListItem> */}
          {/* <P>
            <SemiBold>Other</SemiBold>
          </P> */}
          <ListItem>
            <LinkStyle
              target="_blank"
              href="https://maxcwu.home.blog/2017/12/12/lily-pads/"
            >
              A poem about frogs & life
            </LinkStyle>
          </ListItem>
          <ListItem>
            <Link
              to="/portfolio"
              className={css`
                color: ${settings.LinkColor};
                text-decoration: none;
                font-weight: 400;
                &:hover {
                  /* filter: brightness(140%); */
                  text-decoration: underline;
                }
              `}
            >
              Portfolio
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/story"
              className={css`
                color: ${settings.LinkColor};
                text-decoration: none;
                font-weight: 400;
                &:hover {
                  /* filter: brightness(140%); */
                  text-decoration: underline;
                }
              `}
            >
              Personal stuff
            </Link>
          </ListItem>
          <DesktopView>
            <Spacer />
            <Spacer />
            <Spacer />
          </DesktopView>
          <Spacer />
        </BodyText>
        {/* <div
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
        </div> */}
      </MainPage>
    );
  }
}
