import React from 'react';
import foto from '../../assets/Foto.jpeg';

const Inicio = () => {
  return (
    <div name="Inicio" className="w-full h-screen flex items-center flex-wrap">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-500 text-xl">Hola 👋!, mi nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-stone-50">
          Agustin Reynoso
        </h1>
        <p className="text-stone-300 py-4 max-w-[700px]">
          Desarrollador Web Full Stack graduado de "Soy Henry". <br></br>
          Soy una persona proactiva, responsable y ordenada. <br></br>
          Me gustan los desafíos y sobre todo trabajar en equipo.
        </p>
      </div>
      <div className="flex items-center justify-center h-[25rem] mx-4">
        <img
          src={foto}
          alt="Foto de Agustin"
          className="md:h-full object-cover rounded-lg border flex sepia drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Inicio;
