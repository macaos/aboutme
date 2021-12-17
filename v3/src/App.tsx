import React from 'react';
import './scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Playground from './views/Playground';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="plays" element={<Playground />} />

      </Routes>
    </div>
  );
}

export default App;
