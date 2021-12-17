import React from 'react';
import './scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Playground from './views/Playground';
import Experience from './views/Experience';
import About from './views/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="play" element={<Playground />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
