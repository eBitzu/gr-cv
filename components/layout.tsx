import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Gabriel Raducu's CV";

export default function Layout({ children }) {
  return (
    <div className="container py-3">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Gabriel Raducu's CV" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="header">
        <nav className="d-flex justify-content-evenly w-100 mb-3">
          <Link href={"/"}>About me</Link>
          <Link href={"/work"}>My Work Experience</Link>
          <Link href={"/learn"}>My Learning Experience</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
