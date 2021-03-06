import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";

import { CardLayout } from "../../../components/CardLayout";
import PhotoCard from "../../../components/Cards/ArtCard";

export const ArtPage: React.FC = () => {
  return (
    <div
      className={css`
        width: 90%;
        margin: 0 auto;
      `}
    >
      <CardLayout
        sheetId="1EwIwb7Vf8hwD80Bj4fW9OlBi-TjNZ7XXRVHx_Ow7lQo"
        columns={3}
        cardComponent={PhotoCard}
      />
    </div>
  );
};
