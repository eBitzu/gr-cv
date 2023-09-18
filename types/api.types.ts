export type CompanyType = {
    companyLogo: string;
    companyName: string;
    companyPosition: string;
    periodFrom: string;
    periodTo: string;
    jobDescription: string;
    slug: string;
    projects: Array<string>;
}

export type ProjectType = {
    projectName: string;
    slug: string;
    projectClient: string;
    projectDescription: string;
    projectFrom: string;
    projectTo: string;
    responsibilities: string;
    technologies: Array<string>;
    tools: Array<string>;
}

export type FishTimeLineProps = {
    date: number;
    label: string;
    link: string;
}

export type FishTimeline = {
    points: Array<FishTimeLineProps>;
    startTime: number;
    startTimeLabel: string;
}

export type LearnProps = {
  learnings: Array<EducationType>;
}

export type EducationType = {
    name: string;
    location: string;
    specialty: string;
    activities: Array<string>
    degree: string;
    slug: string;
    periodFrom: string;
    periodTo: string;
}
