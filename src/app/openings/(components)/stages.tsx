'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import type { SxProps } from '@mui/material/styles';
import { ResponsiveFunnel } from '@nivo/funnel';

export interface SalesProps {
  data: {
    id: string;
    value: number;
    label: string;
  }[];
  sx?: SxProps;
}

export function Stages({ data, sx }: SalesProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Hiring Funnel Percent" />
      <CardContent sx={{ height: '400px' }}>
        <ResponsiveFunnel
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          valueFormat=">-.4s"
          colors={{ scheme: 'spectral' }}
          borderWidth={20}
          labelColor={{
            from: 'color',
            modifiers: [['darker', 3]],
          }}
          beforeSeparatorLength={100}
          beforeSeparatorOffset={20}
          afterSeparatorLength={100}
          afterSeparatorOffset={20}
          currentPartSizeExtension={10}
          currentBorderWidth={40}
          direction="vertical"
          motionConfig="wobbly"
        />
      </CardContent>
    </Card>
  );
}
