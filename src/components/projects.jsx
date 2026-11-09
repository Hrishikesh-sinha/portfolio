import langImg from "../assets/lang.png";
import dsaImg from "../assets/dsa.png";

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
 *   },
 *
 * For an image: drop the file in src/assets/ and add an import at the top,
 * e.g.  import myImg from "../assets/my-project.png";  then set image: myImg
 */

const projects = [
  {
    title: "Language Learning Platform",
    description:
      "A MERN-based platform where users can learn languages, track progress, and practice lessons with secure authentication.",
    tags: ["MongoDB", "Express", "React", "Node", "JWT"],
    image: langImg,
    repo: "https://github.com/Hrishikesh-sinha/language-learning-platform",
  },
  {
    title: "DSA Visualizer",
    description:
      "An interactive Data Structures and Algorithms visualizer that helps users understand sorting and searching algorithms through real-time animations and step-by-step execution.",
    tags: ["Java", "DSA", "React", "Algorithms"],
    image: dsaImg,
    repo: "https://github.com/Hrishikesh-sinha/dsa-master-visualizer",
    live: "https://dsaforge.vercel.app",
  },
  {
    title: "VoltGuard: Event Data Recorder for Light EVs",
    description:
      "An ESP32-based \"black box\" for e-scooters and e-bikes. It monitors battery temperature, gas off-gassing, voltage and motion, detects overheating, impacts and free-falls in real time, and sends prioritised event records to Firebase, with a live web dashboard.",
    tags: ["ESP32", "C++", "IoT", "Firebase", "Chart.js", "JavaScript"],
    repo: "https://github.com/Hrishikesh-sinha/Event---Data---Recorder-For---Light-Electric-vehicle-",
    live: "https://edrlev.vercel.app",
  },
];

function ProjectCard({ title, description, tags, image, repo, live }) {
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

        {(repo || live) && (
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
