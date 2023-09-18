import { CompanyType, ProjectType } from "../types/api.types";

const fields: CompanyType = {
    companyLogo: null,
    companyName: null,
    companyPosition: null,
    jobDescription: null,
    periodFrom: null,
    periodTo: null,
    projects: null,
    slug: null,
  };

 export const companyRequiredFields = Object.keys(fields)
  .map((key) => (key !== "slug" ? key : '"slug": slug.current'))
  .join(", ");


  const projectFields: ProjectType = {
    projectClient: null,
    projectDescription: null,
    projectFrom: null,
    projectName: null,
    projectTo: null,
    responsibilities: null,
    slug: null,
    technologies: null,
    tools: null,
  };
 export const projectRequiredFields = Object.keys(projectFields)
    .map((key: string) => (key !== "slug" ? key : '"slug": projectSlug.current'))
    .join(", ");
