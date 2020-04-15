import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { css } from "emotion";
import Pagination from "../Components/Pagination";
import EventEmitter, { Event } from "../../utils/EventEmitter";

const P001 = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // Color Change Trigger
      EventEmitter.dispatch(Event.CHANGE_PLAYGROUND_COLOR, {
        txtColor: "#FFF",
        txtMidColor: "#444",
        txtActiveColor: "#FF0000"
      });
      setIsOn(true);
    }, 500);
  }, []);
  return (
    <div
      className={classnames([
        css`
          background-color: #000;
        `,
        "playground-item",
        { on: isOn }
      ])}
    >
      <Pagination currentPage={9} totalPages={24} />
    </div>
  );
};

export default P001;
