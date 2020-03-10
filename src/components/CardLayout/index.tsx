/// <reference path="./index.d.ts"/>

import React from "react";
import Masonry from "react-masonry-css";
import { SpringGrid } from "react-stonecutter";
import { mediaQueries } from "../../shared/config";
import "./styles.css";

import Tabletop from "tabletop";

import styled from "@emotion/styled";
import { css } from "emotion";

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

interface CardLayoutProps {
  columns: number;
  sheetId: string;
  cardComponent: React.ComponentClass<{ value: any }>;
}

export class CardLayout extends React.Component<
  CardLayoutProps,
  CardLayoutState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      sheetsData: []
    };
  }
  componentDidMount() {
    const { sheetId } = this.props;
    Tabletop.init({
      key: sheetId,
      callback: (googleData: any) => {
        this.setState({
          sheetsData: googleData
        });
      },
      simpleSheet: true
    });
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: 10,
      itemClassName: "item",
      gridWidth: 100,
      transitionDuration: ".5"
    };
  }

  render() {
    const { columns } = this.props;
    return (
      <div>
        <MobileView>
          <Masonry
            breakpointCols={1}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.state.sheetsData &&
              this.state.sheetsData.map((row: any) =>
                React.createElement(this.props.cardComponent, {
                  value: row
                })
              )}
          </Masonry>
        </MobileView>
        <DesktopView>
          <Masonry
            breakpointCols={columns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.state.sheetsData &&
              this.state.sheetsData.map((row: any) =>
                React.createElement(this.props.cardComponent, {
                  value: row
                })
              )}
          </Masonry>
          {/* <SpringGrid
            component="ul"
            columns={5}
            columnWidth={"20%"}
            gutterWidth={5}
            gutterHeight={5}
            itemHeight={200}
            springConfig={{ stiffness: 170, damping: 26 }}
          >
            {this.state.sheetsData &&
              this.state.sheetsData.map((row: any, i: number) => (
                <li
                  key={i}
                  // className={css`
                  //   width: 100%;
                  //   height: 100%;
                  // `}
                >
                  {React.createElement(this.props.cardComponent, {
                    value: row
                  })}
                </li>
              ))}
          </SpringGrid> */}
        </DesktopView>
      </div>
    );
  }
}
