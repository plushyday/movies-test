import * as React from 'react';

import { Typography } from '@mui/material';

import { StyledGrid } from './style';

const About = () => {
  return (
    <StyledGrid>
      <Typography>Characters from all SEVEN Star Wars films.</Typography>
      <Typography>Now with The Force Awakens data!</Typography>
    </StyledGrid>
  );
};

export default About;
