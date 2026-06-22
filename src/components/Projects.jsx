import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css"
import weatherImg from "../assets/weather.jpeg"
import jobtrackerImg from "../assets/jobtracker.jpeg"
import todoImg from "../assets/todo.jpeg"
import aicrmmini from "../assets/aicrmmini.jpeg"
import aidoc from "../assets/aidoc.jpeg"
import airesearch from "../assets/airesearch.jpeg"

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
                 title="AI Research Assistant" 
                 desc="Multi-agent AI research system with real-time WebSocket streaming. 
                 Three specialized agents (Researcher, Analyst, Writer) collaborate using 
                 LangGraph to produce structured research reports."
                 live="https://ai-research-assistant-red.vercel.app/"
                 github="https://github.com/nico-dev-id/ai-research-assistant"
                image={airesearch}
                />

                <ProjectCard 
                 title="AI Documment Intelligence" 
                 desc="AI-powered document intelligence system with RAG pipeline. 
                 Upload PDF/TXT documents and ask questions using LLaMA 3.3 70b via Groq API."
                 live="https://ai-document-intelligence-nine.vercel.app/"
                 github="https://github.com/nico-dev-id/ai-document-intelligence"
                image={aidoc}
                />

                <ProjectCard 
                 title="AI CRM Mini" 
                 desc="AI-powered CRM with customer relationship management, deal tracking, 
                 and intelligent business insights using LLaMA 3.3. Built with TypeScript and Redis caching."
                 live="https://ai-crm-mini.vercel.app/"
                 github="https://github.com/nico-dev-id/ai-crm-mini"
                image={aicrmmini}
                />

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
                 title="Job Tracker App" 
                 desc="A responsive job tracking application built with React, featuring full CRUD functionality, 
                 status tracking, and clean UI design with LocalStorage-based data persistence."
                 live="https://job-tracker-react-ten.vercel.app/"
                 github="https://github.com/nico-dev-id/job-tracker-react"
                 image={jobtrackerImg}
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