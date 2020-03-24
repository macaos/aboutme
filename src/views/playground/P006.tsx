import React, { useEffect, useState } from "react";
import classnames from "classnames";

const P006 = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  return (
    <div className={classnames(["playground-item", { on: isOn }])}>P006</div>
  );
};

export default P006;
