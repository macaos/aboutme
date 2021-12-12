import React, { useEffect, useState } from "react";
import classnames from "classnames";

const P002 = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  return (
    <div className={classnames(["item-002", "playground-item", { on: isOn }])}>
      P002
    </div>
  );
};

export default P002;
