import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { Link, Outlet } from 'react-router-dom';

const linkStyle = { textDecoration: 'none', color: '#000' };

export default function NavigationLayout({
  navigationList,
}: {
  navigationList: Navigation[];
}) {
  return (
    <>
      <Paper sx={{ maxWidth: '100%' }}>
        {navigationList.map(({ title, path }) => (
          <Link
            style={linkStyle}
            key={title}
            to={`/${path}`}
          >
            <MenuItem>
              <ListItemText>{title}</ListItemText>
              <ArrowRight />
            </MenuItem>
          </Link>
        ))}
      </Paper>
      <Outlet />
    </>
  );
}
