import Head from "next/head";
import Link from "next/link";
import headerStyles from '../styles/header.module.scss';

export const siteTitle = "Gabriel Raducu's CV";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Gabriel Raducu's CV" />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <header className={headerStyles.header}>
        <nav className="d-flex justify-content-evenly">
          <Link href={"/"}>About me</Link>
          <Link href={"/work"}>My Work Experience</Link>
          <Link href={"/learn"}>My Learning Experience</Link>
        </nav>
      </header>
      <div className="container py-3">
        <main>{children}</main>
        <footer className="text-center mt-5" style={{ opacity: 0.6 }}>
          Powered by Vercel, using next.js
        </footer>
      </div>
    </>
  );
}
