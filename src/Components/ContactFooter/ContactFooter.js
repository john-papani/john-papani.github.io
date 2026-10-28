import React from "react";

const ContactFooter = () => {
  return (
    <footer id="contact" className="border-t border-white/10 pt-9 pb-6 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-title mb-2">Contact</h2>
        <p className="section-subtitle mb-6">
          Open to full-stack and software engineering roles. Reach out for
          collaborations, opportunities, or technical discussions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-7">
          <a
            href="mailto:johnpapani1@gmail.com"
            className="btn-primary"
          >
            Email me
          </a>
          <a
            href="./papanikolaou_ioannis_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-row flex-wrap gap-6 justify-center mb-6">
          <a
            href="https://www.linkedin.com/in/ioannis-papanikolaou-1b205a259"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] hover:text-white no-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/john-papani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] hover:text-white no-underline"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Ioannis Papanikolaou. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;
