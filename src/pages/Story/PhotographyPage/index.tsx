import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";

import { CardLayout } from "../../../components/CardLayout";
import PhotoCard from "../../../components/Cards/PhotoCard";

export const PhotographyPage: React.FC = () => {
  return (
    <div
      className={css`
        width: 90%;
        margin: 0 auto;
      `}
    >
      <CardLayout
        sheetId="1Ku9E9p1u52nVzTF71DNqSOCuecB2UK8Odyi8paDw9PI"
        columns={4}
        cardComponent={PhotoCard}
      />
    </div>
  );
};
