import React from "react";

export default function NavBar() {
    return (
        <nav className="flex justify-center gap-6 bg-gray-200 p-4 shadow-md">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#perfil" className="hover:text-blue-600">Perfil</a>
            <a href="#escolaridade" className="hover:text-blue-600">Escolaridade</a>
            <a href="#cursos" className="hover:text-blue-600">Cursos</a>
        </nav>
    );
}