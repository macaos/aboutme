import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavTextLabel from "./Components/MenuButton";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import EventEmitter, { Event } from "../utils/EventEmitter";
// import "../fontello/css/fontello.css";

const Nav = () => {
  const [prevPath, setPrevPath] = useState("");
  const history = useHistory();
  const [isUnmouse, setIsUnmouse] = useState(false); // point events none before hide
  const [isNone, setIsNone] = useState(false); // hide?

  useEffect(() => {
    // first check history
    const pathname = history.location.pathname;
    if (pathname !== "/") {
      // !main
      setIsUnmouse(true); // point events none
      setIsNone(true); // hide
      //
      EventEmitter.dispatch(Event.CHANGE_NAV_STATE, false);
    }
  }, []);

  useEffect(() => {
    const pathname = history.location.pathname;
    if (pathname === "/") {
      EventEmitter.dispatch(Event.CHANGE_NAV_STATE, true);
      setIsNone(false); // show
      setTimeout(() => {
        setIsUnmouse(false); // point events
      }, 2500);
    } else {
      // dispatch CHANGE_NAV_STATE only when the previous state is 'home'
      //      if call everytime every run particle animation
      if (prevPath === "/") {
        setIsUnmouse(true); // point events none
        setTimeout(() => {
          setIsNone(true); // hide
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
          <NavTextLabel letter="Career" />
        </Link>
        <Link className="menu" to="/experience" onClick={onClick}>
          <NavTextLabel letter="Experience" />
        </Link>
        <Link className="menu" to="/playground" onClick={onClick}>
          <NavTextLabel letter="Playground" />
        </Link>
        <Link className="menu" to="/me" onClick={onClick}>
          <NavTextLabel letter="Me" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
