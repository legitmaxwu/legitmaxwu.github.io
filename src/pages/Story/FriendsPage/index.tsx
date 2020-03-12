import React from "react";

import { css } from "emotion";
import styled from "@emotion/styled";

import { Link, useRouteMatch } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  text-align: center;
  color: white;
  align-items: center;
  padding: 20px 25px;
  text-decoration: none;
  &:hover {
    /* font-weight: 700; */
    text-shadow: 0px 0px 10px white;
  }
`;
export const FriendsPage: React.FC = () => {
  return (
    <div
      className={css`
        width: 90%;
        margin: 0 auto;
      `}
    >
      <StyledLink to={"/emir"} className={css``}>
        Emir's Food Ratings
      </StyledLink>
      <StyledLink to={"/patrick"} className={css``}>
        Patrick's Book Ratings
      </StyledLink>
    </div>
  );
};
