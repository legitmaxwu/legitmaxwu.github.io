import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";

import { CardLayout } from "../../../components/CardLayout";

export const ArtPage: React.FC = () => {
  return (
    <div
      className={css`
        width: 90%;
        margin: 0 auto;
      `}
    >
      <CardLayout />
    </div>
  );
};
