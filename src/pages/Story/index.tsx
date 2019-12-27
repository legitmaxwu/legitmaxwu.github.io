import React from "react";

import Parallax from "../../components/StoryParallax";

import { css } from "emotion";

export default class StoryPage extends React.Component {
  render() {
    return (
      <div>
        <Parallax />
        <div
          className={css`
            height: 100vh;
            background-color: black;
            width: 100%;
            /* background-color: #010220; */
            background-image: linear-gradient(#010220, gray);
            z-index: 10;
            color: white;

            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          Hello! Nothing here yet but I will add a lot of fun stuff soon!
        </div>
      </div>
    );
  }
}
