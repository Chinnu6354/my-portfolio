function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact-header">
          <p className="contact-small-title">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>

          <p className="contact-intro">
          Have an idea worth building? Let’s turn it into a powerful digital experience.
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-item email-card">
            <div className="contact-icon">
              ✉
            </div>

            <h3>Email</h3>

            <p className="contact-description">
              Send me an email directly
            </p>

            <a href="mailto:chinnupradhan144@gmail.com">
              chinnupradhan144@gmail.com
            </a>

            <a
              href="mailto:chinnupradhan144@gmail.com"
              className="contact-action"
            >
              Get in touch →
            </a>
          </div>



          <div className="contact-item linkedin-card">
            <div className="contact-icon">
              in
            </div>

            <h3>LinkedIn</h3>

            <p className="contact-description">
              Connect and message me on LinkedIn
            </p>

            <p className="contact-name">
              Chinnu Pradhan
            </p>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              Connect with me →
            </a>
          </div>



          <div className="contact-item github-card">
            <div className="contact-icon github-icon">
              &lt;/&gt;
            </div>

            <h3>GitHub</h3>

            <p className="contact-description">
              Explore my projects and repositories
            </p>

            <p className="contact-name">
              @Chinnu6354
            </p>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              View my GitHub →
            </a>
          </div>



          <div className="contact-item phone-card">
            <div className="contact-icon">
              ☎
            </div>

            <h3>Phone</h3>

            <p className="contact-description">
              Feel free to call or WhatsApp me
            </p>

            <a href="tel:+916354797144">
              +91 63547 97144
            </a>

            <a
              href="tel:+916354797144"
              className="contact-action"
            >
              Call me →
            </a>
          </div>



          <div className="contact-item opportunity-card">
            <div className="contact-icon">
              ✦
            </div>

            <h3>Let's Work Together</h3>

            <p className="contact-description">
              Open to exciting opportunities, collaborations,
              and innovative projects.
            </p>

            <a
              href="mailto:your-email@gmail.com"
              className="contact-action"
            >
              Start a conversation →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;