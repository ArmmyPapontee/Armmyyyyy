import './Work.css'
import flutter from "./image/flutter.jpg"
import ecom from "./image/ecom.png"
import wix from "./image/wix.jpg"
import react from "./image/react.png"
import { Link } from 'react-scroll'
import flutter_ex1 from "./image/flutter_ex1.png"
import ecom_ex1 from "./image/ecom_ex1.png"
import ecom_ex2 from "./image/ecom_ex2.png"
import wix_ex1 from "./image/wix_ex1.png"

function Work (){
    return (
    <section id="work">
        <div className="title_project">
        <h1>🗃️ Student Project</h1>
        </div>

        <div class="contaner_project">
        <Link className="link" smooth spy to="flutter">
        <figure class="snip_effect"><img src={flutter} alt="flutter" />
        <figcaption>
        <h2><span>📱 Flutter App</span></h2>
        </figcaption>
        </figure>
        </Link>

        <Link className="link" smooth spy to="ecom">
        <figure class="snip_effect"><img src={ecom} alt="ecom" />
        <figcaption>
        <h2><span>🛒 E-Com Website</span></h2>
        </figcaption>
        </figure>
        </Link>

        <Link className="link" smooth spy to="wix">
        <figure class="snip_effect"><img src={wix} alt="wix" />
        <figcaption>
        <h2><span>wix.com</span></h2>
        </figcaption>
        </figure>
        </Link>

        <Link className="link" smooth spy to="home">
        <figure class="snip_effect"><img src={react} alt="react" />
        <figcaption>
        <h2><span>React.js</span></h2>
        </figcaption>
        </figure>
        </Link>

        </div>

        <section id ="flutter">
            <div className ="container">
            <h1 className="font">Flutter Project (Dart)<a href="https://drive.google.com/file/d/1IuXPOIthOAlxOgiQimgVXmIzwglUE9qN/view" class="button" role="button">Click Me</a></h1>
            <img className="image_flutter"src={flutter_ex1} alt="flutter_ex1"></img>
            </div>
        </section>

        <section id ="ecom">
            <div className="container">
            <h1 className="font">E-com Project (Html, Css, Js, Php)<a href="https://youtu.be/n8-yLLH7d3Q" class="button" role="button">Click Me</a></h1>
            <img className="image_ecom"src={ecom_ex1} alt="ecom_ex"></img>
            <img className="image_ecom"src={ecom_ex2} alt="ecom_ex"></img>
            </div>
        </section>

        <section id ="wix">
            <div className="container">
            <h1 className="font">Wix Blog (Wix.com)<a href="https://armzz987.wixsite.com/everydaylife669" class="button" role="button">Click Me</a></h1>
            <img className="image_flutter"src={wix_ex1} alt="wix_ex"></img>
            </div>
        </section>

    </section>
    )
}

export default Work