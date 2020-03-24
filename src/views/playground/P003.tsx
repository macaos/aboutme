import React, { useEffect, useState } from "react";
import classnames from "classnames";

const P003 = () => {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOn(true);
    }, 500);
  }, []);
  return (
    <div className={classnames(["playground-item", { on: isOn }])}>P003</div>
  );
};

export default P003;
