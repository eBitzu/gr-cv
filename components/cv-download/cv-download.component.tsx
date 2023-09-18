'use client';
import { FC } from "react";
import cvDownload from "./cv-download.module.scss";

type CVProps = {
  url: string;
  children: string
}

export const CVDownload: FC<CVProps> = ({url, children}) => {
  const handleClick = () => {
    fetch(url)
      .then((resp) => resp.blob())
      .then((resp) => window.open(URL.createObjectURL(resp)))
      .catch(() => {
        console.log("Failed to fetch");
      });
  };
  return (
    <button className={`mt-2 ${cvDownload.button}`} onClick={handleClick}>
      {children}
    </button>
  );
};
