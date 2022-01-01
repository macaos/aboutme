import React from 'react';
import './scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Playground from './views/Playground';
import Experience from './views/Experience';
import About from './views/About';
import Pattern01 from './artwork/Pattern01/Pattern01';
import Pattern02 from './artwork/Pattern02/Pattern02';

function App() {
  return (
    <div className="App">
      <Pattern02 />
      {/* <About />
      <Playground />
      <Experience /> */}
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="play" element={<Playground />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />

      </Routes> */}
    </div>
  );
}

export default App;
