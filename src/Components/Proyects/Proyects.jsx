import React from "react"
import { Link } from "react-router-dom"
import { Proyectos } from "./Proyectos"

const Proyects = () => {
  return (
    <div name="Proyectos" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-stone-50">💻 Proyectos</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {Proyectos.map(({ image, name }, index) => (
            <Link to={`/${name}`}>
              <div
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "100% 100%",
                }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center  mx-auto content-div cursor-pointer h-[20rem] hover:scale-110 duration-700"
              >
                <div className="opacity-0 group-hover:opacity-100  duration-700 mt-4">
                  <span
                    className={`text-2xl font-bold ${
                      name === "Gym-Fit" ? "text-white" : "text-black"
                    } tracking-wider`}
                  >
                    {name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proyects
