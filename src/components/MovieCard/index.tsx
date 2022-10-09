import * as React from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { PeopleAltOutlined } from '@mui/icons-material';
import { setCharactersByMovie } from 'store/thunks';
import { useAppDispatch } from 'store';

import { StyledItemPaper, StyledPaperSmallBlock } from './style';

interface Props {
  data: Movie;
}

const MovieCard = ({ data: { title, episode_id, release_date } }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Grid container mr={5}>
      <StyledItemPaper>
        <Grid container justifyContent="space-between" mb={5}>
          <Grid item md={6}>
            <Typography>{title}</Typography>
            <Typography>{release_date}</Typography>
          </Grid>
          <Grid container item md={6} justifyContent="end">
            <StyledPaperSmallBlock elevation={0}>
              <Grid
                container
                item
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Typography>Episode {episode_id}</Typography>
              </Grid>
            </StyledPaperSmallBlock>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          endIcon={<PeopleAltOutlined />}
          onClick={() => {
            dispatch(setCharactersByMovie(episode_id));
          }}
        >
          Show people
        </Button>
      </StyledItemPaper>
    </Grid>
  );
};

export default MovieCard;
