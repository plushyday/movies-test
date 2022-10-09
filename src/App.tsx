import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import LoaderOverlay from 'components/LoaderOverlay';
import Layout from 'screens/Layout';
import About from 'screens/About';
import Movies from 'screens/Movies';
import Home from 'screens/Home';
import { fetchMovies } from 'store/thunks';
import { useAppDispatch } from 'store';

const navigationList = [
  { title: 'about', path: 'about' },
  { title: 'movies', path: 'movies' },
];

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <LoaderOverlay />
      <Routes>
        <Route path="/" element={<Layout navigationList={navigationList} />}>
          <Route index element={<Home />} />

          <Route path={'about'} element={<About />} />
          <Route path={'movies'} element={<Movies />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
