

"use client";
import {
  Atom,
  Sparkles,
  Terminal,
  Layers,
  Database,
  Coffee,
  Code2,
  Layout,
  Palette,
  Globe,
} from "lucide-react";


const techIcons = [
  { Icon: Atom, name: "React", color: "#61dafb" },
  { Icon: Sparkles, name: "JavaScript", color: "#f7df1e" },
  { Icon: Terminal, name: "Node.js", color: "#339933" },
  { Icon: Layers, name: "Express.js", color: "#ffffff" },
  { Icon: Database, name: "MongoDB", color: "#47A248" },

  { Icon: Coffee, name: "Java", color: "#f89820" },
  { Icon: Code2, name: "Data Structures & Algorithms", color: "#8b5cf6" },

  { Icon: Layout, name: "HTML5", color: "#e34f26" },
  { Icon: Palette, name: "CSS3", color: "#264de4" },
  { Icon: Layers, name: "Tailwind CSS", color: "#38bdf8" },

  { Icon: Globe, name: "Next.js", color: "#ffffff" },
  { Icon: Palette, name: "Figma", color: "#f24e1e" },
];


export default function Skills() {
  // Row splitting logic
  const row1 = techIcons.slice(0, 8);
  const row2 = techIcons.slice(8);

  return (
    <section className="skill-part">
      <h2 className="section-title-skill">Tech Stack</h2>
      
      <div className="skills-bento-box">
        
        <div className="marquee-container">
          <div className="marquee-content">
            {[...row1, ...row1,...row1, ...row1].map((item, i) => (
              <div key={i} className="marquee-pair">
                <item.Icon size={22} style={{ color: item.color }} />
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="marquee-container">
          <div className="marquee-content reverse">
            {[...row2, ...row2,...row2, ...row2].map((item, i) => (
              <div key={i} className="marquee-pair">
                <item.Icon size={22} style={{ color: item.color }} />
                <span className="marquee-text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}