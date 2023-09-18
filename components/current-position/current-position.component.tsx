import Image from "next/image";
import { CompanyType } from "../../types/api.types";

export const CurrentPosition = ({ latest }: { latest: CompanyType }) => {
  const {
    companyLogo,
    companyName,
    jobDescription,
    companyPosition,
    periodFrom,
  } = latest;
  return latest ? (
    <>
      <strong className="mt-4 block">Current position:</strong>
      <div className="flex justify-center" title={companyName}>
        <div
          className="relative me-3"
          style={{ height: 100, minWidth: 100 }}
        >
          <Image
            layout="fill"
            src={companyLogo}
            alt={companyName}
            objectFit="contain"
          />
        </div>
        <div>
          <h5>{companyPosition}</h5>
          <p className="mb-0">{jobDescription}</p>
          <p>started on: {periodFrom}</p>
        </div>
      </div>
    </>
  ) : null;
};
