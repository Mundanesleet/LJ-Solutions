import type { Locale } from './config';

export const ui = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      talk: 'Hablemos',
      homeAria: 'Inicio de LJ Solutions',
      primaryAria: 'Principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    services: {
      webDev: 'Desarrollo Web',
      aiAgents: 'Agentes de IA',
      management: 'Sistemas de Gestión',
    },
    footer: {
      description: 'Desarrollamos software y soluciones digitales que ayudan a los negocios a trabajar mejor.',
      navHeading: 'Navegación',
      servicesHeading: 'Servicios',
      connectHeading: 'Conectar',
      rights: 'Todos los derechos reservados.',
      footerAria: 'Pie de página',
    },
    breadcrumb: {
      aria: 'Ruta de navegación',
    },
    faq: {
      eyebrow: 'Claridad & dudas',
      title: 'Preguntas frecuentes',
      more: '¿Tienes otra pregunta? Hablemos',
    },
    form: {
      optional: '(Opcional)',
      required: 'obligatorio',
    },
    whatsapp: {
      default: 'Hola! Me gustaría hablar sobre un proyecto.',
      cta: 'Hablemos por WhatsApp',
    },
    skipToContent: 'Saltar al contenido',
    splash: {
      skip: 'Saltar introducción',
    },
    hero: {
      headlinePre: 'Tecnología que impulsa',
      headlineHighlight: 'tu negocio',
      headlinePost: '',
      sub: 'Desarrollamos software y soluciones digitales que ayudan a los negocios a trabajar mejor.',
      cta: 'Solicita tu proyecto',
      ctaSecondary: 'Ver todos los servicios',
    },
    home: {
      solutions: {
        title: 'Explora nuestras soluciones',
        sub: 'Tres áreas especializadas para digitalizar, automatizar y potenciar tu negocio.',
        label: 'Solución',
        items: {
          webDev: {
            desc: 'Sitios web modernos, rápidos y enfocados en resultados.',
            cta: 'Explorar desarrollo web',
            alt: 'Portátil sobre un escritorio oscuro mostrando el sitio web de un negocio',
          },
          aiAgents: {
            desc: 'Asistentes inteligentes que atienden consultas, gestionan solicitudes y ayudan a automatizar tu negocio.',
            cta: 'Explorar agentes IA',
            alt: 'Mano sosteniendo un celular con una conversación de WhatsApp atendida por un asistente de IA',
          },
          management: {
            desc: 'Soluciones para organizar inventario, pedidos, clientes y operaciones.',
            cta: 'Explorar sistemas',
            alt: 'Monitor con un panel de gestión con gráficas e indicadores de inventario',
          },
        },
      },
      why: {
        titlePre: '¿Por qué elegir',
        titleHighlight: 'LJ Solutions',
        titlePost: '?',
        body: 'Más que desarrollar software, creamos soluciones que responden a necesidades reales de cada negocio. Combinamos tecnología, funcionalidad y acompañamiento para ayudarte a trabajar mejor.',
        imageAlt: 'Desarrollador con audífonos programando frente a dos monitores en un estudio con luz cálida',
        benefits: [
          { icon: 'bolt', title: 'Eficiencia', desc: 'Optimizamos procesos y reducimos tareas repetitivas.' },
          { icon: 'tune', title: 'Soluciones a medida', desc: 'Desarrollamos tecnología según las necesidades de cada negocio.' },
          { icon: 'support_agent', title: 'Acompañamiento', desc: 'Te guiamos durante el desarrollo y la implementación.' },
        ],
      },
      process: {
        title: 'Nuestro proceso',
        sub: 'De la idea a una solución real, en cuatro pasos.',
        steps: [
          { icon: 'forum', title: 'Conversamos', desc: 'Conocemos tu negocio, necesidades y objetivos.' },
          { icon: 'description', title: 'Proponemos', desc: 'Definimos la solución y presentamos una propuesta.' },
          { icon: 'code', title: 'Desarrollamos', desc: 'Construimos y personalizamos la solución acordada.' },
          { icon: 'rocket_launch', title: 'Lanzamos', desc: 'Implementamos el proyecto y te acompañamos en su puesta en marcha.' },
        ],
      },
      cta: {
        title: '¿Listo para llevar tu negocio al siguiente nivel?',
        sub: 'Hablemos y encontremos la solución ideal para tu proyecto.',
      },
    },
    // Page headers from the approved designs. `highlight` is the orange part.
    pages: {
      webDev: {
        title: 'Sitios web modernos, rápidos y',
        highlight: 'enfocados en resultados.',
        sub: 'Te ayudamos a construir una presencia digital profesional mediante landing pages, sitios corporativos multipágina y aplicaciones web con panel administrativo, agendamiento y pasarela de pagos integrada.',
        seoTitle: 'Desarrollo Web — LJ Solutions',
      },
      aiAgents: {
        title: 'Automatiza tus conversaciones.',
        highlight: 'Potencia tu negocio.',
        sub: 'Implementamos agentes de inteligencia artificial para WhatsApp que atienden clientes, responden consultas y ayudan a gestionar las operaciones de tu negocio.',
        seoTitle: 'Agentes de IA para WhatsApp — LJ Solutions',
      },
      management: {
        title: 'Organiza tu negocio.',
        highlight: 'Controla cada operación.',
        sub: 'Desarrollamos sistemas de gestión que te ayudan a organizar inventarios, administrar productos y gestionar pedidos desde una plataforma digital.',
        seoTitle: 'Sistemas de Gestión — LJ Solutions',
      },
      about: {
        title: 'Tecnología con propósito. Soluciones pensadas para',
        highlight: 'el mundo real.',
        sub: 'En LJ Solutions desarrollamos software, sitios web modernos y agentes de inteligencia artificial diseñados para optimizar la operación y acelerar el crecimiento comercial de los negocios.',
        seoTitle: 'Nosotros — LJ Solutions',
      },
      contact: {
        title: 'Hablemos de tu',
        highlight: 'próximo proyecto',
        sub: 'Cuéntanos qué necesitas. Estamos aquí para ayudarte a encontrar la solución digital adecuada para tu negocio.',
        seoTitle: 'Contacto — LJ Solutions',
      },
    },
    languageSwitcher: {
      switchTo: 'English',
      ariaLabel: 'Cambiar a inglés',
    },
    seo: {
      defaultTitle: 'LJ Solutions — Tecnología que impulsa tu negocio',
      defaultDescription:
        'Desarrollamos sitios web, agentes de IA para WhatsApp y sistemas de gestión que ayudan a los negocios a trabajar mejor.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      talk: "Let's talk",
      homeAria: 'LJ Solutions home',
      primaryAria: 'Main',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    services: {
      webDev: 'Web Development',
      aiAgents: 'AI Agents',
      management: 'Management Systems',
    },
    footer: {
      description: 'We build software and digital solutions that help businesses work better.',
      navHeading: 'Navigation',
      servicesHeading: 'Services',
      connectHeading: 'Connect',
      rights: 'All rights reserved.',
      footerAria: 'Footer',
    },
    breadcrumb: {
      aria: 'Breadcrumb',
    },
    faq: {
      eyebrow: 'Clarity & questions',
      title: 'Frequently asked questions',
      more: "Have another question? Let's talk",
    },
    form: {
      optional: '(Optional)',
      required: 'required',
    },
    whatsapp: {
      default: "Hi! I'd like to talk about a project.",
      cta: "Let's talk on WhatsApp",
    },
    skipToContent: 'Skip to content',
    splash: {
      skip: 'Skip intro',
    },
    hero: {
      headlinePre: 'Technology that drives',
      headlineHighlight: 'your business',
      headlinePost: '',
      sub: 'We build software and digital solutions that help businesses work better.',
      cta: 'Request your project',
      ctaSecondary: 'See all services',
    },
    home: {
      solutions: {
        title: 'Explore our solutions',
        sub: 'Three specialized areas to digitize, automate and grow your business.',
        label: 'Solution',
        items: {
          webDev: {
            desc: 'Modern, fast websites built for results.',
            cta: 'Explore web development',
            alt: "Laptop on a dark desk showing a business's website",
          },
          aiAgents: {
            desc: 'Smart assistants that answer questions, handle requests and help automate your business.',
            cta: 'Explore AI agents',
            alt: 'Hand holding a phone with a WhatsApp conversation handled by an AI assistant',
          },
          management: {
            desc: 'Solutions to organize inventory, orders, customers and operations.',
            cta: 'Explore systems',
            alt: 'Monitor showing a management dashboard with charts and inventory indicators',
          },
        },
      },
      why: {
        titlePre: 'Why choose',
        titleHighlight: 'LJ Solutions',
        titlePost: '?',
        body: "More than building software, we create solutions that answer each business's real needs. We combine technology, functionality and hands-on support to help you work better.",
        imageAlt: 'Developer wearing headphones coding in front of two monitors in a warmly lit studio',
        benefits: [
          { icon: 'bolt', title: 'Efficiency', desc: 'We streamline processes and cut repetitive tasks.' },
          { icon: 'tune', title: 'Tailored solutions', desc: "We build technology around each business's needs." },
          { icon: 'support_agent', title: 'Support', desc: 'We guide you through development and implementation.' },
        ],
      },
      process: {
        title: 'Our process',
        sub: 'From idea to a real solution, in four steps.',
        steps: [
          { icon: 'forum', title: 'We talk', desc: 'We get to know your business, needs and goals.' },
          { icon: 'description', title: 'We propose', desc: 'We define the solution and present a proposal.' },
          { icon: 'code', title: 'We build', desc: 'We develop and customize the agreed solution.' },
          { icon: 'rocket_launch', title: 'We launch', desc: 'We deploy the project and support you through go-live.' },
        ],
      },
      cta: {
        title: 'Ready to take your business to the next level?',
        sub: "Let's talk and find the right solution for your project.",
      },
    },
    pages: {
      webDev: {
        title: 'Modern, fast websites',
        highlight: 'built for results.',
        sub: 'We help you build a professional online presence with landing pages, multi-page business websites and web applications with an admin panel, scheduling and an integrated payment gateway.',
        seoTitle: 'Web Development — LJ Solutions',
      },
      aiAgents: {
        title: 'Automate your conversations.',
        highlight: 'Power up your business.',
        sub: 'We build artificial intelligence agents for WhatsApp that serve customers, answer questions and help you manage your business operations.',
        seoTitle: 'AI Agents for WhatsApp — LJ Solutions',
      },
      management: {
        title: 'Organize your business.',
        highlight: 'Control every operation.',
        sub: 'We build management systems that help you organize inventory, manage products and handle orders from one digital platform.',
        seoTitle: 'Management Systems — LJ Solutions',
      },
      about: {
        title: 'Technology with purpose. Solutions built for',
        highlight: 'the real world.',
        sub: 'At LJ Solutions we build software, modern websites and artificial intelligence agents designed to streamline operations and accelerate the commercial growth of businesses.',
        seoTitle: 'About — LJ Solutions',
      },
      contact: {
        title: "Let's talk about your",
        highlight: 'next project',
        sub: "Tell us what you need. We're here to help you find the right digital solution for your business.",
        seoTitle: 'Contact — LJ Solutions',
      },
    },
    languageSwitcher: {
      switchTo: 'Español',
      ariaLabel: 'Switch to Spanish',
    },
    seo: {
      defaultTitle: 'LJ Solutions — Technology that drives your business',
      defaultDescription:
        'We build websites, WhatsApp AI agents and management systems that help businesses work better.',
    },
  },
} satisfies Record<Locale, unknown>;

export function useTranslations(lang: Locale) {
  return ui[lang];
}
