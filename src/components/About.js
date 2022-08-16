import './About.css'
import profile from "./image/profile.jpg"

function About(){
    return (
        <section id="about">
        <div className="container_about">
            <ul>
            <h1 className="about_me">About Me</h1>
            <h2 className="title">🎓 Education</h2>
            <h3>Information Studies, Srinakharinwirot University</h3>
            <h2 className="title">🎂 Date of birth</h2>
            <h3>August, 7 2000</h3>
            <h2 className="title">📧 Email</h2>
            <h3>papontee.anosri@g.swu.ac.th</h3>
            </ul>
            <img className="profile_image" src={profile} alt="profile"></img>
            
        </div>
        </section>
    )
}

export default About