import React from 'react';
import NavTabs from '../Nav';
import { Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <header>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4">Raymond Bautista</Typography>
        <NavTabs />
      </Toolbar>
    </header>

  );
}