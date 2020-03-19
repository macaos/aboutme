import { useHistory } from "react-router-dom";
import { Cubic, TweenLite } from "gsap";
import React, { useRef, useState } from "react";

const Header = () => {
  const history = useHistory();
  const elThis = useRef(null);
  const [headerState] = useState("main"); // main, sub

  return (
    <div className="view-Header">
      <div
        className="logo"
        onMouseOver={() => {
          TweenLite.to(elThis.current, 0.5, {
            opacity: 1,
            y: headerState === "sub" ? -20 : 0,
            ease: Cubic.easeInOut
          });
        }}
        onMouseOut={() => {
          if (headerState === "sub") {
            TweenLite.to(elThis.current, 0.5, {
              opacity: 0.1,
              y: -27,
              ease: Cubic.easeInOut
            });
          }
        }}
        onClick={() => {
          history.push("/");
        }}
        ref={elThis}
      >
        <div className="name name1">MA</div>
        <div className="name name2">
          <div className="line"></div>
        </div>
        <div className="name name3">CAO</div>
      </div>
    </div>
  );
};

export default Header;
