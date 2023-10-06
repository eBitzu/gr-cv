export type LinkType = {
  iconName: string;
  linkUrl: string;
  linkLabel: string;
}

export type CVFileType = {
  cvFile: string;
  ctaLabel: string
}

export type AboutMeType = {
  shortDescription: string;
  headline: string;
  socialLinks: Array<LinkType>;
  sideProjects: Array<LinkType>
}

export type HomeStaticProps = {
  cvFile: CVFileType;
  aboutMe: AboutMeType;
};
