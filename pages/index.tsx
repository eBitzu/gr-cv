import Image from "next/image";
import { CVDownload } from "../components/cv-download";
import { sanClient } from "../server-utils/client.config";

const name = "Gabriel Raducu";
type StaticProps = {
  url: string;
  downloadText: string;
}
export default function Home({url, downloadText}: StaticProps) {
  return (
    <>
      <section className="mt-3">
        <div className="text-center mb-4">
          <Image
            priority
            src="/images/profile.jpg"
            style={{borderRadius: 999}}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className="text-purple">{name}</h1>
          <h4>Brasov, Romania</h4>
          <a href="mailto:raducu.gabriel@gmail.com">
           <img src='/images/envelope.svg' width="20" height="20" className="d-inline me-2"></img>
           <span>raducu.gabriel@gmail.com</span>
          </a>
        </div>
        <div><strong>About me:</strong></div>
        <p>
          Passionate about high scale frontend applications with large
          experience in Solution Design, JS frameworks, project setup, coding
          best practices and unit-testing. Fluent in Angular and React with some
          electron and web-workers flavors.
        </p>

        <p className="mt-4 mb-0">You can follow my activity here:</p>
        <a href="https://www.linkedin.com/in/raducugabriel/" target="_blank">
          <img src='/images/linkedin.svg' width="20" height="20" className="d-inline me-2"/>
          <span>raducugabriel</span>
        </a>
        <br/>
        <a href="https://github.com/eBitzu" target="_blank">
          <img src='/images/github.svg' width="20" height="20" className="d-inline me-2"/>
          <span>eBitzu</span>
        </a>
        <CVDownload url={url}>
          {downloadText}
        </CVDownload>
      </section>
    </>
  );
}


export async function getStaticProps(): Promise<{props: StaticProps}> {
  try {
    const query = "*[_type == 'latest']{'cvFile': cvFile.asset->url, description}";
    const [{cvFile, description}]: Array<any> = await sanClient.fetch(query);

    return {
      props: {
        url: cvFile,
        downloadText: description
      }
    }
  } catch (er){
    console.warn('Failed to get latest CV', er);

    return {
      props: {
        url: 'https://cdn.sanity.io/files/s4x0hxaq/production/81bd7fc5e99fa56fba70624a6fe686f4a9d69dac.pdf',
        downloadText: 'Latest CV'
      }
    }
  }
}