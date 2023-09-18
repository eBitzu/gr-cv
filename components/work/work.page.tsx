import { FC } from "react";
import { CompanyType, FishTimeline } from "../../types/api.types";
import { CurrentPosition } from "../current-position/current-position.component";
import { FishTimeLine } from "../fish-timeline/fish-timeline.component";

const startTime = new Date("2012-01-01T10:00:00").getTime();

type WorkProps = Pick<FishTimeline, 'points'> & { latest: CompanyType };

export const Work: FC<WorkProps> = ({ points, latest })  => {
  return (
    <>
      <p className="mt-4 text-center">
        Hi, this page is dedicated to my work experiences that lead me here.
      </p>
      <CurrentPosition latest={latest} />
      <div>
        <details className="my-3">
          <summary className="text-end">
            <strong>Jobs timeline</strong>
          </summary>
          <small className="mb-5">*Hover and select for more details</small>
        </details>
        <FishTimeLine
          points={points}
          startTime={startTime}
          startTimeLabel="Graduation"
        ></FishTimeLine>
      </div>
    </>
  );
}
