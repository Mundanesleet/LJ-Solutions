import type { Locale } from './config';

export const ui = {
  es: {
    nav: {
      solutions: 'Soluciones',
      projects: 'Proyectos',
      howWeWork: 'Cómo trabajamos',
      about: 'Nosotros',
      talk: 'Hablemos',
      homeAria: 'Inicio de LJ Solutions',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    hero: {
      eyebrow: 'Estudio de soluciones digitales',
      headlinePre: 'Tecnología que',
      headlineHighlight: 'se adapta',
      headlinePost: 'a tu negocio.',
      sub: 'Creamos soluciones digitales, software y sitios web diseñados alrededor de la forma en que tu negocio realmente funciona.',
      cta1: 'Explorar soluciones',
      cta2: 'Cuéntanos tu idea',
    },
    heroMockup: {
      badgeCaption: 'Pedidos más rápidos, por diseño',
      synced: 'Sincronizado en tiempo real',
    },
    dashboardMockup: {
      live: 'Piso en vivo',
      title: 'Pedidos de hoy',
      orders: [
        { id: 'Mesa 4', item: '2× Lomo, 1× Ensalada', status: 'Nuevo' },
        { id: 'Mesa 9', item: 'Menú de degustación ×2', status: 'En curso' },
        { id: 'Para llevar #23', item: '1× Pasta, 1× Tiramisú', status: 'Listo' },
      ],
      statActive: 'Pedidos activos',
      statAvg: 'Tiempo promedio',
      statFree: 'Mesas libres',
    },
    intro: {
      heading: 'Creamos soluciones digitales que resuelven problemas reales.',
      paragraph:
        'La tecnología debería simplificar los negocios. Diseñamos herramientas digitales alrededor de flujos de trabajo reales, necesidades reales y personas reales.',
      points: ['Flujos reales', 'Necesidades reales', 'Personas reales'],
    },
    whatWeBuild: {
      heading: 'Qué construimos',
      sub: 'Tres formas en las que ayudamos a un negocio a funcionar con mejores herramientas.',
      software: {
        title: 'Software',
        desc: 'Herramientas digitales diseñadas para gestionar, simplificar y automatizar procesos de negocio.',
      },
      web: {
        title: 'Experiencias web',
        desc: 'Sitios web modernos diseñados para comunicar tu negocio con claridad y profesionalismo.',
      },
      custom: {
        title: 'Soluciones a medida',
        desc: 'Software construido alrededor de la forma en que tu negocio realmente funciona.',
      },
    },
    solutions: {
      heading: 'Soluciones construidas para negocios reales.',
    },
    inventoryMockup: {
      title: 'Resumen de inventario',
      lowStockBadge: '1 bajo stock',
      headerProduct: 'Producto',
      headerStock: 'Stock',
      headerStatus: 'Estado',
      items: [
        { name: 'Café en grano 1kg', stock: 42, status: 'En stock' },
        { name: 'Taza de cerámica 350ml', stock: 6, status: 'Bajo' },
        { name: 'Vasos de papel (100)', stock: 0, status: 'Agotado' },
        { name: 'Leche de avena 1L', stock: 28, status: 'En stock' },
      ],
      statSkus: 'SKUs registrados',
      statMovements: 'Movimientos hoy',
    },
    buildMockup: {
      caption: 'Construido alrededor de un proceso, no una plantilla.',
    },
    howWeWork: {
      heading: 'De la idea a la solución.',
      steps: [
        { title: 'Descubrir', description: 'Nos cuentas qué necesitas.' },
        { title: 'Entender', description: 'Entendemos cómo funciona tu negocio.' },
        { title: 'Diseñar', description: 'Diseñamos la solución adecuada.' },
        { title: 'Construir', description: 'La desarrollamos y la probamos.' },
        { title: 'Lanzar', description: 'La ponemos en marcha.' },
      ],
    },
    customSoftwareCta: {
      headline1: 'Tu negocio es único.',
      headline2: 'Tu software también puede serlo.',
      sub: 'Si tienes una idea, un proceso que necesita mejorar o una herramienta que desearías que existiera, construyámosla.',
      cta: 'Iniciar un proyecto',
    },
    projectsSection: {
      heading: 'Proyectos seleccionados',
      sub: 'Los primeros productos que estamos construyendo, desde adentro hacia afuera.',
    },
    projectCard: {
      cta: 'Ver proyecto',
    },
    status: {
      inDevelopment: 'En desarrollo',
      comingSoon: 'Próximamente',
    },
    products: {
      restaurant: {
        category: 'Producto',
        title: 'Gestión de Restaurantes',
        description: 'Gestiona productos, pedidos y operaciones diarias desde un solo lugar.',
        detail: 'Cola de pedidos en vivo, control de menú y actividad diaria en una sola vista.',
        cta: 'Ver proyecto',
      },
      inventory: {
        category: 'Producto',
        title: 'Gestión de Inventario',
        description: 'Lleva el control de productos, existencias y movimientos con un sistema digital simple.',
        detail: 'Niveles de stock, movimientos y alertas de bajo inventario, siempre actualizados.',
        cta: 'Ver proyecto',
      },
      custom: {
        category: 'Servicio',
        title: 'Software a Medida',
        description: '¿Tienes un proceso que necesita una mejor herramienta? Podemos construirla a tu medida.',
        detail: 'Definida, diseñada y construida alrededor de un proceso específico, no una plantilla genérica.',
        cta: 'Iniciar un proyecto',
      },
    },
    projectsData: {
      'restaurant-management': {
        category: 'Software',
        title: 'Sistema de Gestión de Restaurantes',
        summary: 'Gestiona productos, pedidos y operaciones diarias desde un solo lugar.',
        description:
          'Un sistema digital diseñado alrededor de cómo operan realmente los restaurantes día a día — desde el flujo de pedidos hasta los cambios de menú — construido para reducir las pequeñas fricciones que ralentizan un servicio.',
      },
      'inventory-management': {
        category: 'Software',
        title: 'Sistema de Gestión de Inventario',
        summary: 'Lleva el control de productos, existencias y movimientos con un sistema digital simple.',
        description:
          'Una forma sencilla de ver qué tienes, qué se movió y qué necesita reabastecerse, sin hojas de cálculo desactualizadas.',
      },
    },
    about: {
      eyebrow: 'Detrás de LJ Solutions',
      heading: 'Creemos que la tecnología debería resolver problemas, no crearlos.',
      p1: 'LJ Solutions existe para construir herramientas digitales alrededor de cómo realmente funcionan los negocios, no al revés. Nos enfocamos en flujos de trabajo reales, necesidades reales y personas reales, y dejamos que la tecnología permanezca discretamente detrás de la solución.',
      p2: 'Apenas estamos comenzando, y preferimos ser honestos sobre eso en lugar de aparentar lo contrario. Cada producto y proyecto en este sitio es trabajo real en progreso, no un caso de estudio prestado.',
    },
    contact: {
      heading: 'Construyamos algo útil.',
      sub: 'Cuéntanos en qué estás trabajando y veamos cómo podemos ayudarte.',
      whatsapp: 'WhatsApp',
      formName: 'Nombre',
      formBusiness: 'Negocio',
      formEmail: 'Correo electrónico',
      formWhatsapp: 'WhatsApp',
      formMessage: '¿Qué necesitas?',
      submit: 'Enviar solicitud',
      statusSending: 'Enviando...',
      statusSuccess: 'Gracias — te responderemos pronto.',
      statusError: 'Algo salió mal. Por favor escríbenos directamente por correo.',
      statusMailto: 'Abriendo tu cliente de correo...',
      mailtoSubject: 'Nueva solicitud — LJ Solutions',
    },
    footer: {
      contact: 'Contacto',
    },
    projectsPage: {
      title: 'Proyectos',
    },
    projectDetail: {
      backLink: 'Todos los proyectos',
      cta: 'Hablemos de esto',
    },
    languageSwitcher: {
      switchTo: 'English',
      ariaLabel: 'Cambiar a inglés',
    },
    seo: {
      defaultTitle: 'LJ Solutions — Soluciones Digitales para tu Negocio',
      defaultDescription:
        'LJ Solutions crea soluciones digitales, software y sitios web diseñados alrededor de la forma en que funciona tu negocio.',
      projectsTitle: 'Proyectos — LJ Solutions',
      projectsDescription: 'Los primeros productos que estamos construyendo, desde adentro hacia afuera.',
    },
  },
  en: {
    nav: {
      solutions: 'Solutions',
      projects: 'Projects',
      howWeWork: 'How we work',
      about: 'About',
      talk: "Let's talk",
      homeAria: 'LJ Solutions home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      eyebrow: 'Digital solutions studio',
      headlinePre: 'Technology that',
      headlineHighlight: 'adapts',
      headlinePost: 'to your business.',
      sub: 'We create digital solutions, software and websites designed around the way your business actually works.',
      cta1: 'Explore solutions',
      cta2: 'Tell us your idea',
    },
    heroMockup: {
      badgeCaption: 'Faster order turnaround, by design',
      synced: 'Synced in real time',
    },
    dashboardMockup: {
      live: 'Live floor',
      title: "Today's orders",
      orders: [
        { id: 'Table 4', item: '2× Ribeye, 1× Salad', status: 'New' },
        { id: 'Table 9', item: 'Tasting menu ×2', status: 'In progress' },
        { id: 'Takeout #23', item: '1× Pasta, 1× Tiramisu', status: 'Ready' },
      ],
      statActive: 'Active orders',
      statAvg: 'Avg. ticket time',
      statFree: 'Tables free',
    },
    intro: {
      heading: 'We build digital solutions that solve real problems.',
      paragraph:
        'Technology should make business simpler. We design digital tools around real workflows, real needs and real people.',
      points: ['Real workflows', 'Real needs', 'Real people'],
    },
    whatWeBuild: {
      heading: 'What we build',
      sub: 'Three ways we help a business run on better tools.',
      software: {
        title: 'Software',
        desc: 'Digital tools designed to manage, simplify and automate business processes.',
      },
      web: {
        title: 'Web experiences',
        desc: 'Modern websites designed to communicate your business clearly and professionally.',
      },
      custom: {
        title: 'Custom solutions',
        desc: 'Software built around the way your business actually works.',
      },
    },
    solutions: {
      heading: 'Solutions built for real businesses.',
    },
    inventoryMockup: {
      title: 'Stock overview',
      lowStockBadge: '1 low stock',
      headerProduct: 'Product',
      headerStock: 'Stock',
      headerStatus: 'Status',
      items: [
        { name: 'Espresso beans 1kg', stock: 42, status: 'In stock' },
        { name: 'Ceramic mug 350ml', stock: 6, status: 'Low' },
        { name: 'Paper cups (100)', stock: 0, status: 'Out of stock' },
        { name: 'Oat milk 1L', stock: 28, status: 'In stock' },
      ],
      statSkus: 'SKUs tracked',
      statMovements: 'Movements today',
    },
    buildMockup: {
      caption: 'Built around one process, not a template.',
    },
    howWeWork: {
      heading: 'From idea to solution.',
      steps: [
        { title: 'Discover', description: 'You tell us what you need.' },
        { title: 'Understand', description: 'We understand how your business works.' },
        { title: 'Design', description: 'We design the right solution.' },
        { title: 'Build', description: 'We develop and test it.' },
        { title: 'Launch', description: 'We put it into action.' },
      ],
    },
    customSoftwareCta: {
      headline1: 'Your business is unique.',
      headline2: 'Your software can be too.',
      sub: "If you have an idea, a process that needs improvement or a tool you wish existed, let's build it.",
      cta: 'Start a project',
    },
    projectsSection: {
      heading: 'Selected projects',
      sub: "The first products we're building, from the inside out.",
    },
    projectCard: {
      cta: 'View project',
    },
    status: {
      inDevelopment: 'In development',
      comingSoon: 'Coming soon',
    },
    products: {
      restaurant: {
        category: 'Product',
        title: 'Restaurant Management',
        description: 'Manage products, orders and daily operations from one place.',
        detail: 'Live order queue, menu control and daily activity in a single view.',
        cta: 'View project',
      },
      inventory: {
        category: 'Product',
        title: 'Inventory Management',
        description: 'Keep track of products, stock and movements with a simple digital system.',
        detail: 'Stock levels, movements and low-stock alerts, always up to date.',
        cta: 'View project',
      },
      custom: {
        category: 'Service',
        title: 'Custom Software',
        description: 'Have a process that needs a better tool? We can build it around you.',
        detail: 'Scoped, designed and built around one specific process — not a generic template.',
        cta: 'Start a project',
      },
    },
    projectsData: {
      'restaurant-management': {
        category: 'Software',
        title: 'Restaurant Management System',
        summary: 'Manage products, orders and daily operations from one place.',
        description:
          'A digital system designed around how restaurants actually operate day to day — from order flow to menu changes — built to reduce the small frictions that slow a service down.',
      },
      'inventory-management': {
        category: 'Software',
        title: 'Inventory Management System',
        summary: 'Keep track of products, stock and movements with a simple digital system.',
        description:
          'A straightforward way to see what you have, what moved and what needs reordering, without spreadsheets that fall out of date.',
      },
    },
    about: {
      eyebrow: 'Behind LJ Solutions',
      heading: 'We believe technology should solve problems, not create them.',
      p1: 'LJ Solutions exists to build digital tools around how businesses actually work, not the other way around. We focus on real workflows, real needs and real people, and we let the technology sit quietly behind the solution.',
      p2: "We're just getting started, and we'd rather be upfront about that than pretend otherwise. Every product and project on this site is real work in progress, not a borrowed case study.",
    },
    contact: {
      heading: "Let's build something useful.",
      sub: "Tell us what you're working on and let's see how we can help.",
      whatsapp: 'WhatsApp',
      formName: 'Name',
      formBusiness: 'Business',
      formEmail: 'Email',
      formWhatsapp: 'WhatsApp',
      formMessage: 'What do you need?',
      submit: 'Send inquiry',
      statusSending: 'Sending...',
      statusSuccess: "Thanks — we'll get back to you soon.",
      statusError: 'Something went wrong. Please email us directly instead.',
      statusMailto: 'Opening your email client...',
      mailtoSubject: 'New inquiry — LJ Solutions',
    },
    footer: {
      contact: 'Contact',
    },
    projectsPage: {
      title: 'Projects',
    },
    projectDetail: {
      backLink: 'All projects',
      cta: 'Talk to us about this',
    },
    languageSwitcher: {
      switchTo: 'Español',
      ariaLabel: 'Switch to Spanish',
    },
    seo: {
      defaultTitle: 'LJ Solutions — Digital Solutions for Your Business',
      defaultDescription:
        'LJ Solutions creates digital solutions, software and websites designed around the way your business works.',
      projectsTitle: 'Projects — LJ Solutions',
      projectsDescription: "The first products LJ Solutions is building, from the inside out.",
    },
  },
} satisfies Record<Locale, unknown>;

export function useTranslations(lang: Locale) {
  return ui[lang];
}
