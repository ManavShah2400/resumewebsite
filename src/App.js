import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/skills/skills";
import Exp from "./components/Exp/Exp";
import Project from "./components/Project/Project";
import ContactMe from "./components/Contact Me/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <br/>
      <Exp/>
      <Project/>
      <ContactMe/>
    </div>
  );
}

export default App;
