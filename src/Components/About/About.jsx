import React from 'react';
const About = () => {
  return (
    <div name="Sobre mi" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full sm:text-left pl-4 font-bold">
          <p className="text-4xl text-stone-50">💁🏽‍♂️ Sobre mí</p>
          <p className="pt-6 pb-2 text-2xl text-stone-200">👉 Soft Skill</p>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div className="sm:text-left text-lg font-bold text-stone-300">
            <ul>
              <li>🔶 Soy una persona proactiva, responsable y ordenada.</li>
              <li>
                🔶 Resolucion de Problemas, trabajo en Equipo, buenas relaciones
                Interpersonales.
              </li>
              <li>
                🔶 Pensamiento critico, empatia, abierto a las criticas
                constructivas.
              </li>
              <li>
                🔶 Siempre con ganas en aprender y emprender nuevos desafios.
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1000px] pl-4 w-full sm:text-left font-bold">
          <p className="pt-6 pb-2 text-2xl text-stone-200">
            🚀 ¿Cuál es mi motivación?
          </p>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div className="sm:text-left text-lg font-bold text-stone-300">
            <ul>
              <li>⚡ Desarrollarme en equipos de trabajo eficientes.</li>
              <li>⚡ Mejorar tanto en el aspecto personal, como laboral.</li>
              <li>⚡ Cumplir objetivos y metas planteadas.</li>
              <li>
                ⚡ Seguir adquiriendo conocimientos referidos al desarrollo web.
              </li>
              <li>⚡ Aprender nuevos lenguajes de programación</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
