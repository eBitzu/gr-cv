import { sanClient } from "../../server-utils/client.config";
import { FishTimeLine } from "../../components/fish-timeline/fish-timeline.component";
import {
  CompanyType,
  FishTimeline,
  FishTimeLineProps,
} from "../../models/api.types";


const startTime = new Date("2012-01-01T10:00:00").getTime();

export default function Work({ points }: FishTimeline) {
  return (
    <div className="text-center">
      <h5>My jobs timeline</h5>
      <small className="mb-5">*Hover and select for more details</small>
      <FishTimeLine
        points={points}
        startTime={startTime}
        startTimeLabel="Graduation"
      ></FishTimeLine>
    </div>
  );
}

export async function getStaticProps(): Promise<{
  props: { points: Array<FishTimeLineProps> };
}> {
  const query =
    '*[_type == "company"]{"slug": slug.current, companyName, periodFrom}';

  try {
    const companies: Array<Partial<CompanyType>> = await sanClient.fetch(query);
    const points: Array<FishTimeLineProps> = companies.map(
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
    );
    return {
      props: { points },
    };
  } catch (er) {
    console.log("er", er);
    return { props: { points: [] } };
  }
}
