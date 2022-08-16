import { sanClient } from "../../server-utils/client.config";
import { CompanyType } from "../../models/api.types";
import JobInfo from "../../components/job-info/job-info.component";
import { companyRequiredFields } from "../../server-utils/query.helper";
import format from "date-fns/format";

export default function WorkPlace({ jobInfo }: { jobInfo: CompanyType }) {
  return <JobInfo jobInfo={jobInfo}></JobInfo>;
}

export async function getStaticPaths() {
  const query = '*[_type == "company"]{"slug": slug.current}';
  try {
    const companies: Array<Pick<CompanyType, "slug">> = await sanClient.fetch(
      query
    );

    const paths = companies.map(({ slug }) => ({ params: { slug } }));
    return {
      paths,
      fallback: false,
    };
  } catch (er) {
    console.log("er", er);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;

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
    return {
      props: {
        jobInfo,
      },
    };
  } catch (er) {
    console.log("er", er);
    return {
      props: {
        jobInfo: {},
      },
    };
  }
}
