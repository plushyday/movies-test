import * as React from 'react';
import { Typography } from '@mui/material';
import ContentTable from 'components/ContentTable';
import { useAppSelector } from 'store';
import {
  selectSelectedMovieEpisode,
  selectCharactersByMovie,
} from 'store/selectors';

import { StyledItemPaperNoContent } from './style';

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
        <StyledItemPaperNoContent>
          <Typography>
            Nothing to show yet. Click on one of the movies above to see the
            list of characters.
          </Typography>
        </StyledItemPaperNoContent>
      )}
    </>
  );
}
