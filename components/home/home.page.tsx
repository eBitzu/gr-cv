import Image from "next/image";
import { HomeStaticProps } from "../../types/home.types";
import { CVDownload } from "../cv-download";

const name = "Gabriel Raducu";

export const HomeComponent = ({
  cvFile,
  description,
  headline,
  linkedin,
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
          <h4 className="text-2xl mb-2">{headline}</h4>
          <a href="mailto:raducu.gabriel@gmail.com">
            <img
              src="/images/envelope.svg"
              width="20"
              height="20"
              className="inline me-2"
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
          best practices and unit-testing. Fluent in Next.js and React with some
          angular, astro, electron and web-workers flavors.
        </p>

        <p className="mt-4 mb-0">You can follow my activity here:</p>
        <a href={linkedin} target="_blank">
          <img
            src="/images/linkedin.svg"
            width="20"
            height="20"
            className="inline me-2"
          />
          <span>gabrielraducu</span>
        </a>
        <br />
        <a href="https://github.com/eBitzu" target="_blank">
          <img
            src="/images/github.svg"
            width="20"
            height="20"
            className="inline me-2"
          />
          <span>eBitzu</span>
        </a>
        <p className="mt-4 mb-0">Some side projects I deployed:</p>
        <a
          href="https://game-of-life-astro.vercel.app/"
          target="_blank"
          className="flex align-middle"
        >
          <img
            src="/images/astro.svg"
            width="20"
            height="20"
            className="inline me-2"
          />
          <span>Game of Life - with Astro</span>
        </a>
        <a
          href="https://ssr-button-next-js.vercel.app/"
          target="_blank"
          className="flex align-middle"
        >
          <img
            src="/images/nextjs.svg"
            width="20"
            height="20"
            className="inline me-2"
          />
          <span>SSR click events - with Nextjs, htmx</span>
        </a>
        <CVDownload url={cvFile}>{description}</CVDownload>
      </section>
    </>
  );
};
