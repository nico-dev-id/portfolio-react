import "./About.css"
import profileImg from "../assets/profile.jpeg"

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">
                
                <div className="about-image">
                    <img src={profileImg} alt="profile" />
                </div>

                <div className="about-content">
                    <h2>About Me</h2>
                    <p>I am a passionate Frontend Developer focused on building modern,
            responsive, and user-friendly web applications. I enjoy turning
            ideas into real products using React and continuously improving my
            skills through hands-on projects.</p>
                </div>

                <div className="skills">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>API</span>
                    <span>Git</span>
                </div>
            </div>
        </section>
    )
}

export default About