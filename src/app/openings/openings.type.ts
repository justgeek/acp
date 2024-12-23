export enum Stage {
  Interviewing = 'Interviewing',
  Sourcing = 'Sourcing',
  Onboarding = 'Onboarding',
  PortfolioReview = 'Portfolio Review',
  OfferNegotiation = 'Offer Negotiation',
  InitialScreening = 'Initial Screening',
}

export enum EmploymentType {
  FullTime = 'Full-time',
  PartTime = 'Part-time',
  Contract = 'Contract',
}

export enum ExperienceLevel {
  EntryLevel = 'Entry-level',
  MidLevel = 'Mid-level',
  SeniorLevel = 'Senior-level',
}

export enum Status {
  InProgress = 'In Progress',
  Open = 'Open',
  Closed = 'Closed',
  OfferExtended = 'Offer Extended',
}

export const StatusPillMap = {
  [Status.InProgress]: { label: Status.InProgress, color: 'warning' },
  [Status.Open]: { label: Status.Open, color: 'success' },
  [Status.Closed]: { label: Status.Closed, color: 'error' },
  [Status.OfferExtended]: { label: Status.OfferExtended, color: 'info' },
};

export interface JobDetail {
  stage: Stage;
  keyMetrics: {
    timeToHireTrends: string;
    passThroughRateByStage: {
      screening?: string;
      technicalInterview?: string;
      finalInterview?: string;
      panelInterview?: string;
      offerAccepted?: string;
      portfolioReview?: string;
      contractNegotiation?: string;
      [key: string]: string | undefined;
    };
  };
  sourceEffectiveness: {
    jobBoards: string;
    referrals: string;
    recruitingAgency?: string;
    freelancePlatforms?: string;
    [key: string]: string | undefined;
  };
  id: string;
  jobTitle: string;
  department: string;
  location: string;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  datePosted: string;
  applicationDeadline: string;
  salaryRange: string;
  status: Status;
  jobDescription: string;
  requiredSkills: string[];
  numberOfCandidates: number;
  timeSpentOnEachStage: {
    screening?: string;
    technicalInterview?: string;
    finalInterview?: string;
    panelInterview?: string;
    offerExtended?: string;
    portfolioReview?: string;
    contractNegotiation?: string;
    [key: string]: string | undefined;
  };
  candidatesStuckOnSpecificStage: {
    screening?: number;
    technicalInterview?: number;
    finalInterview?: number;
    panelInterview?: number;
    offerExtended?: number;
    portfolioReview?: number;
    contractNegotiation?: number;
    [key: string]: number | undefined;
  };
  offerAcceptanceRate: string;
  reasonsForRejection: string[];
}
