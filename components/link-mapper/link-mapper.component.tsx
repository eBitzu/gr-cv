import { FC } from "react";
import { LinkType } from "../../types/home.types";

type LinkMapperProps = {
  links: Array<LinkType>;
  sectionDescription: string;
}

export const LinkMapper: FC<LinkMapperProps> = ({
  links,
  sectionDescription
}) => {
  return (
    <>
      <p className="mt-4 mb-0">{sectionDescription}</p>
      {links.map((link) => (
        <a key={link.linkUrl} href={link.linkUrl} target="_blank" className="flex align-middle py-1">
          <img
            src={`/images/${link.iconName}.svg`}
            width="20"
            height="20"
            className="inline me-2"
          />
          <span>{link.linkLabel}</span>
        </a>
      ))}
    </>
  );
};
