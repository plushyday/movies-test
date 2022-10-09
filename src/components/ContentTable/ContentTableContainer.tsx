import * as React from 'react';
import ContentTable from 'components/ContentTable';
import { useAppSelector } from 'store';
import {
  selectSelectedMovieEpisode,
  selectCharactersByMovie,
} from 'store/selectors';

export default function ContentTableContainer() {
  const characters = useAppSelector(selectCharactersByMovie);
  const selectedMovieEpisode = useAppSelector(selectSelectedMovieEpisode);

  return (
    <>
      {selectedMovieEpisode ? (
        <ContentTable
          rows={characters}
          selectedMovieEpisode={selectedMovieEpisode}
        />
      ) : (
        <></>
      )}
    </>
  );
}
