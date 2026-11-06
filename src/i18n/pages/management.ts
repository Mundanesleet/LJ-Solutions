// Copy for the Sistemas de Gestión page (Stitch "LJ Solutions — Sistemas de Gestión").
// Prices come from src/data/pricing.ts; the FAQ answer that quotes them is built
// from those values too.
import type { Locale } from '../config';

const es = {
  heroImageAlt: 'Escritorio con un monitor ultra ancho mostrando un panel de control de gestión',
  ctaQuote: 'Cotizar por WhatsApp',
  ctaSolutions: 'Conocer soluciones',
  intro: {
    eyebrow: 'Estructura & claridad',
    title: 'La operación de tu negocio, mejor organizada.',
    body: 'Un sistema de gestión permite centralizar tu información operativa en un solo lugar y facilitar el control de las actividades diarias. Desarrollamos herramientas intuitivas y funcionales diseñadas para reducir el desorden operativo y brindar claridad en la toma de decisiones.',
  },
  solutions: {
    eyebrow: 'Modelos comerciales',
    title: 'Soluciones de Gestión',
    sub: 'Arquitecturas funcionales pensadas para resolver cuellos de botella reales en empresas activas.',
    oneTime: '(Inversión única)',
    items: [
      {
        key: 'inventory' as const,
        label: 'Solución 01 / Control operativo',
        title: 'Sistema de Inventario',
        desc: 'Una solución digital para organizar y controlar los productos de tu negocio, facilitando la administración de tu inventario.',
        features: [
          'Listado de productos organizado',
          'Referencias y categorías estructuradas',
          'Existencias y stock disponible en tiempo real',
          'Registro de entradas y salidas de mercancía',
          'Panel de control y administración central',
        ],
        cta: 'Cotizar Sistema de Inventario',
        alt: 'Sistema de inventario en un monitor dentro de una tienda con estanterías de mercancía',
      },
      {
        key: 'ordersCatalog' as const,
        label: 'Solución 02 / Ventas & distribución',
        title: 'Sistema de Pedidos o Catálogo',
        desc: 'Una plataforma para presentar productos y organizar la recepción y gestión de pedidos de tu negocio.',
        features: [
          'Catálogo digital de productos interactivo',
          'Fotografías de alta resolución y precios en COP',
          'Selección ágil de productos para clientes',
          'Resumen y consolidación de pedidos entrantes',
          'Panel administrativo para seguimiento de despachos',
        ],
        cta: 'Cotizar Sistema de Pedidos',
        alt: 'Panel con un catálogo de productos y la lista de pedidos de clientes en vivo',
      },
    ],
    message: (title: string, price: string) => `Hola! Me interesa el "${title}" (${price} COP).`,
  },
  fit: {
    eyebrow: 'Adaptabilidad',
    title: 'Diseñado para negocios en crecimiento',
    sub: 'Estructuras digitales adaptables a diversos modelos operativos.',
    items: [
      {
        icon: 'storefront',
        title: 'Tiendas y comercios',
        desc: 'Establecimientos que requieren llevar el conteo exacto de mercancía en tienda física o virtual.',
      },
      {
        icon: 'local_shipping',
        title: 'Distribuidores',
        desc: 'Empresas mayoristas o proveedores que gestionan referencias variadas y despachos continuos.',
      },
      {
        icon: 'receipt_long',
        title: 'Negocios con pedidos',
        desc: 'Marcas y emprendimientos que buscan ordenar la toma de pedidos y evitar pérdidas de ventas.',
      },
      {
        icon: 'inventory_2',
        title: 'Múltiples productos',
        desc: 'Negocios con catálogos en expansión que necesitan dejar atrás las hojas de cálculo desorganizadas.',
      },
    ],
  },
  faq: {
    intro: 'Respuestas transparentes a las dudas habituales antes de implementar un sistema de gestión en tu negocio.',
    message: 'Hola LJ Solutions, tengo una pregunta sobre los sistemas de gestión.',
    items: (inventory: string, orders: string) => [
      {
        q: '¿Qué es un sistema de gestión?',
        a: 'Es una herramienta de software diseñada para centralizar, estructurar y controlar procesos clave de una empresa, como el inventario, los productos o los pedidos, reemplazando el registro manual disperso por una plataforma organizada y accesible.',
      },
      {
        q: '¿Cuál es la diferencia entre un sistema de inventario y uno de pedidos?',
        a: 'El sistema de inventario está enfocado en el control de existencias, referencias y movimientos de entrada/salida de stock. El sistema de pedidos o catálogo se orienta a la presentación comercial de tus productos y a la captura y administración organizada de solicitudes de compra.',
      },
      {
        q: '¿Puedo solicitar un sistema adaptado a mi negocio?',
        a: 'Sí, evaluamos la naturaleza de tu operación comercial para ajustar las categorías, campos de productos y flujos de trabajo a las necesidades particulares de tu empresa.',
      },
      {
        q: '¿Puedo administrar mis productos desde el sistema?',
        a: 'Sí, dispondrás de un panel administrativo privado para crear, editar, actualizar precios y gestionar los estados de tus productos de forma autónoma.',
      },
      {
        q: '¿Puedo consultar las existencias de mis productos?',
        a: 'Sí, el sistema de inventario te permite visualizar el stock disponible en tiempo real y registrar cada movimiento operativo con total claridad.',
      },
      {
        q: '¿Cómo puedo contratar un sistema de gestión?',
        a: 'El proceso inicia escribiéndonos a nuestro WhatsApp de atención. Conversamos sobre tu negocio, resolvemos dudas y te presentamos una propuesta detallada.',
      },
      {
        q: '¿El precio puede variar según las funcionalidades?',
        a: `Los precios base cubren las soluciones estándar descritas (${inventory} COP y ${orders} COP). Si tu operación requiere módulos específicos o integraciones adicionales no contempladas, se presenta una cotización a medida previa aprobación.`,
      },
      {
        q: '¿Cómo solicito una cotización?',
        a: 'Puedes hacer clic en cualquiera de los botones de WhatsApp de esta página para coordinar una sesión de diagnóstico inicial con nuestro equipo técnico.',
      },
    ],
  },
  cta: {
    title: 'Tu negocio merece una mejor forma de organizarse.',
    sub: 'Cuéntanos cómo funciona tu negocio y encontremos juntos una solución digital para gestionar tus operaciones.',
    button: 'Solicita tu proyecto por WhatsApp',
  },
};

const en: typeof es = {
  heroImageAlt: 'Desk with an ultra-wide monitor showing a management dashboard',
  ctaQuote: 'Get a quote on WhatsApp',
  ctaSolutions: 'See the solutions',
  intro: {
    eyebrow: 'Structure & clarity',
    title: "Your business's operations, better organized.",
    body: 'A management system lets you centralize your operational information in one place and makes it easier to control daily activities. We build intuitive, practical tools designed to reduce operational clutter and bring clarity to decision-making.',
  },
  solutions: {
    eyebrow: 'Business models',
    title: 'Management Solutions',
    sub: 'Practical architectures designed to solve real bottlenecks in active businesses.',
    oneTime: '(One-time investment)',
    items: [
      {
        key: 'inventory' as const,
        label: 'Solution 01 / Operational control',
        title: 'Inventory System',
        desc: "A digital solution to organize and control your business's products, making inventory management easier.",
        features: [
          'Organized product list',
          'Structured references and categories',
          'Real-time stock levels',
          'Record of incoming and outgoing goods',
          'Central control and admin panel',
        ],
        cta: 'Quote the Inventory System',
        alt: 'Inventory system on a monitor inside a store with shelves of merchandise',
      },
      {
        key: 'ordersCatalog' as const,
        label: 'Solution 02 / Sales & distribution',
        title: 'Orders or Catalog System',
        desc: "A platform to present products and organize how your business receives and manages orders.",
        features: [
          'Interactive digital product catalog',
          'High-resolution photos and prices in COP',
          'Quick product selection for customers',
          'Summary and consolidation of incoming orders',
          'Admin panel to track shipments',
        ],
        cta: 'Quote the Orders System',
        alt: 'Dashboard with a product catalog and a live list of customer orders',
      },
    ],
    message: (title: string, price: string) => `Hi! I'm interested in the "${title}" (${price} COP).`,
  },
  fit: {
    eyebrow: 'Adaptability',
    title: 'Designed for growing businesses',
    sub: 'Digital structures that adapt to different operating models.',
    items: [
      {
        icon: 'storefront',
        title: 'Shops and retailers',
        desc: 'Stores that need an exact count of merchandise, in person or online.',
      },
      {
        icon: 'local_shipping',
        title: 'Distributors',
        desc: 'Wholesalers or suppliers handling many references and continuous shipments.',
      },
      {
        icon: 'receipt_long',
        title: 'Order-based businesses',
        desc: 'Brands and startups that want to organize order taking and stop losing sales.',
      },
      {
        icon: 'inventory_2',
        title: 'Many products',
        desc: 'Businesses with growing catalogs that need to leave messy spreadsheets behind.',
      },
    ],
  },
  faq: {
    intro: 'Straight answers to the usual questions before implementing a management system in your business.',
    message: 'Hi LJ Solutions, I have a question about management systems.',
    items: (inventory: string, orders: string) => [
      {
        q: 'What is a management system?',
        a: "It's a software tool designed to centralize, structure and control a company's key processes, such as inventory, products or orders, replacing scattered manual records with an organized, accessible platform.",
      },
      {
        q: "What's the difference between an inventory system and an orders system?",
        a: 'The inventory system focuses on controlling stock, references and incoming/outgoing movements. The orders or catalog system focuses on presenting your products commercially and on capturing and managing purchase requests in an organized way.',
      },
      {
        q: 'Can I request a system tailored to my business?',
        a: "Yes. We assess the nature of your operation to adjust the categories, product fields and workflows to your company's particular needs.",
      },
      {
        q: 'Can I manage my products from the system?',
        a: "Yes. You'll have a private admin panel to create and edit products, update prices and manage their status on your own.",
      },
      {
        q: 'Can I check my product stock?',
        a: 'Yes. The inventory system shows available stock in real time and records every operational movement clearly.',
      },
      {
        q: 'How can I hire a management system?',
        a: 'The process starts by writing to us on WhatsApp. We talk about your business, answer your questions and present a detailed proposal.',
      },
      {
        q: 'Can the price vary depending on the features?',
        a: `The base prices cover the standard solutions described (${inventory} COP and ${orders} COP). If your operation needs specific modules or additional integrations not included, we present a custom quote for your approval.`,
      },
      {
        q: 'How do I request a quote?',
        a: 'Click any of the WhatsApp buttons on this page to arrange an initial diagnostic session with our technical team.',
      },
    ],
  },
  cta: {
    title: 'Your business deserves a better way to stay organized.',
    sub: "Tell us how your business works and let's find a digital solution to manage your operations together.",
    button: 'Request your project on WhatsApp',
  },
};

export const management: Record<Locale, typeof es> = { es, en };
