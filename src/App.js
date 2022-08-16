import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Work from './components/Work'
import Resume from './components/Resume'


function App() {
  return(
  <div>
  <Navbar/>
  <Home/>
  <About/>
  <Work/>
  <Resume/>
  </div>
  )
}

export default App;
