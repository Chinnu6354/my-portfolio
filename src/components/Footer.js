function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h3>Chinnu Pradhan</h3>

        <p>
          Java Full Stack Developer
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Chinnu Pradhan. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;