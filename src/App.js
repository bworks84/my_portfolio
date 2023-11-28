import Navbar from "./Components/NavBar/Navbar";
import Intro from "./Components/Intro/Intro";
import Footer from "./Components/Footer/Footer";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Resume />
    </div>
  );
}

export default App;
