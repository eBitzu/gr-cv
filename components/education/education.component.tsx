import { EducationType } from "../../types/api.types";
import eduStyles from "./education.module.scss";

export const Education = ({
  edu: { activities, degree, location, name, periodFrom, periodTo, specialty },
}: {
  edu: EducationType;
}) => (
  <div className={eduStyles.card}>
    <div>
      <div>
        <strong>{name}</strong>
        <p>Location: {location}</p>
        <p>Period: {`(${periodFrom} - ${periodTo})`}</p>
      </div>
      <div>
        <strong>Degree achieved:</strong>
        <p>{degree}</p>
      </div>
      <div>
        <strong>Specialty:</strong>
        <p>{specialty}</p>
      </div>

      {!!activities && (
        <div>
          <strong>Activities:</strong>
          <ul>
            {activities.map((act, idx) => (
              <li key={idx}>{act}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
