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
        <Typography variant="h3">
          CODE
          <span
          className='folio'
          >
            FOLIO
          </span>
        </Typography>

        <NavTabs />
      </Toolbar>
    </header>

  );
}