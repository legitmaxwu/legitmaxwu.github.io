import React from "react";

export const Emoji = (props: any) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export const mediaQueries = {
  tablet: "@media (max-width: 1000px)",
  mobile: "@media (max-width: 700px)",
  notMobile: "@media (min-width: 701px)"
};
export const colors = {
  teal: "#008080",
  black: "black",
  white: "white"
};

export const fonts = {
  comic: {
    heading: "Quicksand",
    body: "Nunito"
  },
  booky: {
    heading: "Alegreya",
    body: "Alegreya"
  }
};
