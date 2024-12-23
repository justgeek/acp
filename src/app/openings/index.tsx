'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/routes';
import { Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { JobDetail, StatusPillMap } from './openings.type';

export interface OpeningsProps {
  openings: JobDetail[];
  sx?: SxProps;
}

export function Openings({ openings = [], sx }: OpeningsProps): React.JSX.Element {
  const router = useRouter();

  const navigateToOpeningDetails = (id: string) => {
    router.push(routes.openings.children.details.path(id));
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Openings" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 100 }}>ID</TableCell>
              <TableCell sx={{ width: 180 }}>Job Title</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Employment Type</TableCell>
              <TableCell>Experience Level</TableCell>
              <TableCell sx={{ width: 150 }}>Date Posted</TableCell>
              <TableCell sx={{ width: 150 }}>Application Deadline</TableCell>
              <TableCell sx={{ width: 180 }}>Salary Range</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {openings.map((opening: JobDetail) => {
              const {
                id,
                jobTitle,
                department,
                employmentType,
                experienceLevel,
                datePosted,
                applicationDeadline,
                salaryRange,
                status,
              } = opening;
              const { label, color } = StatusPillMap[status] ?? { label: 'Unknown', color: 'default' };

              return (
                <TableRow
                  onClick={() => {
                    navigateToOpeningDetails(id);
                  }}
                  hover
                  key={id}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell>{id}</TableCell>
                  <TableCell>{jobTitle}</TableCell>
                  <TableCell>{department}</TableCell>
                  <TableCell>{employmentType}</TableCell>
                  <TableCell>{experienceLevel}</TableCell>
                  <TableCell>{datePosted}</TableCell>
                  <TableCell>{applicationDeadline}</TableCell>
                  <TableCell>{salaryRange}</TableCell>
                  <TableCell>
                    <Chip sx={{ width: 100 }} color={color} label={label} size="medium" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
