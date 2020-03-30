import React, { useState, useEffect } from "react";
import classnames from "classnames";

const Me = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  return <ul className={classnames(["depth1 view-Me", { on: isOn }])}>MEME</ul>;
};

export default Me;
