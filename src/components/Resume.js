import './Resume.css'
import facebook from "./image/facebook.png"
import line from "./image/line.png"
import mail from "./image/mail.png"

function Resume(){
    return(
        <section id="resume">
        <div className="button_resume"></div>
        <h1 className="click_this">Click This 👇</h1>
        <div className="button_resume">
        <a href="https://drive.google.com/file/d/1HXqveGpjkpkYoyrwTfBwNMnSCgQ5MOjJ/view?usp=sharing" class="button_r" role="button">Resume</a>
        </div>
        <div className="somespace"></div>
        <div className="contact">
            <h1>📝 Contact</h1>

    
            
        </div>
        <div className="social_link">
            <a href="https://www.facebook.com/Armmy.z/"><img className="facebook" src={facebook} alt="facebook"></img></a>
            <a href="https://line.me/ti/p/lvauR54pcx?fbclid=IwAR0FZOwmogL8eUegeN-JNaVcqq5EVX4-5EbB92KjNeXyXxIeDK_kKj7r1Do"><img className="line" src={line} alt="line"></img></a>
            <a href="mailto:papontee.anosri@g.swu.ac.th?subject=subject text"><img className="mail" src={mail} alt="mail"></img></a>
        </div>
        <div className="somespace"></div>
        </section>
        
    
    )
}

export default Resume