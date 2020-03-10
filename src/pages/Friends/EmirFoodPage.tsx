/// <reference path="./index.d.ts"/>

import React from "react";
import Tabletop from "tabletop";

import { css } from "emotion";
import styled from "@emotion/styled";

const FoodText = styled("div")`
  width: 200px;
`;
const PlaceText = styled("div")`
  width: 200px;
`;
const RatingBar = styled("div")`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const RatingNumber = styled("div")`
  width: 100px;
`;
const Notes = styled("div")`
  width: 300px;
`;
const RatingContainer = styled("div")`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
`;
interface FoodRatingsProps {
  sheetId: string;
}
interface FoodRatingsState {
  sheetsData: any[];
  showImages: boolean;
}
class FoodRatings extends React.Component<FoodRatingsProps, FoodRatingsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sheetsData: [],
      showImages: true
    };
    this.sort = this.sort.bind(this);
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

  sort(key: string, reverse: boolean) {
    let mult = reverse ? 1 : -1;
    this.setState({
      sheetsData: this.state.sheetsData.sort((first, second) => {
        let f = parseFloat(first[key]);
        let s = parseFloat(second[key]);
        if (f > s) return mult;
        if (f == s) return 0;
        else return -mult;
      })
    });
  }

  toggleImages() {
    this.setState({ showImages: !this.state.showImages });
  }

  render() {
    const { sheetId } = this.props;
    const { sheetsData } = this.state;
    if (sheetsData.length == 0) return <></>;
    return (
      <>
        <div className={css``}>
          <div
            className={css`
              position: sticky;
              top: 0;
              background-color: lightcoral;
              padding: 10px;
              border-bottom: 5px solid black;
            `}
          >
            <h3>Emir's Food Ratings (WIP)</h3>
            <button onClick={() => this.sort("Rating", false)}>
              Rating (high to low)
            </button>
            <button onClick={() => this.sort("Rating", true)}>
              Rating (low to high)
            </button>
            <button onClick={() => this.toggleImages()}>
              Toggle Showing Images
            </button>
          </div>

          {sheetsData.map((row, i) => {
            const ratingPercent = (parseFloat(row.Rating) / 10) * 100;
            return (
              <RatingContainer
                className={css`
                  background-color: ${i % 2 == 0 ? "rgba(0,0,0,0.1)" : "white"};
                `}
              >
                <FoodText>{row.Food}</FoodText>
                <PlaceText>{row.Place}</PlaceText>
                <RatingBar className={css``}>
                  <div
                    className={css`
                      height: 20px;
                      background-color: hsl(${ratingPercent + 10}, 70%, 50%);
                      width: ${ratingPercent * 0.9}%;
                    `}
                  ></div>
                </RatingBar>
                <RatingNumber>{row.Rating} / 10</RatingNumber>
                <Notes>{row.Description}</Notes>
                <img
                  src={row.imageURL}
                  className={css`
                    transition: 0.3s;
                    max-height: ${this.state.showImages ? "150px" : 0};
                    object-fit: cover;
                    width: 300px;
                  `}
                />
              </RatingContainer>
            );
          })}
        </div>
      </>
    );
  }
}
export const EmirFoodPage: React.FC = () => {
  return (
    <div
      className={css`
        height: 100%;
        color: black;
      `}
    >
      <FoodRatings
        sheetId={"1aoWRD5c43OAZpBvhxSLx6r00zhunzVTdBf3Wfr9DKy8"}
      ></FoodRatings>
    </div>
  );
};
