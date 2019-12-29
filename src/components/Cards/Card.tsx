import * as React from "react";
import { css } from "emotion";

// const imagesLoadedOptions = { background: ".my-bg-image-el" };

import { colors, fonts } from "../../shared/config";

class Card extends React.Component {
  render() {
    return (
      <div
        className={css`
          height: auto;
          width: 100%;
          box-shadow: 5px 5px 5px black;
        `}
      >
        <div
          className={css`
            /* margin: 5px; */
            padding: 30px;
            background-color: ${colors.white};
            font-style: ${fonts.booky.body};
          `}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
