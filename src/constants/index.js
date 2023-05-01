//#cSpell: disable
import {
//!certificates 
webDesignCertificate,
javascriptCertificate,
reactjsCertificate,
backendCertificate,

  //!tech
  html,
  css,
  javascript,
  git,
  tailwind,
  reactjs,
  redux,
  nodejs,
  handlebars,
  express,
  nginx,
  socket,
  figma,
  threejs,
  fullStack,
  beer,
  me,
  //!projects
  eCommerce,
  chatApp,
  playMovie,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const certificates = [
  {
    title: "Desarrollo Web",
    description:
      "Adquirí conocimientos en herramientas de optimización de sitios web, como el uso de GIT y preprocesadores como SASS. Aprendí a aplicar Bootstrap y comprendí la importancia del SEO. También aprendí a subir mi sitio a un servidor y a interactuar con él. Finalmente, ademas a presentar un presupuesto y atender a mi cliente final.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "React",
      "Angular",
    ],
    image: webDesignCertificate,
    link: "https://www.coderhouse.com/certificados/61cdec542bed53003d8455e1",
  },
  {
    title: "JavaScript",
    description:
      "Puedo crear aplicaciones de todo tipo, aplicando casos prácticos en mis desarrollos. Además, aprendí a utilizar librerías como jQuery entre muchas otras  y técnicas de desarrollo para crear aplicaciones modernas con AJAX. Ahora soy capaz de crear soluciones web interactivas y trasladar mis conocimientos a cualquier framework JavaScript.",
    items: [
      "Sintaxis y gramática de JavaScript",
      "Manipulación del DOM",
      "Eventos y manejo de eventos",  
      "Funciones y objetos",
      "Asincronía y callbacks",
      "Promesas y async/await",
    ],
    image: javascriptCertificate,
    link: "https://www.coderhouse.com/certificados/624c3073fa5d58001aa9d6a4",
  },
  {
    title: "ReactJS",
    description:
      "Aprendí a programar por componentes utilizando JavaScript, tanto en su versión estándar como en ES6, También adquirí conocimientos sobre el uso de flujos de datos y el manejo de rutas en aplicaciones SPA. Ademas a utilizar el virtual DOM. Estoy  en condiciones de desarrollar cualquier proyecto con Javascript y React.",
    items: [
      "Componentes y props",
      "Estado y ciclo de vida",
      "Manejo de formularios",
      "React Router",
      "Redux",
      "Testing con Jest y Enzyme",
    ],
    image: reactjsCertificate,
    link: "https://www.example.com/e-commerce",
  },
  {
    title: "Backend",
    description:
      "He aprendido a programar en Javascript del lado del servidor utilizando técnicas asincrónicas y trabajando con Bases de datos SQL y NoSQL dominando la gestión de los datos de forma eficiente y con facilidad de escalabilidad. También he aprendido sobre la arquitectura de servidor y el modelo MVC. Además, testear y monitorear aplicaciones REST, y dominar la tecnología Websockets, He normalizado/denormalizado datos en formato JSON, he manejado patrones de diseño y code style para aplicaciones de alta concurrencia. Por último, puedo implementar proyectos en la nube a través de plataformas como Heroku, Glitch, MongoAtlas y AWS.",
    items: [
      "NodeJS",
      "Express",
      "Hbs, Pug, Ejs",
      "MongoDB",
      "Firebase",
      "MySQL",
      "Websockets",
      "Sequelize",
      "APIs RESTFul y GraphQL",
      "Autenticación y Seguridad",
      "Escalabilidad y Rendimiento",
    ],
    image: backendCertificate,
    link: "https://www.coderhouse.com/certificados/63f5609005d81e000e838b34",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Handlebars",
    icon: handlebars,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "socket.io",
    icon: socket,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const skills = [
  {
    title: "Bases de datos",
    items: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Firebase",
      "DynamoDB(AWS)",
      "Redis",
      "Kenex y Sequalize(ORM)",
    ],
  },
  {
    title: "Arquitectura y metodologías ágiles de software",
    items: [
      "BEM",
      "Atomic Design",
      "CDD (Component Driven Development)",
      "TDD (Test Driven Development)",
      "Mocks",
      "MVC(Html on wire y Data on wire)",
      "Patron DAO Y DTO",
      "Patron Observer",
      "Patron Singleton",
      "Patron Factory",
      "Patron Strategy",
    ],
  },
  {
    title: "Herramientas de automatización y construcción",
    items: ["Webpack", "Babel", "Gulp", "NPM y Yarn", "Deno", "Adonis"],
  },
  {
    title: "Pruebas y testing",
    items: ["TDD", "Mocks", "Jest", "Enzyme", "Mocha", "Chai"],
  },
  {
    title: "Seguridad y autenticación",
    items: [
      "JOI",
      "HELMET",
      "JWT",
      "OAuth",
      "Passwordless",
      "Passport",
      "Helmet",
      "bcrypt",
      "Cookies",
      "Sessions",
    ],
  },
  {
    title: "Desarrollo de aplicaciones",
    items: ["SPA", "PWA", "MVC", "REST", "GraphQL", "Websockets"],
  },
  {
    title: "DevOps y despliegue",
    items: [
      "Heroku",
      "Glitch",
      "MongoAtlas",
      "AWS",
      "Cluster",
      "Proxies y Load Balancers",
      "Nginx",
      "Docker",
      "Kubernetes",
      "Cors",
    ],
  },
];

const experiences = [
  {
    title: "Editor de multimedia y contenido de marca",
    company_name: "Huata-Haruu - Cerveceria Artesanal.",
    icon: beer,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Trabajé en la producción de videos promocionales y publicitarios para diversas marcas utilizando Adobe Premiere y After Effects.",
      "Me encargué de la edición de video, incluyendo la selección de clips, la creación de efectos visuales y la integración de música y efectos de sonido.",
      "También utilicé Adobe Photoshop para la creación y edición de gráficos y animaciones, incluyendo la creación de diseños de logotipos y la edición de imágenes para su uso en redes sociales y otros canales de marketing digital.",
    ],
  },
  {
    title: "Desarrollador Web Freelance",
    company_name: "Mi propia empresa",
    icon: me,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Feb 2022",
    points: [
      "Diseñé y desarrollé páginas web para contenido de marca, utilizando HTML, CSS y JavaScript",
      "Utilicé herramientas como AdobeXD para crear wireframes y prototipos de las páginas, lo que permitió al cliente visualizar cómo se vería la página antes de la implementación.",
      "Implementé técnicas de SEO para mejorar el posicionamiento de las páginas en los motores de búsqueda y aumentar la visibilidad de los sitios web de los clientes.",
      "Realicé pruebas exhaustivas de calidad en las páginas para asegurarme de que estuvieran libres de errores y fueran compatibles con diferentes navegadores y dispositivos.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "XYZ Software Solutions",
    icon: fullStack,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, Express, MongoDB",
      "Trabajar en colaboración con equipos multifuncionales, incluyendo diseñadores y otros desarrolladores, para crear productos de alta calidad y soluciones escalables.",
      "Adquirí habilidades valiosas en el diseño y desarrollo de  API RESTful y GraphQL, así como en la evaluación y selección de tecnologías y herramientas para mejorar el rendimiento y la eficiencia del desarrollo.",
      "También me familiaricé con metodologías ágiles de desarrollo de software.",
      "Trabajar en proyectos que involucran bases de datos relacionales y no relacionales, como MySQL y MongoDB, así como en la implementación de estrategias de seguridad y autenticación para proteger la información de los usuarios.",
    ],
  },
];

const now = [
  {
    title: "Estudiante universitario de programación en (UTN-Villa Maria)",
  },
  {
    title: "Cursando AWS Cloud Computing (UTN -- Buenos Aires)",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "Utiliza la arquitectura repository y cuenta con un sistema de gestión de base de datos con DAO, ofreciendo la posibilidad de elegir entre mongoDB, txt y Firebase. Tiene una lista de productos y un panel de administrador para ver el carrito por usuario. El sistema de autenticación que utiliza es Passport con encriptación y  la posibilidad de foto de perfil,  cuenta con un sistema de mensajes y logs.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "dao",
        color: "green-text-gradient",
      },
      {
        name: "restApi",
        color: "pink-text-gradient",
      },
      {
        name: "passport",
        color: "orange-text-gradient",
      },
      {
        name: "repository",
        color: "purple-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link: "https://github.com/MatiasAndrada/backend-practice-final",
  },
  {
    name: "Chat App",
    description:
      "Este es un proyecto en el que desarrollé una aplicación de chat en tiempo real utilizando Node.js, Socket.io y MongoDB.",
    tags: [
      {
        name: "websocket",
        color: "blue-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/",
  },
  /*
  {
    name: "Covid-tracker",
    description:
      "En este proyecto, desarrollé una aplicación de seguimiento de COVID-19 utilizando React y la API de disease.sh. Con esta aplicación, los usuarios pueden ver estadísticas y gráficos relacionados con la pandemia. También pueden ver los datos de COVID-19 en tiempo real en un mapa interactivo.. También me aseguré de que la aplicación fuera fácil de usar y visualmente atractiva.",
    tags: [
      {
        name: "worldmap",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  */
  {
    name: "Play Movie",
    description: "En esta aplicación de películas desarrollada en React, se utiliza la API de omdbapi para obtener información de películas y mostrarlas. La aplicación permite a los usuarios buscar películas por título y ver detalles de como el reparto, la calificación, el resumen, actores, etc. Además, la aplicación cuenta con un sistema de autenticación para que los usuarios puedan crear cuentas y guardar películas en su lista de favoritos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: playMovie,
    source_code_link: "https://github.com/MatiasAndrada/playMovie",
  },
];

export {
  certificates,
  technologies,
  skills,
  experiences,
  now,
  testimonials,
  projects,
};
