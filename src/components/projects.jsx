import dsaImg from "../assets/dsa.png";
import voltguardImg from "../assets/voltguard.png";
import smartbandImg from "../assets/smartband.png";
import finaiImg from "../assets/finai.png";
import heartImg from "../assets/heart.png";

/*
 * ADD A PROJECT: copy the template below and paste it into the array.
 * Only `title`, `description` and `tags` are required.
 *
 *   {
 *     title: "Project Name",
 *     description: "One or two sentences on what it does.",
 *     tags: ["React", "Node"],
 *     image: someImport,              // optional - omit for a text-only card
 *     repo: "https://github.com/...", // optional
 *     live: "https://...",            // optional
 *     paper: "/papers/file.pdf",      // optional - put the PDF in public/papers/
 *   },
 *
 * For an image: drop the file in src/assets/ and add an import at the top,
 * e.g.  import myImg from "../assets/my-project.png";  then set image: myImg
 */

const projects = [
  {
    title: "VoltGuard: Event Data Recorder for Light EVs",
    description:
      "An ESP32 \"black box\" for e-scooters and e-bikes that detects overheating, gas release, impacts and free-falls, and uploads prioritised event records to Firebase and a live dashboard.",
    tags: ["ESP32", "C++", "IoT", "Firebase", "Chart.js", "JavaScript"],
    image: voltguardImg,
    repo: "https://github.com/Hrishikesh-sinha/Event---Data---Recorder-For---Light-Electric-vehicle-",
    live: "https://edrlev.vercel.app",
    paper: "/papers/EDR_for_LEVs_Hrishikesh_Anand.pdf",
  },
  {
    title: "Smart Health Band: Secure, AI-Assisted Vital-Sign Monitor",
    description:
      "An ESP32 wristband that scores health risk on-device against the wearer's own baseline and uploads signed readings to a FastAPI backend. Team prototype at VIT, not a medical device.",
    tags: ["ESP32", "C++", "Python", "scikit-learn", "FastAPI", "PostgreSQL", "Firebase", "HMAC-SHA-256"],
    image: smartbandImg,
    repo: "https://github.com/Hrishikesh-sinha/smartband-fastapi",
    live: "https://smartband-vit.web.app/",
    paper: "/papers/IEEE_Paper_SmartBand.pdf",
  },
  {
    title: "FinAI 2.0: AI-Driven Personal Finance Management System",
    description:
      "A personal finance app that forecasts expenses with Chronos-2 and finds the lowest-effort path to a savings goal. Gemini explains results, and a grounding check blocks invented numbers.",
    tags: ["React", "TypeScript", "Node/Express", "Python/FastAPI", "Chronos-2", "Gemini", "Firestore", "Render"],
    image: finaiImg,
    repo: "https://github.com/Hrishikesh-sinha/Finaidemo/tree/finai-2.0",
    live: "https://finaidemo.onrender.com/",
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A Streamlit app that predicts heart-disease risk from clinical parameters in the UCI dataset, with SHAP explanations of feature importance.",
    tags: ["Python", "Scikit-learn", "Streamlit", "SHAP", "Pandas", "NumPy", "Matplotlib"],
    image: heartImg,
    repo: "https://github.com/Hrishikesh-sinha/heart-disease-prediction",
    live: "https://heart-disease-prediction-tiqcphz3qekkq5ktfdskph.streamlit.app/",
  },
  {
    title: "DSA Visualizer",
    description:
      "An interactive visualizer that animates sorting and searching algorithms step by step, so you can see how each one works in real time.",
    tags: ["Java", "DSA", "React", "Algorithms"],
    image: dsaImg,
    repo: "https://github.com/Hrishikesh-sinha/dsa-master-visualizer",
    live: "https://dsaforge.vercel.app",
  },
];

function ProjectCard({ title, description, tags, image, repo, live, paper }) {
  return (
    <article className="grid-item">
      {image && (
        <div className="item-img">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}

      <div className="item-details">
        <h3>{title}</h3>

        <p className="item-desc">{description}</p>

        {tags?.length > 0 && (
          <div className="tags-row">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {(repo || live || paper) && (
          <div className="project-links">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                GitHub Repo
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="btn-website"
              >
                Live Website
              </a>
            )}

            {paper && (
              <a
                href={paper}
                target="_blank"
                rel="noreferrer"
                className="btn-github"
              >
                Research Paper
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="viewport-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
