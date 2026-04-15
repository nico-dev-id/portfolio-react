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
                 desc="A weather application built with React that fetches real-time data 
                 from an external API. It allows users to search by city name, view current weather conditions, 
                 and see a multi-day forecast with a responsive and dynamic UI."
                 live="https://weather-react-app-three-teal.vercel.app/"
                 github="https://github.com/nico-dev-id/weather-react-app"
                image={weatherImg}
                />

                <ProjectCard 
                 title="Portfolio Website" 
                 desc="A personal portfolio website built with React to showcase projects and frontend skills. 
                 Features include smooth scrolling navigation, interactive UI elements, and a responsive design 
                 optimized for both desktop and mobile devices."
                 live="https://portfolio-react-ten-virid.vercel.app/"
                 github="https://github.com/nico-dev-id/portfolio-react"
                 image={portfolioImg}
                />

                <ProjectCard 
                 title="Task Manager App" 
                 desc="A task management application built with JavaScript that allows users to create, organize, 
                 and manage tasks efficiently. It includes drag-and-drop functionality, filtering options, 
                 and persistent data storage using LocalStorage."
                 live="https://nico-dev-id.github.io/task-manager-app/"
                 github="https://github.com/nico-dev-id/task-manager-app"
                 image={todoImg}
                />
            </div>
        </section>
    )
}

export default Projects