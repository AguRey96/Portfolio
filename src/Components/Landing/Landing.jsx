import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
      <h1 className="font-mono text-lg font-semibold text-red-500 text-[55px] w-full mx-auto text-center">
        Bienvnidos!
      </h1>
      <div className="flex text-red-500 text-[70px] mx-auto">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Reynoso Agustin')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Full-Stack Developer')
              .pauseFor(1000)
              .start();
          }}
        />
      </div>
      <Link to={'/home'}>
        <button className={style.button}>
          <span>Ingresar</span>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
