import { EducationType, LearnProps } from "../../types/api.types";
import { sanClient } from "../../server-utils/client.config";
import format from "date-fns/format";
import { createElement } from "react";
import { Learn } from "../../components/learn/learn.page";

const fields: EducationType = {
  activities: [],
  degree: null,
  location: null,
  name: null,
  periodFrom: null,
  periodTo: null,
  slug: null,
  specialty: null,
};

const requiredFields = Object.keys(fields)
  .map((key) => (key !== "slug" ? key : '"slug": slug.current'))
  .join(", ");

export default async function LearnPage() {
  const query = `*[_type == "education"]{${requiredFields}}`;
  let props: LearnProps = { learnings: [] };
  try {
    const learningsTemp: Array<EducationType> = await sanClient.fetch(query);
    const learnings = learningsTemp.map((el) => ({
      ...el,
      periodFrom: format(new Date(el.periodFrom), "MMM-yy"),
      periodTo: format(new Date(el.periodTo), "MMM-yy"),
    }));
    props = { learnings };
  } catch (er) {
    console.log("er", er);
  }

  return createElement(Learn, props);
}
