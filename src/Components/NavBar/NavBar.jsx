import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const menu = ['Inicio', 'Sobre mi', 'Tecnologias', 'Proyectos', 'Contacto'];
  return (
    <div className="fixed mx-auto w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-slate-200 z-10">
      <div className="font-bold text-[30px]  cursor-pointer hover:border-slate-200transition hover:text-red-500 duration-700">
        <h1>Reynoso Agustin</h1>
      </div>
      <ul className="hidden md:flex">
        {menu.map((seccion, i) => (
          <li key={i}>
            <Link
              to={seccion}
              smooth={true}
              duration={500}
              className="font-bold cursor-pointer hover:text-red-500 rounded p-2 duration-700"
            >
              {seccion}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {menu.map((seccion, i) => (
          <li className="py-6 text-4xl" key={i}>
            <Link
              onClick={handleClick}
              to={seccion}
              smooth={true}
              duration={500}
            >
              {seccion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
