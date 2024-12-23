import { EmploymentType, ExperienceLevel, JobDetail, Stage, Status } from './openings.type';

export const openingDetails: Record<string, JobDetail> = {
  'JOB-001': {
    stage: Stage.Interviewing,
    keyMetrics: {
      timeToHireTrends: '45 days average',
      passThroughRateByStage: {
        screening: '80%',
        technicalInterview: '50%',
        finalInterview: '30%',
      },
    },
    sourceEffectiveness: {
      jobBoards: '40%',
      referrals: '60%',
    },
    id: 'JOB-001',
    jobTitle: 'Software Developer',
    department: 'Technology',
    location: 'Remote',
    employmentType: EmploymentType.FullTime,
    experienceLevel: ExperienceLevel.EntryLevel,
    datePosted: '2023-12-15',
    applicationDeadline: '2024-01-31',
    salaryRange: '$60,000 - $80,000',
    status: Status.InProgress,
    jobDescription:
      'Work on developing and maintaining web applications. Collaborate with team members to deliver features.',
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'Git'],
    numberOfCandidates: 150,
    timeSpentOnEachStage: {
      screening: '5 days',
      technicalInterview: '15 days',
      finalInterview: '10 days',
    },
    candidatesStuckOnSpecificStage: {
      technicalInterview: 30,
    },
    offerAcceptanceRate: '70%',
    reasonsForRejection: ['Lack of technical expertise', 'Inadequate communication skills'],
  },
  'JOB-002': {
    stage: Stage.OfferNegotiation,
    keyMetrics: {
      timeToHireTrends: '60 days average',
      passThroughRateByStage: {
        screening: '70%',
        panelInterview: '40%',
        finalInterview: '25%',
      },
    },
    sourceEffectiveness: {
      jobBoards: '50%',
      referrals: '30%',
      recruitingAgency: '20%',
    },
    id: 'JOB-002',
    jobTitle: 'Product Manager',
    department: 'Product Management',
    location: 'Austin, TX',
    employmentType: EmploymentType.FullTime,
    experienceLevel: ExperienceLevel.MidLevel,
    datePosted: '2023-12-10',
    applicationDeadline: '2024-01-25',
    salaryRange: '$90,000 - $120,000',
    status: Status.Open,
    jobDescription: 'Oversee product development cycles and ensure alignment with business goals.',
    requiredSkills: ['Agile', 'Scrum', 'Roadmapping', 'Communication'],
    numberOfCandidates: 120,
    timeSpentOnEachStage: {
      screening: '7 days',
      panelInterview: '20 days',
      finalInterview: '12 days',
    },
    candidatesStuckOnSpecificStage: {
      panelInterview: 25,
    },
    offerAcceptanceRate: '60%',
    reasonsForRejection: ['Misalignment with company culture', 'Inadequate leadership experience'],
  },
  'JOB-003': {
    stage: Stage.Onboarding,
    keyMetrics: {
      timeToHireTrends: '30 days average',
      passThroughRateByStage: {
        screening: '90%',
        interview: '70%',
        offerAccepted: '50%',
      },
    },
    sourceEffectiveness: {
      jobBoards: '60%',
      referrals: '40%',
    },
    id: 'JOB-003',
    jobTitle: 'HR Coordinator',
    department: 'Human Resources',
    location: 'Boston, MA',
    employmentType: EmploymentType.PartTime,
    experienceLevel: ExperienceLevel.EntryLevel,
    datePosted: '2023-12-18',
    applicationDeadline: '2024-02-05',
    salaryRange: '$41,600 - $52,000',
    status: Status.Closed,
    jobDescription: 'Support HR functions, including recruitment and onboarding of new employees.',
    requiredSkills: ['Communication', 'Organization', 'HRIS knowledge'],
    numberOfCandidates: 90,
    timeSpentOnEachStage: {
      screening: '3 days',
      interview: '10 days',
      offerAccepted: '5 days',
    },
    candidatesStuckOnSpecificStage: {
      interview: 15,
    },
    offerAcceptanceRate: '50%',
    reasonsForRejection: ['Lack of HRIS knowledge', 'Poor organizational skills'],
  },
  'JOB-004': {
    stage: Stage.PortfolioReview,
    keyMetrics: {
      timeToHireTrends: '35 days average',
      passThroughRateByStage: {
        portfolioReview: '60%',
        interview: '50%',
        contractNegotiation: '40%',
      },
    },
    sourceEffectiveness: {
      jobBoards: '70%',
      referrals: '30%',
    },
    id: 'JOB-004',
    jobTitle: 'Graphic Designer',
    department: 'Creative',
    location: 'Remote',
    employmentType: EmploymentType.Contract,
    experienceLevel: ExperienceLevel.MidLevel,
    datePosted: '2023-12-12',
    applicationDeadline: '2024-01-20',
    salaryRange: '$62,400 - $104,000',
    status: Status.InProgress,
    jobDescription: 'Design digital assets, including social media graphics and marketing materials.',
    requiredSkills: ['Photoshop', 'Illustrator', 'Figma'],
    numberOfCandidates: 110,
    timeSpentOnEachStage: {
      portfolioReview: '10 days',
      interview: '15 days',
      contractNegotiation: '10 days',
    },
    candidatesStuckOnSpecificStage: {
      portfolioReview: 20,
    },
    offerAcceptanceRate: '80%',
    reasonsForRejection: ['Substandard portfolio quality', 'Poor technical interview performance'],
  },
  'JOB-005': {
    stage: Stage.OfferNegotiation,
    keyMetrics: {
      timeToHireTrends: '50 days average',
      passThroughRateByStage: {
        screening: '80%',
        technicalInterview: '60%',
        offerExtended: '40%',
      },
    },
    sourceEffectiveness: {
      recruitingAgency: '50%',
      jobBoards: '30%',
      referrals: '20%',
    },
    id: 'JOB-005',
    jobTitle: 'Financial Analyst',
    department: 'Finance',
    location: 'New York, NY',
    employmentType: EmploymentType.FullTime,
    experienceLevel: ExperienceLevel.MidLevel,
    datePosted: '2023-12-11',
    applicationDeadline: '2024-01-30',
    salaryRange: '$85,000 - $115,000',
    status: Status.InProgress,
    jobDescription: 'Analyze financial performance and provide actionable insights to stakeholders.',
    requiredSkills: ['Excel', 'Financial Modeling', 'Forecasting'],
    numberOfCandidates: 95,
    timeSpentOnEachStage: {
      screening: '5 days',
      technicalInterview: '15 days',
      offerExtended: '10 days',
    },
    candidatesStuckOnSpecificStage: {
      offerExtended: 10,
    },
    offerAcceptanceRate: '65%',
    reasonsForRejection: ['Lack of advanced financial modeling skills', 'Inadequate forecasting expertise'],
  },
  'JOB-006': {
    stage: Stage.InitialScreening,
    keyMetrics: {
      timeToHireTrends: '40 days average',
      passThroughRateByStage: {
        screening: '85%',
        interview: '60%',
        offerExtended: '50%',
      },
    },
    sourceEffectiveness: {
      jobBoards: '60%',
      referrals: '40%',
    },
    id: 'JOB-006',
    jobTitle: 'Customer Support Specialist',
    department: 'Customer Service',
    location: 'Los Angeles, CA',
    employmentType: EmploymentType.FullTime,
    experienceLevel: ExperienceLevel.EntryLevel,
    datePosted: '2023-12-13',
    applicationDeadline: '2024-02-01',
    salaryRange: '$40,000 - $55,000',
    status: Status.Open,
    jobDescription: 'Provide excellent support to customers and resolve their issues effectively.',
    requiredSkills: ['Communication', 'Problem-solving', 'CRM Tools'],
    numberOfCandidates: 200,
    timeSpentOnEachStage: {
      screening: '10 days',
      interview: '15 days',
      offerExtended: '10 days',
    },
    candidatesStuckOnSpecificStage: {
      screening: 50,
    },
    offerAcceptanceRate: '75%',
    reasonsForRejection: ['Inadequate customer service skills', 'Poor problem-solving ability'],
  },
};