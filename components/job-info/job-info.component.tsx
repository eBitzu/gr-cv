import { CompanyType } from "../../models/api.types";
import Image from "next/image";
import jobStyles from "./job-info.module.scss";

export default function JobInfo({ jobInfo }: { jobInfo: CompanyType }) {
  return (
    <section>
      <div className="d-flex align-items-center">
        <div className="position-relative" style={{ height: 30, minWidth: 30 }}>
          <Image
            src={jobInfo.companyLogo}
            height={30}
            objectFit="contain"
            layout="fill"
          />
        </div>
        <h3 className="ms-3 mb-0">{jobInfo.companyName}</h3>
        <span className="ms-3 small">
          {`(${jobInfo.periodFrom} - ${jobInfo.periodTo})`}
        </span>
      </div>
      <div className="mt-3">
        <strong>Job title: </strong>
        <span>{jobInfo.companyPosition}</span>
      </div>
      <strong>Short job description:</strong>
      <p>{jobInfo.jobDescription}</p>
      <strong>Projects info:</strong>
      {!!jobInfo.projects && (
        <div className="my-2">
          {jobInfo.projects.map((slug) => (
            <span className={jobStyles.slug}>{slug}</span>
          ))}
        </div>
      )}
    </section>
  );
}
