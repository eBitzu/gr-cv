import { useCallback, useState, MouseEvent, useEffect } from "react";
import { ProjectType } from "../../models/api.types";
import { sanClient } from "../../server-utils/client.config";
import { projectRequiredFields } from "../../server-utils/query.helper";
import projectStyles from "./project-info.module.scss";
import format from "date-fns/format";

export const JobProjects = ({ projects }): JSX.Element => {
  const [project, setProject] = useState<string>("");
  const handleClick = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    setProject(e.currentTarget.id);
  }, []);
  return (
    <>
      <div className="my-2">
        {projects.map((slug) => (
          <span
            key={slug}
            id={slug}
            onClick={handleClick}
            className={projectStyles.slug}
          >
            {slug}
          </span>
        ))}

        {!!project ? (
          <ProjectInfo slug={project}></ProjectInfo>
        ) : (
          <small className="d-block mt-2">
            *Please select a project to see more details
          </small>
        )}
      </div>
    </>
  );
};

const query = `*[projectSlug.current == $slug]{${projectRequiredFields}}`;

const ProjectInfo = ({ slug }): JSX.Element => {
  const [info, setInfo] = useState<ProjectType>(null);

  useEffect(() => {
    sanClient
      .fetch(query, { slug })
      .then(([data]: Array<ProjectType>) => {
        setInfo({
          ...data,
          projectFrom: format(new Date(data.projectFrom), "MMM-yy"),
          projectTo: format(new Date(data.projectTo), 'MMM-yy')
        });
      })
      .catch((er) => {
        console.warn("Failed project query: ", er);
      });
  }, [slug]);

  return !!info ? (
    <div className="mt-3">
      <div className={projectStyles.line}></div>
      <div className="mt-3">
        <strong>ProjectName: </strong>
        <span>{info.projectName}</span>
      </div>

      <strong>Client: </strong>
      <span>{info.projectClient}</span>
      <br />

      <strong>Period: </strong>
      <span>{`(${info.projectFrom} - ${info.projectTo})`}</span>
      <br />

      <strong>Description: </strong>
      <pre>{info.projectDescription}</pre>
      <br />

      <strong>Responsibilities: </strong>
      <pre>{info.responsibilities}</pre>

      {!!info.technologies && (
        <div>
          <strong>Technologies used: </strong>
          <div>
            {info.technologies.map((tech) => (
              <span key={tech} className={projectStyles.item}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {!!info.tools && (
        <div>
          <strong>Tools used: </strong>
          <div>
            {info.tools.map((tool) => (
              <span key={tool} className={projectStyles.item}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <p>Loading project...</p>
  );
};
