import { sanClient } from "../../server-utils/client.config";
import {
  CompanyType,
  FishTimeLineProps,
} from "../../types/api.types";
import { companyRequiredFields } from "../../server-utils/query.helper";
import format from "date-fns/format";
import { createElement } from "react";
import { Work } from "../../components/work/work.page";

export default async function WorkPage() {
  const query =
    '*[_type == "company"]{"slug": slug.current, companyName, periodFrom}';
  let props = { points: [], latest: null }
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
    props = {points, latest}
  } catch (er) {
    console.log("er", er);
  }

  return createElement(Work, props);
}
