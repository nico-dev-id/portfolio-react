import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css"
import weatherImg from "../assets/weather.jpeg"
import portfolioImg from "../assets/portfolio.jpeg"
import todoImg from "../assets/todo.jpeg"

function Projects () {

    useEffect(() => {
  const elements = document.querySelectorAll(".hidden")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show")
          }, index * 150) // 🔥 delay antar card
        }
      })
    },
    { threshold: 0.3 }
  )

  elements.forEach((el) => observer.observe(el))
}, [])

    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>

            <div className="projects-container">
                <ProjectCard 
                 title="Weather App" 
                 desc="React weather app with real-time API and forecast."
                 live="https://weather-react-app-three-teal.vercel.app/"
                 github="https://github.com/nico-dev-id/weather-react-app"
                image={weatherImg}
                />

                <ProjectCard 
                 title="Portfolio Website" 
                 desc="Personal portfolio built with React."
                 live="#"
                 github="#"
                 image={portfolioImg}
                />

                <ProjectCard 
                 title="Task Manager App" 
                 desc="A responsive task management application with drag-and-drop functionality, filtering system, and persistent data using LocalStorage."
                 live="#"
                 github="#"
                 image={todoImg}
                />
            </div>
        </section>
    )
}

export default Projects