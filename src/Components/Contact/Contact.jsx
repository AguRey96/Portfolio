import React from "react"

const Contact = () => {
  return (
    <div name="Contacto" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full sm:text-left pl-4 font-bold">
          <p className="text-4xl text-stone-50 pb-10">💁🏽‍♂️ Contacto</p>
        </div>
        <div className="max-w-[1000px] w-full px-4 sm:text-left text-lg font-bold text-stone-300">
          <ul>
            <li className="pb-4">
              <a
                href="https://www.linkedin.com/in/agustin-reynoso-5a339515a"
                target="_blank"
              >
                <img src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
              </a>
            </li>
            <li className="pb-4">
              <a href="https://github.com/AguRey96" target="_blank">
                <img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" />
              </a>
            </li>
            <li className="pb-4">
              <a href="https://wa.me/+5493584226454" target="_blank">
                <img src="https://img.shields.io/badge/whatsapp-%2325D366.svg?&style=for-the-badge&logo=whatsapp&logoColor=white" />
              </a>
            </li>
            <li>
              <a href="mailto:agureynoso96@gmail.com" target="_blank">
                <img src="https://img.shields.io/badge/email-%23333.svg?&style=for-the-badge&logo=gmail&logoColor=red" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
