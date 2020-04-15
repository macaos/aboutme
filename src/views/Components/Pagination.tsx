import React, { ReactElement } from "react";
import RollingNumber from "./RollingNumber";
import { forEach } from "lodash";
import { css } from "emotion";

const Pagination = ({
  currentPage,
  totalPages
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const RollingNumbers: ReactElement[] = [];
  forEach(totalPages + "", (item, i) => {
    RollingNumbers.push(
      <RollingNumber size="12px" letter={item} randomEffect={false} />
    );
  });
  return (
    <div
      className={css`
        label: pagination-wrapper;
        width: 40px;
        border: 1px solid #99999900;
        display: inline-block;
        text-align: center;
      `}
    >
      <RollingNumber
        size="30px"
        letter={currentPage + ""}
        randomEffect={false}
      />
      <div
        className={css`
          label: diagonal-line;
          position: relative;
          z-index: 1;
          width: 18px;
          margin-left: 12px;
          left: 0px;
          height: 1px;
          background-color: #000;
          transform: rotate(-46deg);
        `}
      ></div>
      <div
        className={css`
          label: total-num;
          margin-top: 8px;
        `}
      >
        {RollingNumbers}
      </div>
    </div>
  );
};

export default Pagination;
