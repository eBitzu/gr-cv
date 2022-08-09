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
        <meta name="keywords" content="gabriel, raducu, javascript, lead front-end" />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <header className={headerStyles.header}>
        <nav className="row justify-content-evenly align-items-center">
          <Link href={"/"} ><a className="col-4">About me</a></Link>
          <Link href={"/work"} ><a className="col-4">My Work Experience</a></Link>
          <Link href={"/learn"} ><a className="col-4">My Learning Experience</a></Link>
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
