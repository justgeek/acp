'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import { NumberOfApplicants } from '@/app/openings/(components)/applicants';
import { OfferAcceptanceRate } from '@/app/openings/(components)/offer-acceptance-rate';
import { TimeToHireTrends } from '@/app/openings/(components)/sales';
import { Sources } from '@/app/openings/(components)/sources';
import { Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import startCase from 'lodash/startCase';

import { SalaryRange } from '../(components)/budget';
import { RejectionReasons } from '../(components)/rejection-reasons';
import { Stages } from '../(components)/stages';
import { StuckApplicants } from '../(components)/stuck-applicants';
import { openingDetails } from '../openings.data';

export default function OpeningDetails(): React.JSX.Element {
  const { id } = useParams();
  const job = openingDetails[id as string];
  const {
    numberOfCandidates,
    jobTitle,
    jobDescription,
    offerAcceptanceRate,
    salaryRange,
    keyMetrics: { passThroughRateByStage, timeToHireTrends },
    sourceEffectiveness,
    requiredSkills,
    reasonsForRejection,
    candidatesStuckOnSpecificStage,
  } = job;

  const timeToHireData = Array.from(
    { length: 12 },
    () => Math.floor(Math.random() * (5 + 5 + 1) - 5) + parseInt(timeToHireTrends)
  );

  const funnelData = Object.keys(passThroughRateByStage).map((stage) => ({
    id: stage,
    label: startCase(stage),
    value: parseFloat(passThroughRateByStage[stage] ?? '0'),
  }));

  const sourceLabels = Object.keys(sourceEffectiveness).map((key) => startCase(key));
  const sourceValues = Object.values(sourceEffectiveness).map((value) => parseFloat(value ?? '0'));

  return (
    <Grid container spacing={3}>
      <Grid lg={12} sm={12} xs={12}>
        <h1>
          {id} - {jobTitle}
        </h1>
        <b>Summary:</b>
        <p>{jobDescription}</p>
        <>
          <b>Required Skills:</b>
          <p>
            {requiredSkills.map((skill) => (
              <Chip sx={{ margin: '5px' }} key={skill} color="success" label={skill} size="small" />
            ))}
          </p>
        </>
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <NumberOfApplicants diff={12} trend="up" sx={{ height: '100%' }} value={`${numberOfCandidates}`} />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <OfferAcceptanceRate sx={{ height: '100%' }} value={parseFloat(offerAcceptanceRate)} />
      </Grid>
      <Grid lg={5} sm={6} xs={12}>
        <SalaryRange diff={34} trend="down" sx={{ height: '100%' }} value={salaryRange} />
      </Grid>
      <Grid lg={6} sm={6} xs={12}>
        <RejectionReasons sx={{ height: '100%' }} reasons={reasonsForRejection} />
      </Grid>
      <Grid lg={6} sm={12} xs={12}>
        <StuckApplicants diff={25} trend="down" sx={{ height: '100%' }} data={candidatesStuckOnSpecificStage} />
      </Grid>
      <Grid lg={12} xs={12}>
        <Stages data={funnelData} sx={{ height: '100%' }} />
      </Grid>

      <Grid lg={8} xs={12}>
        <TimeToHireTrends chartSeries={[{ name: 'Time to hire', data: timeToHireData }]} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Sources chartSeries={sourceValues} labels={sourceLabels} sx={{ height: '100%' }} />
      </Grid>
    </Grid>
  );
}
