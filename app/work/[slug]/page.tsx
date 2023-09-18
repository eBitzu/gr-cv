import { sanClient } from "../../../server-utils/client.config";
import { CompanyType } from "../../../types/api.types";
import JobInfo from "../../../components/job-info/job-info.component";
import { companyRequiredFields } from "../../../server-utils/query.helper";
import format from "date-fns/format";
import { createElement } from "react";

export default async function WorkPlace(context) {
  const { slug } = context.params;
  let props: {jobInfo: CompanyType} = {jobInfo: {} as CompanyType};
  const query = `*[slug.current == $slug]{${companyRequiredFields}}`;

  try {
    const [jobInfoTemp]: Array<CompanyType> = await sanClient.fetch(query, {
      slug,
    });

    const jobInfo: CompanyType = {
      ...jobInfoTemp,
      periodFrom: format(new Date(jobInfoTemp.periodFrom), "MMM-yy"),
      periodTo: format(new Date(jobInfoTemp.periodTo), "MMM-yy"),
    };
    props = {jobInfo};

  } catch (er) {
    console.log("er", er);
  }

  return createElement(JobInfo, props);
}

export async function generateStaticParams() {
  const query = '*[_type == "company"]{"slug": slug.current}';
  try {
    const companies: Array<Pick<CompanyType, "slug">> = await sanClient.fetch(
      query
    );

    const paths = companies.map(({ slug }) => ({ slug }));
    return paths;
  } catch (er) {
    console.log("er", er);
    return [];
  }
}
