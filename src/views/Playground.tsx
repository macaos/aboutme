import React, {
  Component,
  useState,
  lazy,
  Suspense,
  Fragment,
  useEffect
} from "react";
import PlaygroundItem from "./Components/PlaygroundItem";
import { Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { css } from "emotion";
import P001 from "./playground/P001";
import P002 from "./playground/P002";
import P003 from "./playground/P003";
import P004 from "./playground/P004";
import P005 from "./playground/P005";
import P006 from "./playground/P006";
import P007 from "./playground/P007";
import P008 from "./playground/P008";
import arrowLeft from "../assets/angle-left.svg";
import arrowRight from "../assets/angle-right.svg";
import Pagination from "./Components/Pagination";

class Playground extends Component {
  private history = createBrowserHistory();
  private playgroundList = getPlaygroundList();
  public state = {
    pageIdx: 1,
    pageTotal: 21,
    redirectTo: ""
  };

  constructor(props: {}) {
    super(props);
    this.state.pageTotal = 17; //this.playgroundList.length;
  }

  componentDidMount() {
    this.history.listen((location: any, action: any) => {
      this.changePageIdxToHistory();
    });
    console.log("history", this.history);
    this.changePageIdxToHistory();
  }
  changePageIdxToHistory() {
    this.history = createBrowserHistory();
    const { pathname } = this.history.location;
    let redirectTo = "";
    let pageIdx: number = parseInt(pathname.substring(pathname.length - 1));
    // if (!pageIdx)
    if (!pageIdx) {
      setTimeout(() => {
        pageIdx = 1;
        // this.history.push("/playground/1");

        // this.context.router.history.push("/playground/1");
        // this.props.history.push();
        redirectTo = "/playground/1";
        this.changePageIdx(pageIdx, redirectTo);
      });
    } else {
      this.changePageIdx(pageIdx, redirectTo);
    }
    console.log("getNextPageIdx", this.history, pathname, pageIdx);
  }
  changePageIdx(idx: number, redirectTo: string) {
    this.setState({
      ...this.state,
      pageIdx: idx,
      redirectTo: redirectTo
    });
  }
  getForwardPageIdx(): number {
    const currentPageIdx = this.state.pageIdx;
    if (currentPageIdx >= this.playgroundList.length) {
      return 1;
    } else {
      return currentPageIdx + 1;
    }
  }
  getBackPageIdx(): number {
    const currentPageIdx = this.state.pageIdx;
    if (currentPageIdx <= 1) {
      return this.playgroundList.length;
    } else {
      return currentPageIdx - 1;
    }
  }

  render() {
    console.log("render");
    return (
      <div className="view-modal view-Playground">
        <div className="playground-header">header</div>
        <div className="playground-contents">
          <Route path="/playground/1" component={P001} />
          <Route path="/playground/2" component={P002} />
          <Route path="/playground/3" component={P003} />
          <Route path="/playground/4" component={P004} />
          <Route path="/playground/5" component={P005} />
          <Route path="/playground/6" component={P006} />
          <Route path="/playground/7" component={P007} />
        </div>
        <div className="playground-footer">
          {/* <Link to="/" className="icon-home"></Link> */}
          <div className="playnavi float-right">
            {this.state.redirectTo !== "" && (
              <Redirect to={this.state.redirectTo} />
            )}
            <div className="btns">
              <Link
                to={`/playground/${this.getBackPageIdx()}`}
                onClick={() => {
                  setTimeout(() => {
                    this.changePageIdxToHistory();
                  });
                }}
                className="btn-back-forward back icon-angle-left"
              >
                {/* 다음 */}
                {/* <img src={arrowRight}></img> */}
              </Link>
            </div>
            <div className="btns">
              <Link
                to={`/playground/${this.getForwardPageIdx()}`}
                onClick={() => {
                  setTimeout(() => {
                    this.changePageIdxToHistory();
                  });
                }}
                className="btn-back-forward forward icon-angle-right"
              ></Link>
            </div>
            <Pagination
              currentPage={this.state.pageIdx}
              totalPages={this.state.pageTotal}
            />
          </div>
        </div>
      </div>
    );
  }
}

function getPlaygroundList(): any[] {
  return [
    {
      title: "list drag & change order",
      tag: ["prototype"],
      key: "pbrwbjhcfg",
      detail: "P001"
    },
    {
      title: "wireframe",
      tag: ["css"],
      key: "ayevqwosfp",
      detail: "P002"
    },
    {
      title: "3d card",
      tag: ["test"],
      key: "mzhkxustty",
      detail: "P003"
    },
    {
      title: "sentense progress",
      tag: ["css"],
      key: "nkpkjdrmnr",
      detail: "P004"
    },
    {
      title: "navigation",
      tag: ["prototype"],
      key: "vmctjxayaz",
      detail: "P005"
    },
    {
      title: "svg filter & drag",
      tag: ["filter"],
      key: "txzrgznlts",
      detail: "P006"
    },
    {
      title: "flip 3d card",
      tag: ["test"],
      key: "gtiwwdwfsm",
      detail: "P007"
    }
  ];
}

export default Playground;
