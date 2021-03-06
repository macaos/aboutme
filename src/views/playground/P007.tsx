import React, { useEffect, useState } from "react";
import classnames from "classnames";

const P007 = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  return (
    <div className={classnames(["playground-item", { on: isOn }])}>P007</div>
  );
};

export default P007;
