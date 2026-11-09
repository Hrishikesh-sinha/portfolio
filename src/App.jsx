import './App.css'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
import { useState, useEffect } from 'react'

import {
  Home,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Moon,
  Sun
} from 'lucide-react'

function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = (e) => {
    e.stopPropagation()
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme')
    } else {
      document.body.classList.add('light-theme')
    }
  }, [isDarkMode])

  const handleDockClick = () => {
    setIsExpanded(true)
    setTimeout(() => setIsExpanded(false), 300)
  }

  return (
    <div className="portfolio-wrapper">
      <Hero />

      <section className="about-section">
        <p className="section-title">About Me</p>

        <p className="about-text">
          I like problems that fight back. I sharpen my DSA in Java and
          built a visualizer that lets you watch sorting and searching algorithms work,
          step by step. In machine learning, I've built a heart-disease
          predictor that explains itself with SHAP and a risk model small enough to run on
          an ESP32. In IoT, I build devices that catch trouble as it
          starts, from overheating e-scooter batteries to unusual heart rates, and get the
          data to the cloud even when Wi-Fi drops.
        </p>
      </section>

      <Education />
      <Skills />
      <Projects />

      <section className="contact-section">
        <div className="contact-badge">Contact</div>
        <h2 className="contact-title">Let's get in touch!</h2>
        <p className="contact-subtitle">
          If you have any inquiries, please feel free to reach out via email at&nbsp;
          <a href="mailto:hrishikeshsinhabth@gmail.com">
            hrishikeshsinhabth@gmail.com
          </a>
        </p>
      </section>

      <nav
        className={`nav-dock ${isExpanded ? 'dock-expand' : ''}`}
        onClick={handleDockClick}
      >
        <a href="/" title="Home">
          <Home size={20} strokeWidth={2.2} />
        </a>

        <a
          href="https://github.com/Hrishikesh-sinha"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <Github size={20} strokeWidth={2.2} />
        </a>

        <a
          href="https://www.linkedin.com/in/hrishikesh-anand-0a6196252/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <Linkedin size={20} strokeWidth={2.2} />
        </a>

        <a
          href="https://x.com/HrishikeshVit"
          target="_blank"
          rel="noreferrer"
          title="X (Twitter)"
        >
          <Twitter size={20} strokeWidth={2.2} />
        </a>

        <a
          href="/Hrishikesh_Anand_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          title="Resume"
        >
          <FileText size={20} strokeWidth={2.2} />
        </a>
      </nav>
    </div>
  )
}

export default App

