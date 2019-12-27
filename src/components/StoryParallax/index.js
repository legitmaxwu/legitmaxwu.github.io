import React from "react";
import "./Parallax.scss";
import { css } from "emotion";

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
              font-style: "Times New Roman";
              font-size: 72px;
              margin: 150px;
              @media (max-width: 700px) {
                font-size: 60px;
              }
            `}
          >
            The Story of Max Wu (wip)
          </div>
        </div>
        <div className="parallax-layer" id="layer-1" data-speed="100" />
      </div>
    );
  }
}
