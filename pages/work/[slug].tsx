import { sanClient } from "../../server-utils/client.config";
import { CompanyType } from "../../models/api.types";
import JobInfo from "../../components/job-info/job-info.component";

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

const fields: CompanyType = {
  companyLogo: null,
  companyName: null,
  companyPosition: null,
  jobDescription: null,
  periodFrom: null,
  periodTo: null,
  projects: null,
  slug: null,
};

export async function getStaticProps(context) {
  const { slug } = context.params;

  const requiredFields = Object.keys(fields)
    .map((key) => (key !== "slug" ? key : '"slug": slug.current'))
    .join(", ");
  const query = `*[slug.current == $slug]{${requiredFields}}`;

  try {
    const [jobInfo]: Array<CompanyType> = await sanClient.fetch(query, { slug });

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
