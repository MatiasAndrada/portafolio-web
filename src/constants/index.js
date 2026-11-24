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
  // javascript,
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
  // eCommerce,
  // chatApp,
  // playMovie,
  spaceXmirror,
  projectAdmin,
  // nubotikLogo,
  nubotikIcon,
  //! loaders
  // loader1
} from '../assets'

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

// CV descargable. Se genera desde cv/cv.html con `pnpm cv`.
export const CV_URL = '/cv/Matias_Andrada_CV.pdf'

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mí'
  },
  {
    id: 'work',
    title: 'Experiencia'
  },
  {
    id: 'works',
    title: 'Proyectos'
  },
  {
    id: 'skills',
    title: 'Skills'
  },
  {
    id: 'contact',
    title: 'Contacto'
  }
]

// Formación: mismo contenido que las secciones "Formación" y
// "Certificaciones" del CV (cv/cv.html).
const education = [
  {
    title: 'Técnico Superior en Programación',
    institution: 'UTN — Facultad Regional Villa María',
    date: '2023 – 2026'
  },
  {
    title: 'Carrera Desarrollador Full Stack',
    institution: 'Coderhouse',
    date: '2021 – 2023',
    note: 'Desarrollo Web, JavaScript, React y Programación Backend'
  }
]

// `featured` se muestra destacado; el resto como credenciales compactas.
// Sin `link`, la credencial se muestra sin enlace.
const certificates = [
  {
    title: 'AWS Cloud Computing',
    issuer: 'UTN — Facultad Regional Buenos Aires',
    grade: 'Sobresaliente',
    image: awsCertificate,
    link: 'https://validator.centrodeelearning.com/validator/UZEoPCX9SS',
    featured: true
  },
  {
    title: 'Next.js',
    issuer: 'Coderhouse',
    year: 2024,
    image: nextCertificate,
    link: 'https://pub.coderhouse.com/legacy-certificates/65e9017682e54de735329c41?lang=es'
  },
  {
    title: 'React Native',
    issuer: 'Coderhouse',
    year: 2024,
    image: desarrolloAppCertificate,
    link: 'https://pub.coderhouse.com/legacy-certificates/661b1a67a9be799635fb3bc4?lang=es'
  },
  {
    title: 'Programación Backend',
    issuer: 'Coderhouse',
    year: 2023,
    image: backendCertificate,
    link: 'https://pub.coderhouse.com/legacy-certificates/63f5609005d81e000e838b34?lang=es'
  },
  {
    title: 'React.js',
    issuer: 'Coderhouse',
    image: reactjsCertificate,
    // TODO: agregar la URL pública de la credencial (antes apuntaba a example.com).
    link: null
  },
  {
    title: 'JavaScript',
    issuer: 'Coderhouse',
    year: 2022,
    image: javascriptCertificate,
    link: 'https://pub.coderhouse.com/legacy-certificates/624c3073fa5d58001aa9d6a4?lang=es'
  },
  {
    title: 'Desarrollo Web',
    issuer: 'Coderhouse',
    year: 2021,
    image: webDesignCertificate,
    link: 'https://pub.coderhouse.com/legacy-certificates/61cdec542bed53003d8455e1?lang=es'
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

// Mismas categorías que "Habilidades técnicas" del CV. Las tecnologías
// principales ya aparecen arriba como esferas 3D (technologies).
const skills = [
  {
    title: 'Frontend y estado',
    items: [
      'Radix UI',
      'Sass',
      'Zustand',
      'Redux',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'i18n',
      'Charts'
      /*       'Framer Motion', */
      /*       'Vite',
            'Webpack' */
    ]
  },
  {
    title: 'Arquitectura',
    items: [
      'SaaS multi-tenant',
      'SSR',
      'CSR',
      'SPA',
      'PWA',
      'Apps móviles (React Native)'
    ]
  },
  {
    title: 'Backend y APIs',
    items: [
      'APIs REST',
      'WebSockets',
      'Webhooks',
      'GraphQL',
      'Drizzle',
      'Strapi'
    ]
  },
  /*   {
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
    }, */
  {
    title: 'Autenticación y seguridad',
    items: ['OAuth', 'JWT', 'NextAuth', 'RBAC', 'Supabase RLS']
  },
  {
    title: 'Integraciones e IA',
    items: [
      'Mercado Pago',
      'Fiserv',
      'WhatsApp Business API',
      'Resend',
      'OpenRouter (LLMs)'
    ]
  },
  {
    title: 'Cloud y DevOps',
    items: [
      'AWS EC2 · S3 · Route 53',
      'Vercel',
      'Linux',
      'Nginx',
      'SSL',
      'CI/CD'
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

// Mismo contenido que "Experiencia" del CV, con algo más de detalle.
const experiences = [
  {
    title: 'Desarrollador Full Stack',
    company_name: 'Nubotik',
    role_note: 'Único desarrollador',
    link: 'https://nubotik.com',
    summary:
      'SaaS multi-tenant de reservas y listas de espera, creado desde cero como MVP por encargo. Hoy lo usan más de 20 comercios en Argentina.',
    icon: nubotikIcon,
    iconBg: '#1a9e78',
    date: '2025 – Actualidad',
    points: [
      'Diseñé la arquitectura multi-tenant, con un panel para cada comercio y un panel central para administrar cuentas, funcionalidades, clientes y campañas de marketing.',
      'Integré un bot de IA (LLMs + WhatsApp Business API) que toma reservas de forma automática y reduce la gestión manual del comercio.',
      'Construí el módulo de analytics con métricas y gráficos de comportamiento de clientes, por comercio y consolidado en el panel central.',
      'Implementé autenticación OAuth y autorización por roles (RBAC + Supabase RLS) para administradores y comercios.',
      'Soporte en 5 idiomas con traducción automática de contenido estático y dinámico.'
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'WhatsApp API',
      'Resend',
      'Vercel'
    ]
  },
  {
    title: 'Desarrollador Full Stack',
    company_name: 'Hacela Simple',
    summary:
      'Marketplace de movilidad y turismo (PWA): vehículos —autos, motos y embarcaciones—, viajes y excursiones, con oferentes y compradores en la misma plataforma.',
    icon: hacelasimpleIcon,
    iconBg: '#E6DEDD',
    date: '2024 – 2026',
    points: [
      'Implementé los pagos con Mercado Pago y Fiserv y un sistema de comisiones configurable desde el panel de administración, sin tocar código.',
      'Diseñé e implementé la expansión del marketplace a viajes y excursiones: flujos de publicación, validación y administración.',
      'Construí un chat en tiempo real con WebSockets, con notificaciones push y por email para reactivar a usuarios inactivos.',
      'Desarrollé la PWA con Workbox, acercando la experiencia mobile a la de una app nativa.',
      'Creé un blog autoadministrable con Astro y Strapi para que el equipo publique contenido sin depender de desarrollo.',
      'Administré la infraestructura de producción: servidor Linux con Nginx (proxy inverso, SSL) y servicios AWS (EC2, S3, Route 53).'
    ],
    stack: [
      'Mercado Pago',
      'Fiserv',
      'WebSockets',
      'PWA',
      'Astro',
      'Strapi',
      'AWS',
      'Nginx',
      'Linux'
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
  }, */
  {
    name: 'ProjectAdmin',
    description:
      'App colaborativa de gestión de proyectos y tareas: proyectos, grupos de tareas y asignación entre usuarios. Auth con NextAuth (OAuth con GitHub y Google, o credenciales) y cuentas vinculadas a un único usuario. Prisma ORM y deploy en Vercel.',
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
      'Explorador de datos de SpaceX construido con Astro: listados paginados desde la API, filtros y galería de imágenes. Desplegado en Cloudflare Pages.',
    tags: [
      {
        name: 'Astro',
        color: 'pink-text-gradient'
      },
      {
        name: 'Typescript',
        color: 'blue-text-gradient'
      },
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
  /*   {
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
  } */
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
  education,
  certificates,
  technologies,
  skills,
  experiences,
  now,
  //  testimonials,
  projects
}
