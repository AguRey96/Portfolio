import React from "react"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Inicio from "../Inicio/Inicio"
import NavBar from "../NavBar/NavBar"
import Proyects from "../Proyects/Proyects"
import Skills from "../Skills/Skills"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Inicio />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  )
}

export default Home
