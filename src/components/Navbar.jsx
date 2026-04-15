import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
    const [active, setActive] = useState("hero")

    useEffect(() => {
  const handleScroll = () => {
    const sections = ["hero", "projects", "contact"]

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

            <ul className="nav-links">
                <li><a href="#hero" className={active === "hero" ? "active" : ""}>Home</a></li>
                <li><a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a></li>
                <li><a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar