import React, { Component } from "react";
import MenuButtonMini from "./Components/MenuButtonMini";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import EventEmitter, { Event } from "../utils/EventEmitter";

interface INavMiniProps {}
interface INavMiniState {}

class NavMini extends Component<INavMiniProps, INavMiniState> {
  private history = createBrowserHistory();
  private menu1: any = null;
  private menu2: any = null;
  private menu3: any = null;
  private menu4: any = null;
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
  }

  private setActiveName() {
    this.history = createBrowserHistory();
    const activeName = this.history.location.pathname.substring(1);
    this.setState({
      ...this.state,
      activeName: activeName
    });
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
    return (
      <div className="view-NavMini">
        <div className="labels">
          <Link to="/" className="icon-home"></Link>
          <Link to="/Career">
            <MenuButtonMini
              label="Career"
              clickHandler={this.onManuClick}
              activeName={this.state.activeName}
            />
          </Link>
          <Link to="/Experience">
            <MenuButtonMini
              label="Experience"
              clickHandler={this.onManuClick}
              activeName={this.state.activeName}
            />
          </Link>
          <Link to="/Playground">
            <MenuButtonMini
              label="Playground"
              clickHandler={this.onManuClick}
              activeName={this.state.activeName}
            />
          </Link>
          <Link to="/Me">
            <MenuButtonMini
              label="Me"
              clickHandler={this.onManuClick}
              activeName={this.state.activeName}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default NavMini;
