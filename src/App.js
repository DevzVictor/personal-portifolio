
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <ProjectsSection/>
    </div>
  );
}

export default App;
