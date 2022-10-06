import React from 'react';
import NavigationLayout from 'screens/NavigationLayout';
import { Routes, Route } from 'react-router-dom';
import About from 'screens/About';
import Movies from 'screens/Movies';
import Home from 'screens/Home';

const navigationList = [
  { title: 'about', path: 'about' },
  { title: 'movies', path: 'movies' },
];

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route
            path="/"
            element={<NavigationLayout navigationList={navigationList} />}
          >
            <Route index element={<Home />} />

            <Route path={'about'} element={<About />} />
            <Route path={'movies'} element={<Movies />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
