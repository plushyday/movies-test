import * as React from 'react';

import { CardMedia, CardContent, Typography } from '@mui/material';

import { StyledCard, StyledGrid } from './style';

const About = () => {
  return (
    <StyledGrid container>
      <StyledCard>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2017/01/14/18/37/lightsaber-1980155__340.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Star Wars
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop-culture phenomenon. The franchise
            has been expanded into various films and other media, including
            television series, video games, novels, comic books, theme park
            attractions, and themed areas, comprising an all-encompassing
            fictional universe. In 2020, its total value was estimated at US$70
            billion, and it is currently the fifth-highest-grossing media
            franchise of all time.
          </Typography>
        </CardContent>
      </StyledCard>
    </StyledGrid>
  );
};

export default About;
