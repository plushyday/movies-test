import * as React from 'react';

import { Grid, Typography } from '@mui/material';
import { PeopleAltOutlined } from '@mui/icons-material';
import { setCharactersByMovie } from 'store/thunks';
import { useAppDispatch } from 'store';

import {
  StyledButton,
  StyledItemPaper,
  StyledGrid,
  StyledPaperSmallBlock,
} from './style';

interface Props {
  data: Movie;
}

export default function MovieCard({
  data: { title, episode_id, release_date },
}: Props) {
  const dispatch = useAppDispatch();
  return (
    <Grid container mr={5}>
      <StyledItemPaper>
        <StyledGrid container>
          <Grid item xs={8}>
            <Typography>{title}</Typography>
            <Typography>Release date:</Typography>
            <Typography>{release_date}</Typography>
          </Grid>
          <Grid container item xs={4} justifyContent="end">
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
          <StyledButton
            variant="contained"
            endIcon={<PeopleAltOutlined />}
            onClick={() => {
              dispatch(setCharactersByMovie(episode_id));
            }}
          >
            Show people
          </StyledButton>
        </StyledGrid>
      </StyledItemPaper>
    </Grid>
  );
}
