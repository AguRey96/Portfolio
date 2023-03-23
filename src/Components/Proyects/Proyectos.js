import Gym from "../../assets/App-Gym.png"
import Food from "../../assets/Food.png"
import FoodHome from "../../assets/Food-Home.png"
import FoodDetails from "../../assets/Food-Details.png"
import FoodForm from "../../assets/Food-Form.png"
import GymAuth from "../../assets/Gym-Auth.png"
import GymHome from "../../assets/Gym-Home.png"
import GymStore from "../../assets/Gym-Store.png"
import GymCarrito from "../../assets/Gym-Carrito.png"
import GymRoutines from "../../assets/Gym-Routines.png"
import GymDetails from "../../assets/Gym-Details.png"
import GymAgenda from "../../assets/Gym-Agenda.png"
import GymFeedback from "../../assets/Gym-Feedback.png"
import GymDashboard from "../../assets/Gym-Dashboard.png"

export const Proyectos = [
  {
    name: "Gym-Fit",
    image: Gym,
  },
  {
    name: "Food-PI",
    image: Food,
  },
]

export const FoodInfo = [
  {
    name: "Food-PI",
    image: Food,
    details:
      "Se diseñó y creó una aplicación que brinda información sobre recetas, trayendo toda la información desde una API externa, utilizando los endpoints que esta misma provee, como así también, la posibilidad al usuario de filtrar, buscar, crear y guardar recetas en una base de datos propia.",
    marco:
      'Este proyecto fue realizado en el marco de "Proyecto Individual" del bootcamp "Soy Henry". Donde el desafío era hacer la aplicación sin librerías externas más que las mencionadas al final.',
    tecnologias:
      "Javascript - Node.js - Express.js - Sequelize.js - PostgreSQL - CSS - HTML - React.js - Redux.js",
  },
  {
    name: "Home - Food",
    image: FoodHome,
    marco:
      "En esta imagen se ve el Home Page, donde estan todas las recetas, un paginado, los diferentes filtros y la barra de busqueda.",
    details:
      "Cada receta es una CardAction en la cual al pinchar en ella se accede a los detalles de la misma.",
  },

  {
    name: "Details- Food",
    image: FoodDetails,
    details:
      "Aqui se encuentran los detalles de cada receta con diferentes cards que indican la receta y otros tipos de datos.",
  },

  {
    name: "Form - Food",
    image: FoodForm,
    marco:
      "Este es el formulario para crear resetas propias, cuenta con diferentes tipos de inputs y validacion de campos necesarios.",
    details:
      "Una vez creada la receta se guardara en la base de datos para que poder visualizarla en el Home Page asi como tambien entrar en sus detalles.",
  },
]

export const FoodLink = [
  {
    Repositorio: {
      link: "https://github.com/AguRey96/PI-FOOD",
      name: "Repositorio",
    },
    Deploy: "https://pi-food-henry-ar.vercel.app/",
  },
]
export const GymInfo = [
  {
    name: "Gym-Fit",
    image: Gym,
    details:
      "Mis aportes: Mayormente me realice la logica de las funcionalidades del lado del front, asi como las querys que relacionaban el cliente con el backend. Asi tambien la realizacion de ciertos componentes como el carrusel de fotos del home, entre otras cosas.",
    marco:
      "Como parte del proyecto final del bootcamp de Henry, desarrollamos en equipo una aplicación para pequeños y medianos gimnasios, brindándole a los dueños de los mismos la posibilidad de darle a sus clientes un servicio de valor agregado a través de la aplicación web. En la misma los usuarios podrán conocer la agenda semanal del gimnasio, su staff, las instalaciones y ver las rutinas que posee el gimnasio con sus ejercicios. A su vez, la posibilidad de comprar productos del gimnasio o la membresía del mismo, a través de la pasarela de pagos de Mercado Pago.",
    tecnologias:
      "SON Web Token (JWT) - Express.js - PL/SQL - JavaScript - Hojas de estilos en cascada (CSS) - HTML - React.js - Node.js - Redux Toolkit - PostgreSQL - Sequelize.js - RTK Query - Material-UI - SweetAlerts",
  },
  {
    name: "Auth - Gym",
    image: GymAuth,
    marco:
      "Aqui se encuetra el formulario para iniciar sesion, registrarse por email o la misma cuenta de Google, asi tambien la opcion recuperar la contraseña.",
    details: "Este esta controlado por Auth0.",
  },

  {
    name: "Home- Gym",
    image: GymHome,
    marco:
      "Este es el Home Page, donde podemos ver un navBar con los distintos links para navegar en la paguina, se puede observar que contamos con un carusel que contiene la misma función de navegar en las diferentes secciones con imagener representativas. Por ultimo podemos ver una sección de 'Mis Rutinas' donde apareceran nuestras rutinas marcadas como favoritas y al pinchar en ellas entramos al detalle de la misma.",
    details:
      "En el mismo Home, se encuentra 2 secciones mas que no se ilustran en la imagen que son algunos productos de la tienda y las ofertas de membresias. Ademas de un footer con informacion.",
  },

  {
    name: "Rutinas - Gym",
    image: GymRoutines,
    marco:
      "Estas cards muestran todas la rutinas creadas, asi como la posibilidad de filtrar y poner favoritos.",
    details:
      "Al estar en el perfil de Admin o Staff, se puede borrar y crear nuevas rutinas.",
  },
  {
    name: "Detalles - Gym",
    image: GymDetails,
    details:
      "Los detalles de la rutina muestran los ejercicios por dia asi como un gif para saber como realizar el ejercicio.",
  },
  {
    name: "Tienda - Gym",
    image: GymStore,
    marco:
      "Estas cards muestran todos los productos que estan a la venta, asi como la posibilidad de filtrar y agregar al carrito. Al pinchar en un producto se muestran los detalles y la posibilidad de comprar directamente el producto.",
    details:
      "Al estar en el perfil de Admin, se puede borrar, editar y agregar nuevos productos.",
  },
  {
    name: "Carrito - Gym",
    image: GymCarrito,
    marco:
      "Aqui se pueden administrar todo lo que se agregó al carrito, agregando mas productos del mismo a no ser de que el stock no te lo permita.",
    details:
      "Las compras de los productos y las membresias son realizados a traves de la pasarela de pago de Mercado Pago.",
  },
  {
    name: "Agenda - Gym",
    image: GymAgenda,
    marco:
      "Esta es la agenda semanal donde podremos ver las distintas clases con sus horarios.",
    details: "Al estar con usuario de Admin o Staff podremos crear las clases.",
  },
  {
    name: "FeedBack - Gym",
    image: GymFeedback,
    details: "Aqui el usuario puede dejar su feedback.",
  },
  {
    name: "Dashboard - Gym",
    image: GymDashboard,
    details:
      "Esto solo puede verlos y modificarlo el Admin. Aqui se encuentra toda la informacion de las ventas asi como tambien la entrada a los feedbacks de los clientes y la administracion de roles.",
  },
]

export const GymFitLink = [
  {
    Repositorio: {
      link: "https://github.com/AguRey96/gym-frontend-app",
      name: "Repositorio FrontEnd",
    },
    repoBack: {
      link: "https://github.com/AguRey96/AppGymBackend",
      name: "Repositorio BackEnd",
    },
    Deploy: "https://app-gym-frontend.vercel.app/",
  },
]
