import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import './css/styles.scss'
function App() {
  return (
    <>
      <Header />
      <Wrapper />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
