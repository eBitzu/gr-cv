'use client';
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import { FC } from "react";

export const siteTitle = "Gabriel Raducu's CV";

const Navigation: FC = () => {
  const frameParam = useSearchParams()?.get('frame');
  const iframe = window?.self !== window?.top || frameParam;
  return iframe ? null : (<nav className="flex justify-around items-center mx-auto h-12  md:max-w-3xl">
    <Link href={"/"}>
      <span>About me</span>
    </Link>
    <Link href={"/work"}>
      <span>Jobs Timeline</span>
    </Link>
    <Link href={"/learn"}>
      <span>Learning Experience</span>
    </Link>
  </nav>);
};

export default Navigation;
