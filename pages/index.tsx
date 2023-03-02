import Image from "next/image";
import { CVDownload } from "../components/cv-download";
import { sanClient } from "../server-utils/client.config";

const name = "Gabriel Raducu";
type StaticProps = {
  cvFile: string;
  headline: string;
  linkedin: string;
  description: string;
};
export default function Home({
  cvFile,
  description,
  headline,
  linkedin,
}: StaticProps) {
  return (
    <>
      <section className="mt-3">
        <div className="text-center mb-4">
          <Image
            priority
            src="/images/profile.jpg"
            style={{ borderRadius: 999 }}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className="text-purple">{name}</h1>
          <h4>{headline}</h4>
          <a href="mailto:raducu.gabriel@gmail.com">
            <img
              src="/images/envelope.svg"
              width="20"
              height="20"
              className="d-inline me-2"
            ></img>
            <span>raducu.gabriel@gmail.com</span>
          </a>
        </div>
        <div>
          <strong>About me:</strong>
        </div>
        <p>
          Passionate about high scale frontend applications with large
          experience in Solution Design, JS frameworks, project setup, coding
          best practices and unit-testing. Fluent in Angular and React with some
          electron and web-workers flavors.
        </p>

        <p className="mt-4 mb-0">You can follow my activity here:</p>
        <a href={linkedin} target="_blank">
          <img
            src="/images/linkedin.svg"
            width="20"
            height="20"
            className="d-inline me-2"
          />
          <span>gabrielraducu</span>
        </a>
        <br />
        <a href="https://github.com/eBitzu" target="_blank">
          <img
            src="/images/github.svg"
            width="20"
            height="20"
            className="d-inline me-2"
          />
          <span>eBitzu</span>
        </a>
        <a href="https://www.youtube.com/@the-why-r" target="_blank" className="d-block">
          <img
            src="/images/youtube.svg"
            width="20"
            height="20"
            style={{fill: 'red'}}
            className="d-inline me-2"
          />
          <span>The why-r</span>
        </a>
        <CVDownload url={cvFile}>{description}</CVDownload>
      </section>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  try {
    const query =
      "*[_type == 'latest']{'cvFile': cvFile.asset->url, description, linkedin, headline}";
    const [props]: Array<StaticProps> = await sanClient.fetch(query);
    console.log(props.cvFile);
    return {
      props,
    };
  } catch (er) {
    console.warn("Failed to get latest CV", er);

    return {
      props: {
        cvFile:
          "https://cdn.sanity.io/files/s4x0hxaq/production/496a0fde1b82d8bc4828d8b9816643de6602c6c0.pdf",
        description: "Latest CV",
        headline: "FrontEnd Tech Lead",
        linkedin: "https://www.linkedin.com/in/gabrielraducu/",
      },
    };
  }
}
