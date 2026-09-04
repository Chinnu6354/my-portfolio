import { useEffect, useState } from "react";
import { getSkills } from "../services/api";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getSkills()
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load skills.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">

        <h2 className="section-title">Skills</h2>

        {loading && <p>Loading skills...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.id}>
                <h3>{skill.name}</h3>

                {skill.category && (
                  <p>{skill.category}</p>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;