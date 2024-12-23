import * as React from 'react';
import type { Metadata } from 'next';
import { Openings } from '@/app/openings';
import Grid from '@mui/material/Unstable_Grid2';

import { openingDetails } from '../openings/openings.data';

export const metadata = { title: `Openings` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  const openings = Object.values(openingDetails);
  return (
    <>
      <h1>Recruitment Dashboard </h1>
      <Grid container spacing={3}>
        <Grid lg={12} md={12} xs={12}>
          <Openings openings={openings} sx={{ height: '100%' }} />
        </Grid>
      </Grid>
    </>
  );
}
