import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow glow-one"></div>
      <div className="hero-bg-glow glow-two"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="availability-badge">
            <span></span>
            Turning Ideas Into Digital Solutions
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1 className="hero-title">
             <span>Java Full Stack Developer</span>
          </h1>


          <p className="hero-description">
            1+ year of experience, building scalable, responsive, and user-friendly web applications using            <strong> Java, Spring Boot, React JS, REST APIs, MySQL,</strong>
            and modern development tools.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="btn secondary-btn">
              Let's Talk
            </a>
          </div>

          <div className="hero-tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>Docker</span>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-decoration decoration-one"></div>
          <div className="image-decoration decoration-two"></div>

          <div className="hero-image-card">
            <img src={profileImage} alt="Chinnu Pradhan" />

            <div className="image-status">
              <span></span>
              Building great software
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats container">
        <div className="stat-item">
          <h3>1+</h3>
          <p>Year Experience</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <h3>2+</h3>
          <p>Projects Built</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <h3>10+</h3>
          <p>Technologies</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;