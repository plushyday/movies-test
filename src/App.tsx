import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import LoaderOverlay from 'components/LoaderOverlay';
import Alert from 'components/Alert';
import Layout from 'screens/Layout';
import About from 'screens/About';
import Movies from 'screens/Movies';
import Home from 'screens/Home';
import { fetchMovies } from 'store/thunks';
import { useAppDispatch } from 'store';

const navigationList = [
  { title: 'About', path: 'about' },
  { title: 'Movies', path: 'movies' },
];

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <Alert />
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
