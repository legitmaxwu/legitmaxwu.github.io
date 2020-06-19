/// <reference path="./index.d.ts"/>

import React from "react";
import Tabletop from "tabletop";

import { css } from "emotion";
import styled from "@emotion/styled";

const FoodText = styled("div")`
  width: 50px;
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
interface SmoothiesProps {
  sheetId: string;
}
interface SmoothiesState {
  sheetsData: any[];
  showImages: boolean;
  selectedIngredient: string;
  ingredients: string[];
}
class Smoothies extends React.Component<SmoothiesProps, SmoothiesState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sheetsData: [],
      showImages: true,
      selectedIngredient: "All",
      ingredients: [],
    };
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    const { sheetId } = this.props;
    Tabletop.init({
      key: sheetId,
      callback: (googleData: any) => {
        console.log(googleData);
        const uniqueIngredients = [
          "All",
          ...googleData
            .map((item: any) =>
              item.Recipe.split("\n").map(
                (entry: any) => entry.split(" ").slice(-1)[0]
              )
            )
            .flat()
            .map((item: any) => item.trim())
            .filter((v: any, i: any, a: any) => a.indexOf(v) === i)
            .filter((v: any) => v != ""),
        ];
        this.setState({
          sheetsData: googleData,
          ingredients: uniqueIngredients,
        });
      },
      simpleSheet: true,
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
      }),
    });
  }

  toggleImages() {
    this.setState({ showImages: !this.state.showImages });
  }

  render() {
    const { sheetId } = this.props;
    const { selectedIngredient, ingredients } = this.state;
    if (this.state.sheetsData.length == 0) return <></>;

    let sheetsData = this.state.sheetsData;
    if (selectedIngredient != "All") {
      sheetsData = sheetsData.filter((row: any) =>
        row.Recipe.split("\n")
          .map((entry: any) => entry.split(" ").slice(-1)[0])
          .flat()
          .map((item: any) => item.trim())
          .filter((v: any, i: any, a: any) => a.indexOf(v) === i)
          .filter((v: any) => v != "")
          .includes(selectedIngredient)
      );
    }
    return (
      <>
        <div className={css``}>
          <div
            className={css`
              position: sticky;
              top: 0;
              background-color: lightsteelblue;
              padding: 10px;
              border-bottom: 5px solid black;
            `}
          >
            <h3>Cindy's Smoothies (WIP)</h3>
            <button onClick={() => this.sort("Rating", false)}>
              Rating (high to low)
            </button>
            <button onClick={() => this.sort("Rating", true)}>
              Rating (low to high)
            </button>
            <button onClick={() => this.toggleImages()}>
              Toggle Showing Images
            </button>
            <select
              id="ingredients"
              onChange={(e) => {
                this.setState({ selectedIngredient: e.target.value });
              }}
            >
              {ingredients.map((g) => (
                <option>{g}</option>
              ))}
            </select>
          </div>

          {sheetsData.map((row, i) => {
            const ratingPercent = (parseFloat(row.Rating) / 10) * 100;
            return (
              <RatingContainer
                className={css`
                  background-color: ${i % 2 == 0 ? "rgba(0,0,0,0.1)" : "white"};
                `}
              >
                <FoodText>{row["Day #"]}</FoodText>
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
                <Notes>
                  {row.Recipe.split("\n").map((item: any) => {
                    if (item.split(" ").splice(-1) == selectedIngredient)
                      return (
                        <div>
                          <b>{item}</b>
                        </div>
                      );
                    else return <div>{item}</div>;
                  })}
                </Notes>
                <Notes>
                  {row.Comments.split("\n").map((item: any) => (
                    <div>{item}</div>
                  ))}
                </Notes>
                <img
                  src={row.Pic}
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
export const CindySmoothiesPage: React.FC = () => {
  return (
    <div
      className={css`
        height: 100%;
        color: black;
      `}
    >
      <Smoothies
        sheetId={"1WvDHjCARh07KkYMVGtEcxZxUjVBPziiFb5oS6wvkjZc"}
      ></Smoothies>
    </div>
  );
};
