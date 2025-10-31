import React from "react";
import NavBar from "./componentes/NavBar";
import Home from "./componentes/Home";
import Perfil from "./componentes/Perfil";
import Escolaridade from "./componentes/Escolaridade";
import Footer from "./componentes/Footer";
import Cursos from "./componentes/Cursos"
import "./index.css";

export default function app(){
  return(
    <div className="font-sans">
      <NavBar />
      <Home />
      <Perfil />
      <Escolaridade />
      <Cursos/>
      <Footer/>

    </div>
  );
}