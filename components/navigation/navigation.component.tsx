import Link from "next/link";

export const siteTitle = "Gabriel Raducu's CV";

const Navigation = () => (
  <nav className="flex justify-around items-center mx-auto h-12">
    <Link href={"/"}>
      <span>About me</span>
    </Link>
    <Link href={"/work"}>
      <span>Jobs Timeline</span>
    </Link>
    <Link href={"/learn"}>
      <span>Learning Experience</span>
    </Link>
  </nav>
);

export default Navigation;
