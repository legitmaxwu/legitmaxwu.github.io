/// <reference path="./index.d.ts"/>

import React from "react";
import Tabletop from "tabletop";

import { css } from "emotion";
import styled from "@emotion/styled";

const BookText = styled("div")`
  width: 200px;
  margin-right: 20px;
`;
const AuthorText = styled("div")`
  width: 140px;
  margin-right: 20px;
`;
const GenreText = styled("div")`
  width: 140px;
  margin-right: 20px;
`;
const LengthText = styled("div")`
  width: 60px;
  margin-right: 20px;
`;
const RatingBar = styled("div")`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const RatingNumber = styled("div")`
  width: 100px;
`;
const Notes = styled("div")`
  width: 500px;
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
class BookRatings extends React.Component<FoodRatingsProps, FoodRatingsState> {
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
              background-color: lightcyan;
              padding: 10px;
              border-bottom: 5px solid black;
            `}
          >
            <h3>Patrick's Book Ratings (WIP)</h3>
            <button onClick={() => this.sort("Rating", false)}>Rating ↓</button>
            <button onClick={() => this.sort("Rating", true)}>Rating ↑</button>
            <button onClick={() => this.sort("Length", false)}>Length ↓</button>
            <button onClick={() => this.sort("Length", true)}>Length ↑</button>
            <button onClick={() => this.sort("Year", false)}>Year ↓</button>
            <button onClick={() => this.sort("Year", true)}>Year ↑</button>
            <button onClick={() => this.toggleImages()}>
              Toggle Showing Images
            </button>
          </div>

          {sheetsData.map((row, i) => {
            const ratingPercent = (parseFloat(row.Rating) / 5) * 100;
            return (
              <RatingContainer
                className={css`
                  background-color: ${i % 2 == 0
                    ? "rgba(0,0,0,0.3)"
                    : "rgba(0, 0, 0, 0.2)"};
                `}
              >
                <BookText>{row.Title}</BookText>
                <AuthorText>{row.Author}</AuthorText>
                <GenreText>{row.Genre}</GenreText>
                <LengthText>{row.Length}</LengthText>
                <LengthText>{row.Year}</LengthText>
                <RatingBar className={css``}>
                  {/* <div
                    className={css`
                      height: 20px;
                      background-color: hsl(${ratingPercent + 10}, 70%, 50%);
                      width: ${ratingPercent * 0.9}%;
                    `}
                  ></div> */}
                  <div
                    className={css`
                      display: inline-block;
                      font-size: 12;
                      font-family: Times; // make sure ★ appears correctly
                      line-height: 1;
                      letter-spacing: 3px;
                      background: linear-gradient(
                        90deg,
                        #fc0 ${ratingPercent}%,
                        #fff ${ratingPercent}%
                      );
                      /* background-color: red; */
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                    `}
                  >
                    ★★★★★
                  </div>
                </RatingBar>
                <RatingNumber>{row.Rating}</RatingNumber>
                <Notes>{row.Thoughts}</Notes>
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
export const PatrickBooksPage: React.FC = () => {
  return (
    <div
      className={css`
        height: 100%;
        color: black;
      `}
    >
      <BookRatings
        sheetId={"1mVLLG9JurON2fcSdVu6Xr3Bbx_Tn5niQ3trRl67OeCQ"}
      ></BookRatings>
    </div>
  );
};
