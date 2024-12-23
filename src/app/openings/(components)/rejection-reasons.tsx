import * as React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { XCircle } from '@phosphor-icons/react/dist/ssr/XCircle';

export interface TasksProgressProps {
  sx?: SxProps;
  reasons: string[];
}

export function RejectionReasons({ reasons, sx }: TasksProgressProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="overline">
                Top Rejection Reasons
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {reasons.map((value) => (
                  <ListItem key={value} disableGutters>
                    <ListItemText primary={`⛔ ${value}`} />
                  </ListItem>
                ))}
              </List>{' '}
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-error-main)', height: '56px', width: '56px' }}>
              <XCircle color="white" fontSize="2rem" />
            </Avatar>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
