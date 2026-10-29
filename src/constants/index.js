// Background style configuration
// hero: 'stars' | 'none'
// sections: 'circles' | 'stars' | 'none'
// Combinations:
//   { hero: 'stars', sections: 'circles' } - estrellas en hero + bolas en resto
//   { hero: 'stars', sections: 'stars' } - solo estrellas en todo
//   { hero: 'none', sections: 'circles' } - solo bolas en todo
//   { hero: 'stars', sections: 'none' } - solo estrellas en hero, nada después
export const BACKGROUND_CONFIG = {
  hero: 'stars',
  sections: 'stars'
}

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
  // tailwind,
  reactjs,
  nextjs,
  // redux,
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
  // sass,
  // graphQL,
  supabase,
  prisma,
  astro,
  // mercadopago,
  // zustand,
  postgresql,
  // figma,
  // threejs,
  //! experiences
  hacelasimpleIcon,
  //! projects
  eCommerce,
  // chatApp,
  playMovie,
  spaceXmirror,
  projectAdmin,
  nubotikLogo,
  nubotikIcon,
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
  // Lenguajes
  {
    name: 'TypeScript',
    icon: typescript
  },
  // Frontend Frameworks
  {
    name: 'ReactJS',
    icon: reactjs
  },
  {
    name: 'NextJS',
    icon: nextjs
  },
  {
    name: 'Astro',
    icon: astro
  },
  // Backend
  {
    name: 'NodeJS',
    icon: nodejs
  },
  {
    name: 'ExpressJS',
    icon: express
  },
  // ORM & Database
  {
    name: 'Prisma',
    icon: prisma
  },
  {
    name: 'PostgreSQL',
    icon: postgresql
  },
  {
    name: 'Supabase',
    icon: supabase
  },
  // DevOps & Cloud
  {
    name: 'docker',
    icon: docker
  },
  {
    name: 'AWS',
    icon: aws
  },
  // Herramientas
  {
    name: 'Git',
    icon: git
  }
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
    title: 'Frontend y UI',
    items: [
      'TailwindCSS',
      'Sass',
      'Radix UI',
      'Framer Motion',
      'React Hook Form',
      'Zod',
      'Recharts',
      'i18n'
      /*       'Vite',
            'Webpack' */
    ]
  },
  {
    title: 'Estado y formularios',
    items: [
      'Zustand',
      'Redux',
      'TanStack Query',
      'React Hook Form',
      'Zod'
    ]
  },
  {
    title: 'Arquitectura web',
    items: [
      'SSR',
      'CSR',
      'SPA',
      'PWA',
      'SaaS multitenant',
      'Apps móviles (React Native)'
    ]
  },
  {
    title: 'Backend y APIs',
    items: ['APIs RESTful', 'GraphQL', 'WebSockets', 'Webhooks', 'Strapi']
  },
  {
    title: 'Bases de datos',
    items: [
      'MySQL',
      'SQLite',
      'RDS',
      'Aurora',
      'MongoDB',
      'Firebase',
      'DynamoDB',
      'Sequelize',
      'Drizzle',
      'Redis'
    ]
  },
  {
    title: 'Autenticación y seguridad',
    items: ['JWT', 'OAuth', 'NextAuth', 'RLS', 'RBAC']
  },
  {
    title: 'Integraciones e IA',
    items: [
      'Mercado Pago',
      'Fiserv',
      'WhatsApp Business API',
      'Resend',
      'OpenRouter',
      'LLMs'
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
  /*  {
     title: 'DevOps y despliegue',
     items: [
       'Vercel',
       'Linux',
       'Nginx (proxy inverso)',
       'SSL',
       'CI/CD',
       'Github Actions',
       'EC2',
       'ECS',
       'Balanceadores de carga',
       'pm2 y forever (gestor de procesos NodeJS)'
     ]
   } */
]

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Nubotik — SaaS multi-tenant de gestión de reservas',
    icon: nubotikIcon,
    iconBg: '#1a9e78',
    date: '2025 - Actualmente',
    points: [
      'Desarrollado de forma autónoma como MVP por encargo directo, hoy utilizado por más de 20 comercios en Argentina.',
      'Arquitectura multi-tenant con paneles diferenciados para comercios y administradores, y administración centralizada de funcionalidades, clientes, campañas de marketing y configuración de cada cuenta.',
      'Bot de IA (LLMs) que toma reservas de forma automatizada por WhatsApp, reduciendo la intervención manual en la operación del comercio.',
      'Módulo de analytics con gráficos de comportamiento de clientes, para cada comercio y para el panel central.',
      'Autenticación OAuth con Supabase RLS y autorización basada en roles para administradores y comercios.',
      'Soporte multilenguaje en 5 idiomas, con traducciones automáticas para contenido estático y dinámico.',
    ]
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Hacela Simple — Marketplace de movilidad y turismo',
    icon: hacelasimpleIcon,
    iconBg: '#E6DEDD',
    date: 'Feb 2024 - 2026',
    points: [
      'Lógica de pagos con Mercado Pago y Fiserv, y sistema de comisiones configurable desde el panel de administración sin tocar código.',
      'Expansión del marketplace para incorporar viajes y excursiones, con flujos de publicación, validación y administración.',
      'Chat en tiempo real con WebSockets, con notificaciones push y por correo para mantener la comunicación aun con usuarios inactivos.',
      'Capacidades PWA mediante Workbox, acercando la experiencia mobile a una app nativa.',
      'Blog autoadministrable con Astro y Strapi CMS, sin depender del equipo técnico para publicar contenido.',
      'Administración de servidor Linux (Nginx como proxy inverso, SSL) y servicios AWS (EC2, S3, Route 53).',
    ]
  }
]

const now = [
  /*   {
      title:
        'Cursando la ultima materia para recibir el título de Técnico Superior en Programación (UTN-FRVM).'
    }, */
  {
    title: "Profesionalizando mi nivel de inglés a diario."
  },
  /*   {
      title:
        'Trabajando como Full Stack Developer en Hacela Simple y Nubotik.'
    }, */
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
  /*   {
      name: 'Nubotik',
      description:
        'Plataforma SaaS multitenant para gestión de listas de espera en comercios. Notificaciones automáticas vía WhatsApp, dashboard en tiempo real con métricas y gráficos, autenticación OAuth con Supabase RLS, internacionalización en 5 idiomas y arquitectura escalable. Desarrollo 100% autónomo en producción.',
      tags: [
        { name: 'NextJS', color: 'blue-text-gradient' },
        { name: 'TypeScript', color: 'purple-text-gradient' },
        { name: 'Prisma', color: 'green-text-gradient' },
        { name: 'Supabase', color: 'pink-text-gradient' },
        { name: 'WhatsAppAPI', color: 'orange-text-gradient' },
        { name: 'i18n', color: 'blue-text-gradient' },
        { name: 'SaaS', color: 'green-text-gradient' }
      ],
      image: nubotikIcon,
      source_code_link: 'https://github.com/MatiasAndrada',
      source_demo_link: 'https://nubotik.com'
    }, */
  /* {
    name: 'Store POS SaaS',
    description:
      'Sistema Point of Sale (POS) en la nube para comercios minoristas. Permite la gestión de inventario, ventas y reportes desde cualquier dispositivo, con arquitectura SaaS y stack moderno en TypeScript. Proyecto open source.',
    tags: [
      { name: 'TypeScript', color: 'blue-text-gradient' },
      { name: 'SaaS', color: 'green-text-gradient' },
      { name: 'POS', color: 'pink-text-gradient' },
      { name: 'Cloud', color: 'orange-text-gradient' }
    ],
    image: eCommerce,
    source_code_link: 'https://github.com/MatiasAndrada/store-POS-SaaS',
    source_demo_link: 'https://github.com/MatiasAndrada/store-POS-SaaS'
  },*/
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
