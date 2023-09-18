import { CompanyType } from "../../types/api.types";
import Image from "next/image";
import { JobProjects } from "../project-info/project-info";

export default function JobInfo({ jobInfo }: { jobInfo: CompanyType }) {
  return (
    <section>
      <div className="flex items-center">
        <div className="relative" style={{ height: 30, minWidth: 30 }}>
          <Image src={jobInfo.companyLogo} fill alt={jobInfo.companyName} />
        </div>
        <h3 className="ms-3 mb-0">{jobInfo.companyName}</h3>
        <span className="ms-3 small">
          {`(${jobInfo.periodFrom} - ${jobInfo.periodTo || "present"})`}
        </span>
      </div>
      <div className="mt-3">
        <strong>Job title: </strong>
        <span>{jobInfo.companyPosition}</span>
      </div>
      <strong>Short job description:</strong>
      <p>{jobInfo.jobDescription}</p>
      {!!jobInfo.projects && (
        <>
          <strong>Projects info:</strong>
          <JobProjects projects={jobInfo.projects} />
        </>
      )}
    </section>
  );
}
