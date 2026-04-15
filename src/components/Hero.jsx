import "./Hero.css"

function Hero() {
    return (
        <div className="hero" id="hero">
        <h1>Hi, I'm Nico</h1>
        <h2>Frontend Developer</h2>
        <p>I build modern, responsive, and user-friendly web applications using React, focusing on clean UI and performance.</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Project</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
    )
}

export default Hero