import { sanClient } from "../../server-utils/client.config";
import { FishTimeLine } from "../../components/fish-timeline/fish-timeline.component";
import {
  CompanyType,
  FishTimeline,
  FishTimeLineProps,
} from "../../models/api.types";
import { companyRequiredFields } from "../../server-utils/query.helper";
import { CurrentPosition } from "../../components/current-position/current-position.component";
import format from "date-fns/format";

const startTime = new Date("2012-01-01T10:00:00").getTime();

type WorkProps = FishTimeline & { latest: CompanyType };

export default function Work({ points, latest }: WorkProps) {
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

export async function getStaticProps(): Promise<{
  props: { points: Array<FishTimeLineProps>; latest: Partial<CompanyType> };
}> {
  const query =
    '*[_type == "company"]{"slug": slug.current, companyName, periodFrom}';

  try {
    const companies: Array<Partial<CompanyType>> = await sanClient.fetch(query);
    const points: Array<FishTimeLineProps> = companies
      .map(
        ({
          periodFrom,
          companyName,
          slug,
        }: Partial<CompanyType>): FishTimeLineProps => {
          const [y, m, d] = (periodFrom || "2012-07-12")
            .split("-")
            .map((v) => +v);
          const date = new Date(y, m - 1, d).getTime();
          return {
            date,
            label: companyName,
            link: slug,
          };
        }
      )
      .sort((a, b) => a.date - b.date);

    const latestQuery = `*[_type=="company"] | order(periodFrom desc)[0] {${companyRequiredFields}}`;
    const latestTemp: Partial<CompanyType> = await sanClient.fetch(latestQuery);
    const latest: Partial<CompanyType> = {
      ...latestTemp,
      periodFrom: format(new Date(latestTemp.periodFrom), "MMM-yy"),
    };
    return {
      props: { points, latest },
    };
  } catch (er) {
    console.log("er", er);
    return { props: { points: [], latest: null } };
  }
}
