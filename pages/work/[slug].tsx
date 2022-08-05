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

export async function getStaticProps(context) {
  const { slug } = context.params;
  const fields: CompanyType = {
    companyLogo: null,
    companyName: null,
    companyPosition: null,
    jobDescription: null,
    periodFrom: null,
    periodTo: null,
    projects: null,
    slug,
  };
  const requiredFields = Object.keys(fields)
    .map((key) => (key !== "slug" ? key : '"slug": slug.current'))
    .join(", ");
  const query = `*[slug.current == $slug]{${requiredFields}}`;

  try {
    const [companyInfo] = await sanClient.fetch(query, { slug });

    return {
      props: {
        jobInfo: companyInfo,
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
