import { useEffect, useState } from "react";
import { getExperience } from "../services/api";

function Experience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getExperience()
      .then((data) => {
        setExperience(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load experience.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container">

        <h2 className="section-title">Experience</h2>

        {loading && <p>Loading experience...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="experience-list">
            {experience.map((item) => (
              <div className="experience-card" key={item.id}>

                <h3>{item.job_title}</h3>

                <h4>{item.company}</h4>

                <p className="experience-duration">
                  {item.start_date} - {item.end_date || "Present"}
                </p>

                {item.description && (
                  <p className="experience-description">
                    {item.description}
                  </p>
                )}

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Experience;