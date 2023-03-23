import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Carrousel = ({ info }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="flex text-center">
      <div className="w-3/5">
        <Carousel
          onChange={(index) => setCurrentIndex(index)}
          interval="2000"
          transitionTime="2000"
          infiniteLoop
          showStatus={false}
          dynamicHeight={true}
          className="px-2 py-6"
        >
          {info?.map(({ image, name }, index) => (
            <div>
              <img
                src={image}
                alt={name}
                className="w-300 h-200 object-fit-cover"
              />
              <p className="legend">{name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="pl-2 max-w-[33rem]">
        <h3 className="text-3xl font-bold text-stone-50 pt-6 underline">
          Detalles
        </h3>
        {info[currentIndex]?.marco && (
          <p className="text-stone-300 py-4 max-w-[700px] text-left">
            {info[currentIndex].marco}
          </p>
        )}
        <p className="text-stone-300 py-4 max-w-[700px] text-left">
          {info[currentIndex]?.details}
        </p>
        {info[currentIndex]?.tecnologias && (
          <div className="py-6">
            <h3 className="text-3xl font-bold text-stone-50 underline">
              Qué se utilizó?
            </h3>
            <p className="text-stone-300 py-4 max-w-[700px]">
              {info[currentIndex]?.tecnologias}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carrousel
