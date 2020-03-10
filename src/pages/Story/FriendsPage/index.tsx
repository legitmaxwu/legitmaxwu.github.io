import React from "react";

import { css } from "emotion";

import { Link, useRouteMatch } from "react-router-dom";

export const FriendsPage: React.FC = () => {
  return (
    <div
      className={css`
        width: 90%;
        margin: 0 auto;
      `}
    >
      <Link
        to={"/emir"}
        className={css`
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
        `}
      >
        Emir's Food Ratings
      </Link>
    </div>
  );
};
