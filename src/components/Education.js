import { useEffect, useState } from "react";
import { getEducation } from "../services/api";

function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getEducation()
      .then((data) => {
        setEducation(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load education details.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="education" className="section">
      <div className="container">

        <h2 className="section-title">Education</h2>

        {loading && <p>Loading education...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="education-list">
            {education.map((item) => (
              <div className="education-card" key={item.id}>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p>
                  {item.start_year} - {item.end_year}
                </p>

                {item.description && (
                  <p>{item.description}</p>
                )}

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Education;