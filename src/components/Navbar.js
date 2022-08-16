import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar(){
    return (
    <nav className="nav">
    <h1><a className="logo" href="index.html"><span>Arm</span>myyyyy</a></h1>

    <div class="container naveffect">

    <ul>
    <li><Link activeClass="active" smooth spy to="home">Home</Link></li>
    <li><Link activeClass="active" smooth spy to="about">About</Link></li>
    <li><Link activeClass="active" smooth spy to="work">Work</Link></li>
    <li><Link activeClass="active" smooth spy to="resume">Resume</Link></li>
    </ul>

    </div>
    </nav>
    
    );   
}

export default Navbar;