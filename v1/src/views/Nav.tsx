import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./Components/MenuButton";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import EventEmitter, { Event } from "../utils/EventEmitter";

const Nav = () => {
  console.log("useEffect");
  // const [isShow, setIsShow] = useState(true);
  const [prevPath, setPrevPath] = useState("");
  const history = useHistory();
  const [isUnmouse, setIsUnmouse] = useState(false); // 사라지기 전 마우스 액션이 통과할지 여부
  const [isNone, setIsNone] = useState(false); // 안보일래?

  useEffect(() => {
    // 최초에 history 체크
    const pathname = history.location.pathname;
    if (pathname !== "/") {
      // 메인이 아닌경우
      setIsUnmouse(true); // 액션 막음
      setIsNone(true); // 사라짐
      // 안보이지만 사라져야 다시 나타날때 애니메이션으로 나타남
      EventEmitter.dispatch(Event.CHANGE_NAV_STATE, false);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect1");
    const pathname = history.location.pathname;
    if (pathname === "/") {
      EventEmitter.dispatch(Event.CHANGE_NAV_STATE, true);
      setIsNone(false); // 보여짐
      setTimeout(() => {
        setIsUnmouse(false); // 액션가능
      }, 2500);
    } else {
      // 직전 state가 home인경우만 CHANGE_NAV_STATE 발생
      // 매번 발생하게되면 파티클 애니메이션이 계속 실행됨
      if (prevPath === "/") {
        setIsUnmouse(true); // 액션막음
        setTimeout(() => {
          setIsNone(true); // 안보여짐
        }, 2500);
        EventEmitter.dispatch(Event.CHANGE_NAV_STATE, false);
      }
    }
    setPrevPath(pathname);
  }, [history.location.pathname]);

  const onClick = () => {
    EventEmitter.dispatch(Event.CHANGE_HISTORY, "");
  };

  return (
    <div
      className={classnames("view-Nav", {
        "is-unmouse": isUnmouse,
        "is-none": isNone
      })}
    >
      <div>
        <Link className="menu" to="/career" onClick={onClick}>
          <MenuButton letter="Career" />
        </Link>
        <Link className="menu" to="/experience" onClick={onClick}>
          <MenuButton letter="Experience" />
        </Link>
        <Link className="menu" to="/playground" onClick={onClick}>
          <MenuButton letter="Playground" />
        </Link>
        <Link className="menu" to="/me" onClick={onClick}>
          <MenuButton letter="Me" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
