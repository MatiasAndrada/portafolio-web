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
  /*   handlebars, */
  express,
  /*   nginx,
  socket, */
  aws,
  /*   adonis, */
  docker,
  /*   jquery, */
  /*   kubernetes, */
  sass,
  graphQL,
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
    link: 'https://pub.coderhouse.com/legacy-certificates/61cdec542bed53003d8455e1?lang=es'
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
    link: 'https://pub.coderhouse.com/legacy-certificates/624c3073fa5d58001aa9d6a4?lang=es'
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
    link: 'https://pub.coderhouse.com/legacy-certificates/63f5609005d81e000e838b34?lang=es'
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
    link: 'https://pub.coderhouse.com/legacy-certificates/65e9017682e54de735329c41?lang=es'
  },
  {
    title: 'Desarrollo de aplicaciones (React Native)',
    description:
      'En este curso aprenderás los conocimientos y bases para crear aplicaciones bridge con capacidad de despliegue tanto para Android como iOS, utilizando React Native, Javascript y un software de prototipado como Sketch o Adobe Xd. Te conectarás a APIs y aprenderás la capacidad de sync con Firebase o Realm db. Al finalizar este curso estarás en condiciones de desarrollar, implementar y desplegar tu propia aplicación móvil.',
    items: [],
    image: desarrolloAppCertificate,
    link: 'https://pub.coderhouse.com/legacy-certificates/661b1a67a9be799635fb3bc4?lang=es'
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
  } */ /*  {
    name: 'JavaScript',
    icon: javascript
  }, */
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
  {
    name: 'Redux',
    icon: redux
  },
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
  /*   {
    name: 'Handlebars',
    icon: handlebars
  }, */

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
  },
  {
    name: 'GraphQL',
    icon: graphQL
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
      'ORM: Prisma, Sequelize, ',
      'Gestión de sesiones: Redis, cookie-session, express-session, JWT'
    ]
  },
  /*   {
    title: 'Arquitectura Y Patrones de diseño',
    items: [
      'DAO (Data Access Object)',
      'DTO (Data Transfer Object)',
      'MVC(Model-View-Controller)',
      'Patron Singleton',
      'Patron Factory',
      "Patron Observer",
      "Patron Strategy",
    ]
  }, */
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
      'Websockets'
    ]
  },
  /*   {
    title: 'Herramientas y bibliotecas',
    items: [
      'Redux',
      'Zustand',
      'Astro',
      'Vite',
      'Npm y Yarn'
      "Deno"
    ]
  }, */
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

  {
    title: 'Seguridad y autenticación',
    items: [
      'AWS Cognito y Secrets Manager',
      'Auth.js',
      'Passport',
      'OAuth',
      'Passwordless',
      'JSON Web Tokens',
      'bcrypt',
      'Cors'
    ]
  },
  */
  {
    title: 'DevOps y despliegue',
    items: [
      'AWS - EC2, ECS, EKS, EBS',
      'Clusters y Servidores',
      'Proxy y Proxy inverso',
      'Docker y Kubernetes',
      'CI/CD',
      /*       'Github Actions', */
      'Balanceadores de carga'
      /*       'pm2 y forever (gestor de procesos NodeJS)' */
    ]
  }
]

const experiences = [
  {
    title: 'Full Stack Developer Jr',
    company_name: 'En Hacela Simple',
    icon: fullStack,
    iconBg: '#E6DEDD',
    date: 'Feb 2025 - Actualmente',
    points: [
      // Frontend
      'Desarrollo de interfaces de usuario utilizando React.',
      /* 'Creación de un microfrontend de gestión desarrollado en Next.js, con soporte SSR.',*/
      'Implementación de capacidades de PWA mediante Workbox, mejorando la accesibilidad y la experiencia en dispositivos móviles, acercándose a una experiencia de aplicación nativa.',
      'Desarrolle un blog de la empresa utilizando astro, con un enfoque en la optimización del rendimiento y la carga rápida de contenido. Con su panel de administración con Strapi CMS.',
      // Backend
      'Estoy a cargo del servidor linux de la empresa, gestionando la infraestructura y servicios subyacentes, incluyendo la configuración de Nginx como proxy inverso para las diversas apps y la implementación de certificados SSL para conexiones seguras.',
      'Implementación de sistema de internacionalización para soportar múltiples idiomas.',
      'Desarrollo del backend utilizando Express como framework principal, con soporte para SSR para mejorar el rendimiento y SEO.',
      'Gestión de datos mediante GraphQL y Sequelize, incluyendo el control de migraciones para bases de datos.',
      'Implementación de cargas de imágenes en el backend, normalizando y optimizando antes de guardarlas.',
      'Integración de WebSockets para comunicación en tiempo real.'
    ]
  }
]

const now = [
  {
    title:
      'Cursando la ultima materia para recibir el título de Técnico Superior en Programación. (UTN-FRVM)'
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
    name: 'ProjectAdmin',
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
      'Un espejo con información de SpaceX. Utiliza astro como tecnología. Cuenta con paginación en la api y filtros. Ademas de una galería de imágenes',
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
    source_demo_link: 'https://spacexmirror-bq3.pages.dev/'
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
    source_demo_link: 'https://playmovie-web.pages.dev/'
  }
  /*   {
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
  } */
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
