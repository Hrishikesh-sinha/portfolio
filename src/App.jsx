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
          I am a Computer Science Engineering student specializing in IoT, with a strong
          interest in full-stack web development. I enjoy building scalable and
          user-focused web applications using the MERN stack.
        </p>

        <p className="about-text">
          Alongside development, I actively practice Data Structures and Algorithms in Java
          to strengthen my problem-solving skills and improve code efficiency. I believe
          combining strong fundamentals with practical development helps in building
          reliable and impactful software solutions.
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

