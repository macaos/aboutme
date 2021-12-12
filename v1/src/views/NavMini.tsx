import React, { Component } from "react";
import MenuButtonMini from "./Components/MenuButtonMini";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import EventEmitter, { Event } from "../utils/EventEmitter";
import classnames from "classnames";

interface INavMiniProps {}
interface INavMiniState {}

class NavMini extends Component<INavMiniProps, INavMiniState> {
  private history = createBrowserHistory();

  public state = {
    activeName: ""
  };

  private constructor(props: INavMiniProps) {
    super(props);
    EventEmitter.subscribe(Event.CHANGE_HISTORY, () => {
      setTimeout(() => {
        this.setActiveName();
      });
    });

    // Color Change Trigger
    EventEmitter.subscribe(Event.CHANGE_PLAYGROUND_COLOR, (inData: any) => {
      inData = {
        txtColor: "#FFF",
        txtMidColor: "#444",
        txtActiveColor: "#FF0000"
      };
    });
  }

  private setActiveName() {
    this.history = createBrowserHistory();
    const activeName = this.history.location.pathname.substring(1);
    this.setState({
      ...this.state,
      activeName: activeName
    });
    console.log("activeNameactiveName", activeName);
    if (activeName === "") {
      // 사라짐
    } else {
      // 나타남
    }
    window.scrollTo(0, 0);
  }

  scrollToTop(scrollDuration: number) {
    var cosParameter = window.scrollY / 2,
      scrollCount = 0,
      oldTimestamp = performance.now();
    function step(newTimestamp: number) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(
        0,
        Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
      );
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  public onManuClick = (name: string): void => {
    EventEmitter.dispatch(Event.CLICK_NAV_MINI, name);
    setTimeout(() => {
      this.setActiveName();
    });
  };

  public componentDidMount() {
    this.setActiveName();
    this.history.listen((location: any, action: string) => {
      this.setActiveName();
    });
  }
  render() {
    const n: string = this.state.activeName;
    return (
      <div className="view-NavMini">
        <div className="select-lang">
          <div className="en active">EN</div>
          <div className={classnames(["underline"])}></div>
          <div className="ko">KO</div>
        </div>
        <Link to="/" className="btn-menu">
          <div
            className={classnames(["line menu1", { active: n === "career" }])}
          ></div>
          <div
            className={classnames([
              "line menu2",
              { active: n === "experience" }
            ])}
          ></div>
          <div
            className={classnames([
              "line menu3",
              { active: n === "playground" }
            ])}
          ></div>
          <div
            className={classnames(["line menu4", { active: n === "me" }])}
          ></div>
        </Link>
      </div>
    );
  }
}

export default NavMini;
