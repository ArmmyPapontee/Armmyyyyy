import './Home.css'
import welcome from "./image/welcome.png"
import './Navbar'

function Home(){
    return(
        <section id="home">
        <div className="container_home">
        <img className="image_home"src={welcome} alt="welcome"></img>
        <ul>
        <h1>Welcome to</h1><h1><span>Arm</span>myyyyy</h1>
        </ul>
        </div>
        </section>
        
    )
}

export default Home