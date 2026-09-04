import { useEffect, useState } from "react";
import { getProjects } from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProjects()
      .then((data) => {
        console.log("Projects API response:", data);

        setProjects(data.results || data);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);

        setError("Unable to load projects.");

        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">Projects</h2>

        {loading && <p>Loading projects...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="projects-grid">

            {projects.map((project) => (
              <div className="project-card" key={project.id}>

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      console.error(
                        "Image failed to load:",
                        project.image
                      );

                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="project-no-image">
                    No Image Available
                  </div>
                )}

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {project.skills && (
                    <div className="project-skills">

                      {project.skills.map((skill, index) => (
                        <span key={index}>
                          {typeof skill === "object"
                            ? skill.name
                            : skill}
                        </span>
                      ))}

                    </div>
                  )}

                  <div className="project-links">

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;