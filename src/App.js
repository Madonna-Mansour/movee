import './App.css';
import 'react-bootstrap'
import '@fortawesome/fontawesome-svg-core'
import Home from './componnts/Home';
import Servieses from './componnts/Servieses';
import Skills from '../src/componnts/Skills';
import Projects from '../src/componnts/Projects'
import Projects2 from '../src/componnts/Projects2'
import Contact from './componnts/Contact';


function App() {
  return (
    <div className="App">
       <Home />
       <Servieses />
       <Skills />
       <Projects />
       <Projects2 />
       <Contact />
    </div>
  );
}

export default App;
