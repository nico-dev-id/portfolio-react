import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
    const [active, setActive] = useState("hero")
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
  const handleScroll = () => {
    const sections = ["hero","about", "projects", "contact"]

    let current = "hero"

    sections.forEach((id) => {
      const section = document.getElementById(id)

      if (section) {
        const top = section.offsetTop - 150

        if (window.scrollY >= top) {
          current = id
        }
      }
    })
    setActive(current)
    console.log("active:", current)
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
}, [])

    return (
        <nav className="navbar">
            <h2 className="logo">Nico</h2>

            <div className="menu-icon" onClick={() => 
              setMenuOpen(!menuOpen)}> ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="#hero" className={active === "hero" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" className={active === "about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#projects" className={active === "projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar