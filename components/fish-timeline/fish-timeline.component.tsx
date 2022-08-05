import { FishTimeline } from "../../models/api.types";
import fishStyles from "./fish-timeline.module.scss";
import startOfDay from "date-fns/startOfDay";
import ReactTooltip from "react-tooltip";
import Link from "next/link";

const today = startOfDay(new Date()).getTime();

export const FishTimeLine = ({
  points,
  startTime,
  startTimeLabel,
}: FishTimeline) => {
  const timeLine = today - startTime;

  return (
    <>
      <div className="my-3 position-relative">
        <div className={fishStyles.line}></div>
        <div className="d-flex">
          <div className={fishStyles.startDot} data-tip={startTimeLabel}>
            <div className={fishStyles.bellow}>
              {new Date(startTime).getFullYear()}
            </div>
          </div>
          {!!points &&
            points.map((val) => {
              const leftStyle = ((val.date - startTime) / timeLine) * 100;
              const dateLabel = new Date(val.date).getFullYear();
              return (
                <div
                  data-tip={val.label}
                  className={fishStyles.dot}
                  key={val.link}
                  style={{ left: `${leftStyle}%` }}
                >
                  <Link href={`/work/${val.link}`} passHref>
                    <div className={fishStyles.bellow}>{dateLabel}</div>
                  </Link>
                </div>
              );
            })}
          <div className={fishStyles.endDot} data-tip="Today">
            <div className={fishStyles.bellow}>
              {new Date(today).getFullYear()}
            </div>
          </div>
        </div>
        <ReactTooltip type="info" />
      </div>
    </>
  );
};
