import Image from "next/image";
import { HomeStaticProps } from "../../types/home.types";
import { CVDownload } from "../cv-download";
import { LinkMapper } from "../link-mapper/link-mapper.component";

const name = "Gabriel Raducu";

export const HomeComponent = ({
  cvFile: { ctaLabel, cvFile },
  aboutMe: { headline, shortDescription, sideProjects, socialLinks },
}: HomeStaticProps) => {
  return (
    <>
      <section className="py-4 px-6">
        <div className="text-center mb-4">
          <Image
            priority
            src="/images/profile.jpg"
            className="mx-auto rounded-full"
            height={144}
            width={144}
            alt={name}
          />
          <h1 className="text-indigo-700 text-4xl mb-2">{name}</h1>
          <h2 className="text-2xl mb-2">{headline}</h2>
          <a href="mailto:raducu.gabriel@gmail.com">
            <img
              src="/images/envelope.svg"
              width="20"
              height="20"
              alt="envelope"
              className="inline me-2"
            ></img>
            <span>raducu.gabriel@gmail.com</span>
          </a>
        </div>
        <div>
          <strong>About me:</strong>
        </div>
        <p>{shortDescription}</p>

        <LinkMapper
          links={socialLinks}
          sectionDescription="You can follow my activity here:"
        />
        <LinkMapper
          links={sideProjects}
          sectionDescription="Some side projects I deployed:"
        />
        <div className="py-3" />
        <CVDownload url={cvFile}>{ctaLabel}</CVDownload>
      </section>
    </>
  );
};
