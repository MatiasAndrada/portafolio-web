import {
  // !certificates
  webDesignCertificate,
  javascriptCertificate,
  reactjsCertificate,
  backendCertificate,
  awsCertificate,
  nextCertificate,
  desarrolloAppCertificate,
  // !tech
  // html,
  // css,
  javascript,
  typescript,
  git,
  tailwind,
  reactjs,
  nextjs,
  redux,
  nodejs,
  handlebars,
  express,
  nginx,
  socket,
  aws,
  /*   adonis, */
  docker,
  /*   jquery, */
  kubernetes,
  sass,
  // figma,
  // threejs,
  // beer,
  //! experiences
  fullStack,
  me,
  //! projects
  eCommerce,
  // chatApp,
  playMovie,
  spaceXmirror,
  projectAdmin,
  //! loaders
  loader1
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'skills',
    title: 'Skills'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const certificates = [
  {
    title: 'Desarrollo Web',
    description:
      'Adquirí conocimientos en herramientas de optimización de sitios web, como el uso de GIT y preprocesadores como SASS. Aprendí a aplicar Bootstrap y comprendí la importancia del SEO. También aprendí a subir mi sitio a un servidor y a interactuar con él. Finalmente, ademas a presentar un presupuesto y atender a mi cliente final.',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'React',
      'Angular'
    ],
    image: webDesignCertificate,
    link: 'https://www.coderhouse.com/certificados/61cdec542bed53003d8455e1'
  },
  {
    title: 'JavaScript',
    description:
      'Puedo crear aplicaciones de todo tipo, aplicando casos prácticos en mis desarrollos. Además, aprendí a utilizar librerías como jQuery entre muchas otras  y técnicas de desarrollo para crear aplicaciones modernas con AJAX. Ahora soy capaz de crear soluciones web interactivas y trasladar mis conocimientos a cualquier framework JavaScript.',
    items: [
      'Sintaxis y gramática de JavaScript',
      'Manipulación del DOM',
      'Eventos y manejo de eventos',
      'Funciones y objetos',
      'Asincronía y callbacks',
      'Promesas y async/await'
    ],
    image: javascriptCertificate,
    link: 'https://www.coderhouse.com/certificados/624c3073fa5d58001aa9d6a4'
  },
  {
    title: 'React.js',
    description:
      'Aprendí a programar por componentes utilizando JavaScript, tanto en su versión estándar como en ES6, También adquirí conocimientos sobre el uso de flujos de datos y el manejo de rutas en aplicaciones SPA. Ademas a utilizar el virtual DOM. Estoy  en condiciones de desarrollar cualquier proyecto con Javascript y React.',
    items: [
      'Componentes y props',
      'Estado y ciclo de vida',
      'Manejo de formularios',
      'React Router',
      'Redux',
      'Testing con Jest y Enzyme'
    ],
    image: reactjsCertificate,
    link: 'https://www.example.com/e-commerce'
  },
  {
    title: 'Back-end',
    description:
      'He aprendido a programar en Javascript del lado del servidor utilizando técnicas asincrónicas y trabajando con Bases de datos SQL y NoSQL dominando la gestión de los datos de forma eficiente y con facilidad de escalabilidad. También he aprendido sobre la arquitectura de servidor y el modelo MVC. Además, testear y monitorear aplicaciones REST, y dominar la tecnología Websocket, He normalizado/denormalizado datos en formato JSON, he manejado patrones de diseño y code style para aplicaciones de alta concurrencia. Por último, puedo implementar proyectos en la nube a través de plataformas como, MongoAtlas y AWS entre otras.',
    items: [
      'NodeJS',
      'Express',
      'Hbs, Pug, Ejs',
      'MongoDB',
      'Firebase',
      'MySQL',
      'Websocket',
      'Sequelize',
      'APIs RESTFul y GraphQL',
      'Autenticación y Seguridad',
      'Escalabilidad y Rendimiento'
    ],
    image: backendCertificate,
    link: 'https://www.coderhouse.com/certificados/63f5609005d81e000e838b34'
  },
  {
    title: 'AWS Cloud Computing',
    description:
      'El curso de AWS Cloud Computing abarca una amplia gama de temas esenciales para la creación y gestión efectiva de infraestructuras en la nube utilizando Amazon Web Services. Desde los fundamentos de la nube y la configuración de cuentas seguras hasta la orquestación de contenedores con ECS y EKS, así como la optimización de recursos mediante herramientas como CloudWatch, el curso explora la configuración de redes virtuales, migraciones a la nube, escalabilidad, tolerancia a fallos y servicios avanzados como Lambda y DynamoDB. Al finalizar, los participantes obtienen habilidades sólidas para diseñar, implementar y administrar aplicaciones y recursos en AWS, aprovechando su potencial para impulsar la innovación y la eficiencia en entornos en la nube.',
    items: [
      'IAM (Identity and Access Management)',
      'EC2 (Elastic Compute Cloud)',
      'S3 (Simple Storage Service)',
      'RDS (Relational Database Service)',
      'VPC (Virtual Private Cloud)',
      'ECS (Elastic Container Service)',
      'EKS (Elastic Kubernetes Service)',
      'CloudWatch',
      'Auto Scaling',
      'Elastic Load Balancing',
      'Lambda',
      'DynamoDB',
      'CloudFormation',
      'CloudTrail',
      'Route 53',
      'SNS (Simple Notification Service)',
      'SQS (Simple Queue Service)',
      'Kinesis',
      'Glacier',
      'Direct Connect',
      'API Gateway',
      'Redshift',
      'Elastic Beanstalk',
      'Athena',
      'Glue',
      'Step Functions',
      'Batch',
      'Elasticache',
      'CodePipeline',
      'CodeDeploy',
      'Cognito',
      'Elasticsearch Service',
      'KMS (Key Management Service)',
      'WAF (Web Application Firewall)'
    ],
    image: awsCertificate,
    cod: 'CER-G6KFOJXF-1030583',
    link: 'https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado'
  },
  {
    title: 'Next.js',
    description:
      'En este curso aprenderás los fundamentos del Server Side Rendering. Crearás una aplicación web auto administrable con NextJS, interactuando con servicios de autenticación y bases de datos, con óptimos resultados en optimización de SEO.',
    items: [],
    image: nextCertificate,
    link: 'https://www.coderhouse.com/ar/certificados/65e9017682e54de735329c41?lang=es'
  },
  {
    title: 'Desarrollo de aplicaciones (React Native)',
    description:
      'En este curso aprenderás los conocimientos y bases para crear aplicaciones bridge con capacidad de despliegue tanto para Android como iOS, utilizando React Native, Javascript y un software de prototipado como Sketch o Adobe Xd. Te conectarás a APIs y aprenderás la capacidad de sync con Firebase o Realm db. Al finalizar este curso estarás en condiciones de desarrollar, implementar y desplegar tu propia aplicación móvil.',
    items: [],
    image: desarrolloAppCertificate,
    link: 'https://www.coderhouse.com/ar/certificados/661b1a67a9be799635fb3bc4?lang=es'
  }
]

const technologies = [
  /*
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  } */ {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'ReactJS',
    icon: reactjs
  },
  {
    name: 'React Native',
    icon: reactjs
  },
  {
    name: 'NextJS',
    icon: nextjs
  },
  /*   
  name: 'Redux Toolkit',
  icon: redux
}, */
  {
    name: 'NodeJS',
    icon: nodejs
  },
  {
    name: 'ExpressJS',
    icon: express
  },
  {
    name: 'Git',
    icon: git
  },
  {
    name: 'TailwindCSS',
    icon: tailwind
  },
  {
    name: 'sass',
    icon: sass
  },
  {
    name: 'Handlebars',
    icon: handlebars
  },

  /*   {
    name: 'Nginx',
    icon: nginx
  }, */
  /*   {
    name: 'socket.io',
    icon: socket
  }, */

  /*   {
      name: "Adonis",
      icon: adonis,
    }, */
  {
    name: 'docker',
    icon: docker
  },
  {
    name: 'AWS',
    icon: aws
  }
  /*   {
      name: "jquery",
      icon: jquery,
    }, */
  /*   {
    name: 'kubernetes',
    icon: kubernetes
  } */

  /*
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "figma",
    icon: figma,
  }, */
]

const skills = [
  {
    title: 'Bases de datos',
    items: [
      'SQL: MySQL, PostgreSQL, SQLite, RDS, Aurora',
      'NoSQL: MongoDB, Firebase, DynamoDB',
      'ORM: Prisma,Sequelize, Mongoose',
      'Gestión de sesiones: Redis, cookie-session, express-session'
    ]
  },
  {
    title: 'Arquitectura Y Patrones de diseño',
    items: [
      'DAO (Data Access Object)',
      'DTO (Data Transfer Object)',
      'MVC(Model-View-Controller)',
      'Patron Singleton',
      'Patron Factory'
      // "Patron Observer",
      // "Patron Strategy",
    ]
  },
  {
    title: 'Desarrollo de aplicaciones',
    items: [
      'SPA (Single Page Application)',
      'PWA (Progressive Web App)',
      'SSR (Server Side Rendering)',
      'CSR (Client Side Rendering)',
      'Desarrollo de aplicaciones móviles nativas',
      'APIs RESTful',
      'APIs GraphQL',
      'Websocket'
    ]
  },
  {
    title: 'Herramientas de automatización y bibliotecas',
    items: [
      'Redux',
      'Zustand',
      'Socket.io',
      'Astro',
      'Vite',
      /*       'Adonis', */
      'Webpack',
      /*
      'Babel', */
      /*       'Gulp', */
      'Npm y Yarn'

      // "Deno"
    ]
  },
  /*   {
    title: "Metodologías agiles",
    items: [
      "Atomic Design",
      "CDD (Component Driven Development)",
      "TDD (Test Driven Development)",
      "BEM (Block Element Modifier)",
    ],
  }, */

  /*
  {
    title: "Frameworks De Pruebas y testing",
    items: [
      "Jest",
      "Artillery",
      "Autocannon",
      "0x",
      "Mocks",
      "Profiler",
      "Mocha",
    ],
  },
*/
  {
    title: 'Seguridad y autenticación',
    items: [
      'AWS Cognito y Secrets Manager',
      'NextAuth.js',
      'Passport',
      'OAuth',
      'Passwordless',
      'JSON Web Tokens',
      'bcrypt',
      'Helmet',
      'Cors'
    ]
  },
  {
    title: 'DevOps y despliegue',
    items: [
      'AWS - EC2, ECS, EKS, EBS',
      'Clusters y Servidores',
      'Proxy y Proxy inverso',
      'Docker y Kubernetes',
      'pm2 y forever (gestor de procesos NodeJS)'
    ]
  }
]

const experiences = [
  /* {
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
  */
  {
    title: 'Desarrollador Web Freelance',
    company_name: 'Mi propia empresa',
    icon: me,
    iconBg: '#E6DEDD',
    date: 'Ene 2021 - Jun 2022',
    points: [
      'Diseñé y desarrollé páginas web para contenido de marca, utilizando HTML, CSS y JavaScript',
      'Creé sitios web personalizados para clientes, desarrollando páginas de inicio, contacto y de servicios.',
      'Utilicé herramientas como AdobeXD o Figma para crear wireframes y prototipos de las páginas, lo que permitió al cliente visualizar cómo se vería la página.',
      'Implementé técnicas de SEO para mejorar el posicionamiento de las páginas en los motores de búsqueda y aumentar la visibilidad de los sitios web de los clientes.',
      'Realicé pruebas de calidad en las páginas web para garantizar que estuvieran libres de errores y fueran responsivas, además de ser compatibles con diversos navegadores.'
    ]
  },
  {
    title: 'Full stack Developer',
    company_name: 'MERN Stack',
    icon: fullStack,
    iconBg: '#E6DEDD',
    date: 'Mar 2023 -  Oct 2023',
    points: [
      'Desarrolle de aplicaciones web utilizando tecnologías como React, Node.js, Express, MongoDB',
      'Trabajar en colaboración con equipos, incluyendo diseñadores y otros desarrolladores, para crear productos de alta calidad con soluciones escalables.',
      'Adquirí habilidades en el desarrollo de  API RESTful y GraphQL, así como en la evaluación, selección de tecnologías y herramientas para mejorar la  eficiencia del desarrollo junto al rendimiento',
      'También me familiaricé con muchas metodologías ágiles en el desarrollo de software.'
      /*       'Trabajar en proyectos que involucran bases de datos relacionales y no relacionales, así como en la implementación de estrategias de seguridad y autenticación para proteger la información de los usuarios.' */
    ]
  }
]

const now = [
  {
    title:
      'Cursando 1er año Tecnicatura Universitaria en Programación (UTN-Villa María - turno noche)'
  }
]
/*
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
*/
const projects = [
  {
    name: 'ProjectAdmin - beta',
    description:
      'En esta aplicación de NextJS para la administración de tareas en equipos de trabajo. También se utiliza NextAuthJS para la autenticación con Oauth con proveedores como Github, Google, también es posible con credenciales, la app mantiene la sincronización de las sesiones y las cuentas vinculadas a un único usuario. En la base de datos se utiliza PrismaORM por lo que es agnóstica a la base de datos. La app permite a los usuarios crear proyectos, grupos de tareas, tareas individuales. Ademas de poder ver los proyectos que le fueron asignados y asignar tareas a otros usuarios. Desplegada en Vercel.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient'
      },
      {
        name: 'PrismaORM',
        color: 'green-text-gradient'
      },
      {
        name: 'NextAuth',
        color: 'pink-text-gradient'
      },
      {
        name: 'SSR',
        color: 'orange-text-gradient'
      },
      {
        name: 'Typescript',
        color: 'purple-text-gradient'
      }
    ],
    image: projectAdmin,
    source_code_link: 'https://github.com/MatiasAndrada/nextjs-adminProject',
    source_demo_link: 'https://projectadmin.vercel.app'
  },

  /*   {
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
  }, */
  {
    name: 'SpaceXMirror',
    description:
      'Un espejo inteligente con información de SpaceX. Utiliza astro como tecnología para acelerar su desarrollo. Cuenta con paginación en la api y filtros. Ademas de una galería de imágenes',
    tags: [
      {
        name: 'Astro',
        color: 'pink-text-gradient'
      },
      {
        name: 'Typescript',
        color: 'blue-text-gradient'
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient'
      }
    ],
    image: spaceXmirror,
    source_code_link: 'https://github.com/MatiasAndrada/spaceXmirror',
    source_demo_link: 'https://spacexmirror.space/'
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
    name: 'Play Movie',
    description:
      'En esta aplicación de películas desarrollada en React, se utiliza la API de omdbapi para obtener información de películas y mostrarlas. La aplicación permite a los usuarios buscar películas por título y ver detalles de como el reparto, la calificación, el resumen, actores, etc. Además, la aplicación cuenta con un sistema de autenticación para que los usuarios puedan crear cuentas y guardar películas en su lista de favoritos.',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient'
      },
      {
        name: 'API',
        color: 'green-text-gradient'
      },
      {
        name: 'Sass',
        color: 'pink-text-gradient'
      }
    ],
    image: playMovie,
    source_code_link: 'https://github.com/MatiasAndrada/playMovie',
    source_demo_link: 'https://playmovie.website'
  },
  {
    name: 'E-commerce',
    description:
      'Utiliza la arquitectura repository con un sistema de gestión de base de datos con DAO, ofreciendo la posibilidad de elegir entre mongoDB, txt y Firebase. Ademas cuenta con un DTO para mejorar la seguridad y la transferencia con el cliente. Tiene una lista de productos y un panel de administrador para ver el carrito por usuario. El sistema de autenticación que utiliza es Passport con encriptación y  la posibilidad de foto de perfil,  cuenta con un sistema de mensajes y logs.',
    tags: [
      {
        name: 'Express',
        color: 'blue-text-gradient'
      },
      {
        name: 'DAO',
        color: 'green-text-gradient'
      },
      {
        name: 'RestAPI',
        color: 'pink-text-gradient'
      },
      {
        name: 'Passport',
        color: 'orange-text-gradient'
      },
      {
        name: 'Repository',
        color: 'purple-text-gradient'
      }
    ],
    image: eCommerce,
    source_code_link: 'https://github.com/MatiasAndrada/backend-practice-final',
    source_demo_link: 'https://github.com/MatiasAndrada/backend-practice-final'
  }
]

export {
  certificates,
  technologies,
  skills,
  experiences,
  now,
  //  testimonials,
  projects
}
