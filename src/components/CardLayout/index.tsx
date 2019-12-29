/// <reference path="./index.d.ts"/>

import React from "react";
import Masonry from "react-masonry-css";
import { mediaQueries } from "../../shared/config";
import "./styles.css";

import PhotoCard from "../Cards/PhotoCard";
import Tabletop from "tabletop";

import styled from "@emotion/styled";

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

interface CardLayoutState {
  sheetsData: any;
}

export class CardLayout extends React.Component<{}, CardLayoutState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sheetsData: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1EwIwb7Vf8hwD80Bj4fW9OlBi-TjNZ7XXRVHx_Ow7lQo",
      callback: (googleData: any) => {
        this.setState({
          sheetsData: googleData
        });
      },
      simpleSheet: true
    });
  }

  render() {
    return (
      <div>
        <MobileView>
          <Masonry
            breakpointCols={1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.state.sheetsData &&
              this.state.sheetsData.map((photo: any) => (
                <PhotoCard value={photo} />
              ))}
          </Masonry>
        </MobileView>
        <DesktopView>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.state.sheetsData &&
              this.state.sheetsData.map((photo: any) => (
                <PhotoCard value={photo} />
              ))}
          </Masonry>
        </DesktopView>
      </div>
    );
  }
}
