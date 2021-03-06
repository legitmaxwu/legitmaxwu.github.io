// Copy paste this template to create a new component
// that can be put into the masonry layout!

import * as React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import Card from "./Card";

import { colors, fonts } from "../../shared/config";

const Image = styled("img")`
  width: 100%;
  height: auto;
`;

const ImageHolder = styled("div")`
  width: 100%;
  height: auto;
  position: relative;
`;

const Link = styled("div")`
  color: ${colors.teal};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface PhotoCardProps {
  value: {
    imageURL: string;
    imageAlt: string;
  };
}

class PhotoCard extends React.Component<PhotoCardProps, {}> {
  constructor(props: PhotoCardProps) {
    super(props);
    this.state = {
      showModal: false
    };
    this.setModalVisibility = this.setModalVisibility.bind(this);
  }

  setModalVisibility(state: boolean) {
    this.setState({ showModal: state });
  }

  render() {
    const { imageURL, imageAlt } = this.props.value;

    return (
      <Card>
        <div
          className={css`
            height: 100%;
            width: 100%;
          `}
        >
          <ImageHolder>
            <Image src={imageURL} alt={imageAlt} />
          </ImageHolder>
        </div>
      </Card>
    );
  }
}

export default PhotoCard;
