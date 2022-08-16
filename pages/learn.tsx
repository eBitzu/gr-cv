import Image from "next/image";
import { Education } from "../components/education/education.component";
import { EducationType } from "../models/api.types";
import { sanClient } from "../server-utils/client.config";
import format from "date-fns/format";

export default function Learn({
  learnings,
}: {
  learnings: Array<EducationType>;
}) {
  return (
    <>
      <div className="text-center">
        <Image
          width={400}
          height={250}
          style={{ borderRadius: 20 }}
          src={"/images/priscilla-du-preez.jpeg"}
        ></Image>
        <p className="px-3">This page is dedicated to my learning activities</p>
      </div>
      <div className="row mt-4">
        {!!learnings &&
          learnings.map((edu: EducationType) => (
            <div className="col-6" key={edu.slug} >
              <Education edu={edu} />
            </div>
          ))}
      </div>
    </>
  );
}

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

export async function getStaticProps(): Promise<{
  props: { learnings: Array<EducationType> };
}> {
  const query = `*[_type == "education"]{${requiredFields}}`;

  try {
    const learningsTemp: Array<EducationType> = await sanClient.fetch(query);
    const learnings = learningsTemp.map((el) => ({
      ...el,
      periodFrom: format(new Date(el.periodFrom), "MMM-yy"),
      periodTo: format(new Date(el.periodTo), "MMM-yy"),
    }));
    return {
      props: { learnings },
    };
  } catch (er) {
    console.log("er", er);
    return { props: { learnings: [] } };
  }
}
