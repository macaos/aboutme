import React from "react";
import "./scss/App.scss";
import "normalize.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./views/Header";
import Experience from "./views/Experience";
import Career from "./views/Career";
import Playground from "./views/Playground";
import Me from "./views/Me";
import NavMini from "./views/NavMini";
import Nav from "./views/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/experience" component={Experience} />
          <Route path="/career" component={Career} />
          <Route path="/playground" component={Playground} />
          <Route path="/me" component={Me} />
        </div>
        <NavMini />
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
