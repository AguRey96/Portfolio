import React from "react"
import technologies from "./technologies"

const Skills = () => {
  return (
    <div name="Tecnologias" className="w-full text-stone-50">
      <div className="max-w-[1000px] mx-auto p-4 justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold ">Tecnologias</p>
          <p className="py-4">// Tecnologias con las que he trabajado</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {technologies.map(({ image, name }, index) => (
            <div
              className="shadow-md shadow-[#040c16] md:hover:scale-110 duration-500"
              key={index}
            >
              <img className="w-20 mx-auto" src={image} alt={`${name} icon`} />
              <p className="my-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
