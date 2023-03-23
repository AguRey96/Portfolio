import React from "react"

const Buttons = ({ link }) => {
  return (
    <div>
      {link?.map(({ Repositorio, Deploy, repoBack }) => (
        <div className="mt-[-1.2rem] text-center ">
          <a href={Repositorio.link} target="_blank" rel="noopener noreferrer">
            <button className="ml-4 mb-0 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-red-500 group-hover:from-pink-500 group-hover:to-red-500 hover:text-stone-50 text-stone-50 focus:ring-4 focus:outline-none focus:ring-red-500">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-fondo rounded-md group-hover:bg-opacity-0">
                {Repositorio.name}
              </span>
            </button>
          </a>
          {repoBack && (
            <a href={repoBack.link} target="_blank" rel="noopener noreferrer">
              <button className="ml-4 mb-0 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-red-500 group-hover:from-pink-500 group-hover:to-red-500 hover:text-stone-50 text-stone-50 focus:ring-4 focus:outline-none focus:ring-red-500">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-fondo rounded-md group-hover:bg-opacity-0">
                  {repoBack.name}
                </span>
              </button>
            </a>
          )}
          <a href={Deploy} target="_blank" rel="noopener noreferrer">
            <button className="ml-4 mb-0 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-red-500 group-hover:from-pink-500 group-hover:to-red-500 hover:text-stone-50 text-stone-50 focus:ring-4 focus:outline-none focus:ring-red-500">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-fondo rounded-md group-hover:bg-opacity-0">
                Deploy
              </span>
            </button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Buttons
