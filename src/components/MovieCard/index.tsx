import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { PeopleAltOutlined } from '@mui/icons-material';
import { StyledItemPaper, StyledPaperSmallBlock } from './style';

const MovieCard = () => {
  return (
    <Grid container mr={5}>
      <StyledItemPaper>
        <Grid container justifyContent="space-between" mb={5}>
          <Grid item md={6}>
            <Typography>Film Title</Typography>
            <Typography>Release date</Typography>
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
                <Typography>Episode 4</Typography>
              </Grid>
            </StyledPaperSmallBlock>
          </Grid>
        </Grid>
        <Button variant="contained" endIcon={<PeopleAltOutlined />}>
          Show people
        </Button>
      </StyledItemPaper>
    </Grid>
  );
};

export default MovieCard;
