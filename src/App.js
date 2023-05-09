
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <ProjectsSection/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
