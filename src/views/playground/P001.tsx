import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { css } from "emotion";
import Pagination from "../Components/Pagination";

const P001 = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  return (
    <div
      className={classnames(
        css`
          background-color: white;
        `,
        ["playground-item", { on: isOn }]
      )}
    >
      P001
      <Pagination currentPage={9} totalPages={24} />
    </div>
  );
};

export default P001;
