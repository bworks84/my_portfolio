import Navbar from "./Components/NavBar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Resume from "./Components/Resume/Resume";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Resume />
      <Contact />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
