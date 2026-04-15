import "./ProjectCard.css"

function ProjectCard({title, desc, live, github, image}) {
    return (
        <div className="project-card hidden">
            <img src={image} alt={title} className="project-img" />
            <h3>{title}</h3>
            <p>{desc}</p>

            <div className="project-buttons">
                <a href={live} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    )
  
}
 
export default ProjectCard