import { sanClient } from "../server-utils/client.config";
import { HomeComponent } from "../components/home/home.page";
import { createElement } from "react";
import { AboutMeType, CVFileType, HomeStaticProps } from "../types/home.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Raducu",
  description: "Gabriel Raducu's personal page",
};

export default async function Home() {
  let props: HomeStaticProps = {
    cvFile: {
      cvFile:
        "https://cdn.sanity.io/files/s4x0hxaq/production/496a0fde1b82d8bc4828d8b9816643de6602c6c0.pdf",
      ctaLabel: "Latest CV",
    },
    aboutMe: {
      headline: "FrontEnd Tech Lead",
      shortDescription: "",
      sideProjects: [],
      socialLinks: [],
    },
  };
  try {
    const cvQuery =
      "*[_type == 'latestCV']{'cvFile': cvFile.asset->url, ctaLabel}";
    const aboutMeQuery =
      "*[_type == 'about']{headline, shortDescription, sideProjects, socialLinks}";
    const [cvFile]: Array<CVFileType> = await sanClient.fetch(cvQuery);
    const [aboutMe]: Array<AboutMeType> = await sanClient.fetch(aboutMeQuery);

    props = {
      cvFile,
      aboutMe,
    };
  } catch (er) {
    console.warn("Failed to get latest CV", er);
  }

  return createElement(HomeComponent, props);
}
