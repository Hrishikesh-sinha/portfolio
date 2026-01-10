import React from "react";
import projectImg from "../assets/lang.png";
import dsaImg from "../assets/dsa.png";


function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="viewport-grid">

        {/* Language Learning Platform */}
        <div className="grid-item">
          <div className="item-img">
            <img src={projectImg} alt="Language Learning Platform" />
          </div>

          <div className="item-details">
            <h3>Language Learning Platform</h3>

            <p className="item-desc">
              A MERN-based platform where users can learn languages, track progress,
              and practice lessons with secure authentication.
            </p>

            <div className="tags-row">
              <span className="tag">MongoDB</span>
              <span className="tag">Express</span>
              <span className="tag">React</span>
              <span className="tag">Node</span>
              <span className="tag">JWT</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Hrishikesh-sinha/language-learning-platform"
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                GitHub Repo
              </a>

              <a
                href="https://your-live-project-link.com"
                target="_blank"
                rel="noreferrer"
                className="btn-website"
              >
                Live Website
              </a>
            </div>
          </div>
        </div>

        {/* DSA Visualizer */}
        <div className="grid-item">
          <div className="item-img">
            <img src={dsaImg} alt="DSA Visualizer" />
          </div>

          <div className="item-details">
            <h3>DSA Visualizer</h3>

            <p className="item-desc">
              An interactive Data Structures and Algorithms visualizer that helps
              users understand sorting and searching algorithms through real-time
              animations and step-by-step execution.
            </p>

            <div className="tags-row">
              <span className="tag">Java</span>
              <span className="tag">DSA</span>
              <span className="tag">React</span>
              <span className="tag">Algorithms</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Hrishikesh-sinha/dsa-master-visualizer"
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                GitHub Repo
              </a>

              <a
                href="https://dsaforge.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="btn-website"
              >
                Live Website
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;







