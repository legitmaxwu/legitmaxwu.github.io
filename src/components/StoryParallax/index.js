import React from "react";
import "./Parallax.scss";
import { css } from "emotion";
import { fonts, mediaQueries, colors } from "../../shared/config";

export default class StoryParallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("scroll", function(e) {
      const layers = Array.from(document.querySelectorAll(".parallax-layer"));
      let topDistance = window.pageYOffset;

      layers.forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        let movement = -((topDistance * speed) / 100);
        layer.style.transform = `translateY(${movement}px)`;
      });
    });
  }

  render() {
    return (
      <div className="Parallax" ref={c => (this.container = c)}>
        <div className="parallax-layer" id="layer-0" data-speed="40">
          <div
            className={css`
              font-family: ${fonts.booky.heading};
              font-size: 72px;
              text-align: center;
              margin: 80px;
              ${mediaQueries.mobile} {
                font-size: 60px;
                margin: 80px 40px;
              }
            `}
          >
            The Story of Max Wu
          </div>
        </div>
        <div className="parallax-layer" id="layer-1" data-speed="100"></div>
      </div>
    );
  }
}
