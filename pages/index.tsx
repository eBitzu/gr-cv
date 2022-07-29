import Head from "next/head";
import { siteTitle } from "../components/layout";
import Image from "next/image";

const name = "Gabriel Raducu";
export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-3">
        <div className="text-center mb-4">
          <Image
            priority
            src="/images/profile.jpg"
            style={{borderRadius: 999}}
            height={144}
            width={144}
            alt={name}
          />
          <h1>{name}</h1>
        </div>
        <p>
          Passionate about high scale frontend applications with large
          experience in Solution Design, JS frameworks, project setup, coding
          best practices and unit-testing. Fluent in Angular and React with some
          electron and web-workers flavors.
        </p>

        <p className="mt-4 mb-0">You can follow my activity here:</p>
        <a href="https://www.linkedin.com/in/raducugabriel/" target="_blank">
          <img src='/images/linkedin.svg' width="20" className="d-inline me-2"/>
          <span>raducugabriel</span>
        </a>
      </section>
    </>
  );
}
