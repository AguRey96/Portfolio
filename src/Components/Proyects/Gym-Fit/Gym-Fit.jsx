import React from "react"
import { useNavigate } from "react-router-dom"
import Buttons from "../../Buttons/Buttons"
import Carousel from "../../Carousel/Carousel"
import { GymInfo, GymFitLink } from "../Proyectos"

const Gym = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div>
      <div className="mt-2 mb-4 flex">
        <button
          onClick={handleClick}
          className="ml-4 mb-0 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-red-500 group-hover:from-pink-500 group-hover:to-red-500 hover:text-stone-50 text-stone-50 focus:ring-4 focus:outline-none focus:ring-red-500"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-fondo rounded-md group-hover:bg-opacity-0">
            Atras
          </span>
        </button>
        <h1 className="text-4xl font-bold text-stone-50 mx-auto text-center">
          Gym-Fit
        </h1>
      </div>
      <Carousel info={GymInfo} />
      <Buttons link={GymFitLink} />
    </div>
  )
}

export default Gym
