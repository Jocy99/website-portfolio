import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './index.css';

function App() {
  const [ currentPage, setCurrentPage ] = useState('home');
  function onChange() {
    if (currentPage === 'home') {
      return <AboutMe />
    } else if (currentPage === 'portfolio') {
      return <Portfolio />
    } else if (currentPage === 'contact') {
      return <Contact />
    } else if (currentPage === 'resume') {
      return <Resume />
    }
  }
  return (
      <div className="App" >
      <Navbar setCurrentPage={setCurrentPage}/>
      <Header/>
      <main>
        {onChange()}
      </main>
      <Footer/>
      </div>
  );
}

export default App;
