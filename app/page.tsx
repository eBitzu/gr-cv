import { sanClient } from "../server-utils/client.config";
import { HomeComponent } from "../components/home/home.page";
import { createElement } from "react";
import { HomeStaticProps } from "../types/home.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Raducu",
  description: "Gabriel Raducu's personal page"
}

export default async function Home() {
  let props: HomeStaticProps = {
    cvFile:
      "https://cdn.sanity.io/files/s4x0hxaq/production/496a0fde1b82d8bc4828d8b9816643de6602c6c0.pdf",
    description: "Latest CV",
    headline: "FrontEnd Tech Lead",
    linkedin: "https://www.linkedin.com/in/gabrielraducu/",
  }
  try {
    const query =
      "*[_type == 'latest']{'cvFile': cvFile.asset->url, description, linkedin, headline}";
    const [fromCMS]: Array<HomeStaticProps> = await sanClient.fetch(query);

    props = fromCMS;
  } catch (er) {
    console.warn("Failed to get latest CV", er);
  }

  return createElement(HomeComponent, props);
}
