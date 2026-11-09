

"use client";
import {
  Microchip,
  CircuitBoard,
  Cpu,
  Code2,
  Terminal,
  Zap,
  Server,
  Database,
  Flame,
  BrainCircuit,
  Table,
  ChartBar,
  Atom,
  Braces,
  Sparkles,
  Layers,
  ChartLine,
  Activity,
  Coffee,
  Triangle,
  Cloud,
  GitBranch,
} from "lucide-react";

// Row 1: embedded, backend and ML. Row 2: web, languages and deployment.
// Every entry is used in at least one project on this site.
const row1 = [
  { Icon: Microchip, name: "ESP32", color: "#e7352c" },
  { Icon: Code2, name: "C / C++ (Arduino)", color: "#00979d" },
  { Icon: Cpu, name: "FreeRTOS", color: "#7dd3fc" },
  { Icon: CircuitBoard, name: "I2C / Sensors", color: "#a3e635" },
  { Icon: Terminal, name: "Python", color: "#ffd43b" },
  { Icon: Zap, name: "FastAPI", color: "#009688" },
  { Icon: Server, name: "Node.js / Express", color: "#339933" },
  { Icon: Database, name: "PostgreSQL", color: "#4169e1" },
  { Icon: Flame, name: "Firebase", color: "#ffca28" },
  { Icon: BrainCircuit, name: "scikit-learn", color: "#f7931e" },
  { Icon: Table, name: "Pandas / NumPy", color: "#a78bfa" },
  { Icon: ChartBar, name: "SHAP", color: "#fb7185" },
];

const row2 = [
  { Icon: Atom, name: "React", color: "#61dafb" },
  { Icon: Braces, name: "TypeScript", color: "#3178c6" },
  { Icon: Sparkles, name: "JavaScript", color: "#f7df1e" },
  { Icon: Layers, name: "Tailwind CSS", color: "#38bdf8" },
  { Icon: ChartLine, name: "Chart.js", color: "#ff6384" },
  { Icon: Activity, name: "Streamlit", color: "#ff4b4b" },
  { Icon: Coffee, name: "Java", color: "#f89820" },
  { Icon: Triangle, name: "Vercel", color: "#ffffff" },
  { Icon: Cloud, name: "Render", color: "#46e3b7" },
  { Icon: GitBranch, name: "Git / GitHub", color: "#f05032" },
];


export default function Skills() {

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