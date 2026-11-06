// Copy for the Desarrollo Web page (Stitch "LJ Solutions — Desarrollo Web").
// Prices are not written here: they come from src/data/pricing.ts.
import type { Locale } from '../config';
import type { PRICES } from '../../data/pricing';

type PlanKey = keyof typeof PRICES.webDev;

interface Plan {
  key: PlanKey;
  tag: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  featured?: boolean;
}

export const webdev: Record<
  Locale,
  {
    heroImageAlt: string;
    ctaQuote: string;
    ctaPlans: string;
    formats: {
      eyebrow: string;
      title: string;
      sub: string;
      items: { label: string; icon: string; title: string; desc: string; link: string; plan: PlanKey; alt: string }[];
    };
    plans: {
      title: string;
      sub: string;
      noteCurrency: string;
      noteDelivery: string;
      popular: string;
      quote: string;
      planMessage: (title: string, price: string) => string;
      imageAlt: (title: string) => string;
      items: Plan[];
    };
    included: { eyebrow: string; title: string; sub: string; items: { icon: string; title: string; desc: string }[] };
    faq: { intro: string; message: string; items: { q: string; a: string }[] };
    cta: { title: string; sub: string; button: string };
  }
> = {
  es: {
    heroImageAlt: 'Estudio de desarrollo web al anochecer con un monitor mostrando el diseño de un sitio',
    ctaQuote: 'Cotizar por WhatsApp',
    ctaPlans: 'Ver planes y precios',
    formats: {
      eyebrow: 'Formatos disponibles',
      title: 'Soluciones web a la medida de tu modelo',
      sub: 'Estructuras digitales diseñadas de acuerdo con los objetivos comerciales y las necesidades de tu empresa.',
      items: [
        {
          label: '01. Captación rápida',
          icon: 'filter_center_focus',
          title: 'Landing Pages de Alta Conversión',
          desc: 'Páginas diseñadas para presentar tu negocio, destacar tus productos o servicios y facilitar que tus visitantes se conviertan en clientes.',
          link: 'Explorar planes de landing page',
          plan: 'landingSimple',
          alt: 'Portátil mostrando una landing page de una marca',
        },
        {
          label: '02. Autoridad de marca',
          icon: 'apartment',
          title: 'Sitios Multipágina Corporativos',
          desc: 'Sitios web profesionales con múltiples secciones para presentar tu empresa, comunicar tus servicios y fortalecer tu presencia digital.',
          link: 'Ver opciones multipágina',
          plan: 'multipage',
          alt: 'Portátil y tableta mostrando un sitio web corporativo de varias páginas',
        },
        {
          label: '03. Automatización total',
          icon: 'calendar_clock',
          title: 'Plataformas Web y de Citas',
          desc: 'Plataformas con funcionalidades personalizadas, administración y herramientas para gestionar reservas, servicios y operaciones de tu negocio.',
          link: 'Ver sistemas y plataformas',
          plan: 'bookingAdmin',
          alt: 'Monitor y tableta con un calendario de reservas y un panel administrativo',
        },
      ],
    },
    plans: {
      title: 'Planes y precios de Desarrollo Web',
      sub: 'Opciones transparentes para encontrar la solución que mejor se adapta a las necesidades de tu negocio.',
      noteCurrency: 'Precios expresados en pesos colombianos (COP)',
      noteDelivery: 'Entrega garantizada y soporte incluido',
      popular: 'Más recomendado / Popular',
      quote: 'Cotizar por WhatsApp',
      planMessage: (title, price) => `Hola! Me interesa el plan "${title}" (${price} COP).`,
      imageAlt: (title) => `Vista previa: ${title}`,
      items: [
        {
          key: 'landingSimple',
          tag: 'Plan básico',
          icon: 'web',
          title: 'Landing page sencilla',
          desc: 'Página única optimizada para conversión rápida de campañas o servicios específicos.',
          features: [
            'Diseño ultra rápido y 100% responsivo',
            'Botones directos de contacto a WhatsApp',
            'Formulario de captura ágil de leads',
            'Optimización SEO básica y hosting guiado',
          ],
        },
        {
          key: 'landingFull',
          tag: 'Más recomendado / Popular',
          icon: 'star',
          title: 'Landing page completa',
          desc: 'Solución integral para presentar una propuesta de valor robusta con múltiples secciones persuasivas.',
          features: [
            'Secciones ampliadas de propuesta de valor y beneficios',
            'Testimonios, galería o casos de éxito',
            'Formulario interactivo y tracking de conversiones',
            'Analítica integrada (Google Analytics & Meta Pixel)',
            'Copywriting estructurado para ventas',
          ],
          featured: true,
        },
        {
          key: 'multipage',
          tag: 'Empresas y marcas',
          icon: 'domain',
          title: 'Sitio web multipágina',
          desc: 'Estructura institucional completa para empresas que requieren comunicar servicios y trayectoria con autoridad.',
          features: [
            'Hasta 5 páginas dedicadas completas (Inicio, Nosotros, etc.)',
            'Portafolio de proyectos y sección de blog opcional',
            'Estructura institucional robusta y mapa de sitio',
            'Optimización de velocidad y SEO en cada URL',
          ],
        },
        {
          key: 'bookingAdmin',
          tag: 'Servicios & citas',
          icon: 'calendar_month',
          title: 'Página con citas y panel administrativo',
          desc: 'Para clínicas, consultores y empresas de servicios que requieren automatizar su calendario de atención.',
          features: [
            'Módulo de calendario y reservas en vivo',
            'Panel administrativo privado para gestionar agenda',
            'Recordatorios automáticos vía WhatsApp/email',
            'Sincronización directa con Google Calendar y Outlook',
          ],
        },
        {
          key: 'bookingAdminPayments',
          tag: 'E-commerce & transaccional',
          icon: 'payments',
          title: 'Página con citas, panel y pasarela de pagos',
          desc: 'Ecosistema de monetización directa con reserva pagada previa o transacciones de comercio digital con conciliación automática.',
          features: [
            'Cobro directo con tarjeta, PSE o Wompi / Bold',
            'Panel integral de reservas y ventas en tiempo real',
            'Facturación digital y confirmaciones automáticas',
            'Seguridad SSL bancaria y arquitectura PCI Compliant',
          ],
        },
      ],
    },
    included: {
      eyebrow: 'Garantías LJ Solutions',
      title: '¿Qué incluyen todos nuestros proyectos?',
      sub: 'Estándares técnicos incluidos sin costos ocultos en cada desarrollo que entregamos.',
      items: [
        {
          icon: 'dns',
          title: 'Dominio & Despliegue',
          desc: 'Configuración completa de DNS, certificados SSL de seguridad y despliegue en servidores en la nube de alta disponibilidad.',
        },
        {
          icon: 'key',
          title: 'Propiedad 100% Tuya',
          desc: 'Entrega formal de credenciales de acceso, código fuente y capacitación guiada para el control administrativo de tu plataforma.',
        },
        {
          icon: 'support_agent',
          title: 'Soporte Post-Lanzamiento',
          desc: 'Acompañamiento técnico directo posterior a la entrega para resolver dudas y asegurar el funcionamiento sin interrupciones.',
        },
        {
          icon: 'code_blocks',
          title: 'Código Limpio y Ligero',
          desc: 'Arquitectura moderna sin maquetadores visuales pesados ni plugins innecesarios que ralenticen la experiencia de tus usuarios.',
        },
      ],
    },
    faq: {
      intro: 'Respuestas transparentes a las dudas habituales antes de iniciar tu proyecto web.',
      message: 'Hola LJ Solutions, tengo una pregunta sobre el desarrollo web.',
      items: [
        {
          q: '¿Qué tipo de páginas web desarrollan?',
          a: 'Desarrollamos landing pages, sitios web corporativos multipágina y plataformas web con funcionalidades personalizadas, según las necesidades de cada negocio.',
        },
        {
          q: '¿Cuál es la diferencia entre una landing page y un sitio web multipágina?',
          a: 'Una landing page concentra la información en una sola página, generalmente enfocada en presentar un producto, servicio o negocio. Un sitio multipágina permite organizar diferentes secciones, servicios e información en páginas independientes.',
        },
        {
          q: '¿Puedo solicitar una página web personalizada?',
          a: 'Sí. Podemos desarrollar soluciones adaptadas a la identidad, objetivos y necesidades específicas de tu negocio.',
        },
        {
          q: '¿Pueden implementar sistemas de citas y reservas?',
          a: 'Sí. Ofrecemos soluciones web que pueden incorporar funcionalidades de agendamiento, reservas y paneles administrativos.',
        },
        {
          q: '¿Es posible integrar una pasarela de pagos?',
          a: 'Sí. Tenemos una opción que contempla una página web con citas, panel administrativo y pasarela de pagos integrada.',
        },
        {
          q: '¿Las páginas web funcionan en celulares?',
          a: 'Nuestros desarrollos se plantean con diseño adaptable para ofrecer una experiencia adecuada en computadores, tablets y dispositivos móviles.',
        },
        {
          q: '¿Cómo puedo contratar un servicio?',
          a: 'Puedes revisar nuestros planes, seleccionar la solución que necesitas y contactarnos directamente por WhatsApp para conversar sobre tu proyecto.',
        },
        {
          q: '¿Puedo solicitar una cotización personalizada?',
          a: 'Por supuesto. Si necesitas funcionalidades específicas o tienes un proyecto diferente a las opciones publicadas, puedes escribirnos para evaluar tus necesidades.',
        },
      ],
    },
    cta: {
      title: '¿Listo para crear tu próximo sitio web?',
      sub: 'Cuéntanos tu idea y construyamos juntos una solución digital para tu negocio.',
      button: 'Solicita tu proyecto por WhatsApp',
    },
  },
  en: {
    heroImageAlt: 'Web development studio at dusk with a monitor showing a website layout',
    ctaQuote: 'Get a quote on WhatsApp',
    ctaPlans: 'See plans and pricing',
    formats: {
      eyebrow: 'Available formats',
      title: 'Web solutions tailored to your model',
      sub: "Digital structures designed around your company's business goals and needs.",
      items: [
        {
          label: '01. Fast capture',
          icon: 'filter_center_focus',
          title: 'High-Conversion Landing Pages',
          desc: 'Pages designed to present your business, highlight your products or services and help your visitors become customers.',
          link: 'Explore landing page plans',
          plan: 'landingSimple',
          alt: "Laptop showing a brand's landing page",
        },
        {
          label: '02. Brand authority',
          icon: 'apartment',
          title: 'Multi-Page Business Websites',
          desc: 'Professional websites with multiple sections to present your company, communicate your services and strengthen your online presence.',
          link: 'See multi-page options',
          plan: 'multipage',
          alt: 'Laptop and tablet showing a multi-page business website',
        },
        {
          label: '03. Full automation',
          icon: 'calendar_clock',
          title: 'Web & Booking Platforms',
          desc: 'Platforms with custom features, administration and tools to manage bookings, services and operations for your business.',
          link: 'See systems and platforms',
          plan: 'bookingAdmin',
          alt: 'Monitor and tablet showing a booking calendar and an admin panel',
        },
      ],
    },
    plans: {
      title: 'Web Development plans and pricing',
      sub: "Transparent options to find the solution that best fits your business's needs.",
      noteCurrency: 'Prices in Colombian pesos (COP)',
      noteDelivery: 'Guaranteed delivery and support included',
      popular: 'Most recommended / Popular',
      quote: 'Get a quote on WhatsApp',
      planMessage: (title, price) => `Hi! I'm interested in the "${title}" plan (${price} COP).`,
      imageAlt: (title) => `Preview: ${title}`,
      items: [
        {
          key: 'landingSimple',
          tag: 'Basic plan',
          icon: 'web',
          title: 'Simple landing page',
          desc: 'A single page optimized for fast conversion of campaigns or specific services.',
          features: [
            'Ultra-fast, 100% responsive design',
            'Direct WhatsApp contact buttons',
            'Quick lead capture form',
            'Basic SEO optimization and guided hosting',
          ],
        },
        {
          key: 'landingFull',
          tag: 'Most recommended / Popular',
          icon: 'star',
          title: 'Complete landing page',
          desc: 'A comprehensive solution to present a strong value proposition with multiple persuasive sections.',
          features: [
            'Extended value proposition and benefits sections',
            'Testimonials, gallery or success stories',
            'Interactive form and conversion tracking',
            'Built-in analytics (Google Analytics & Meta Pixel)',
            'Sales-structured copywriting',
          ],
          featured: true,
        },
        {
          key: 'multipage',
          tag: 'Companies & brands',
          icon: 'domain',
          title: 'Multi-page website',
          desc: 'A complete institutional structure for companies that need to communicate their services and track record with authority.',
          features: [
            'Up to 5 complete dedicated pages (Home, About, etc.)',
            'Project portfolio and optional blog section',
            'Solid institutional structure and sitemap',
            'Speed and SEO optimization on every URL',
          ],
        },
        {
          key: 'bookingAdmin',
          tag: 'Services & bookings',
          icon: 'calendar_month',
          title: 'Site with bookings and admin panel',
          desc: 'For clinics, consultants and service businesses that need to automate their appointment calendar.',
          features: [
            'Live calendar and booking module',
            'Private admin panel to manage the schedule',
            'Automatic reminders via WhatsApp/email',
            'Direct sync with Google Calendar and Outlook',
          ],
        },
        {
          key: 'bookingAdminPayments',
          tag: 'E-commerce & transactions',
          icon: 'payments',
          title: 'Site with bookings, admin panel and payment gateway',
          desc: 'A direct monetization ecosystem with prepaid bookings or e-commerce transactions with automatic reconciliation.',
          features: [
            'Direct card, PSE or Wompi / Bold payments',
            'Real-time bookings and sales panel',
            'Digital invoicing and automatic confirmations',
            'Bank-grade SSL security and PCI-compliant architecture',
          ],
        },
      ],
    },
    included: {
      eyebrow: 'LJ Solutions guarantees',
      title: 'What do all our projects include?',
      sub: 'Technical standards included, with no hidden costs, in every build we deliver.',
      items: [
        {
          icon: 'dns',
          title: 'Domain & Deployment',
          desc: 'Full DNS setup, SSL security certificates and deployment on high-availability cloud servers.',
        },
        {
          icon: 'key',
          title: '100% Yours',
          desc: 'Formal handover of access credentials, source code and guided training to manage your platform.',
        },
        {
          icon: 'support_agent',
          title: 'Post-Launch Support',
          desc: 'Direct technical support after delivery to answer questions and keep everything running without interruptions.',
        },
        {
          icon: 'code_blocks',
          title: 'Clean, Lightweight Code',
          desc: "Modern architecture without heavy page builders or unnecessary plugins that slow down your users' experience.",
        },
      ],
    },
    faq: {
      intro: 'Straight answers to the usual questions before starting your web project.',
      message: 'Hi LJ Solutions, I have a question about web development.',
      items: [
        {
          q: 'What kinds of websites do you build?',
          a: "We build landing pages, multi-page business websites and web platforms with custom features, according to each business's needs.",
        },
        {
          q: "What's the difference between a landing page and a multi-page website?",
          a: 'A landing page concentrates the information on a single page, usually focused on presenting a product, service or business. A multi-page site lets you organize different sections, services and information into separate pages.',
        },
        {
          q: 'Can I request a custom website?',
          a: "Yes. We can build solutions tailored to your business's identity, goals and specific needs.",
        },
        {
          q: 'Can you implement scheduling and booking systems?',
          a: 'Yes. We offer web solutions that can include scheduling, bookings and admin panels.',
        },
        {
          q: 'Can a payment gateway be integrated?',
          a: 'Yes. We have an option that includes a website with bookings, an admin panel and an integrated payment gateway.',
        },
        {
          q: 'Do the websites work on phones?',
          a: 'Our builds use responsive design to provide a proper experience on computers, tablets and mobile devices.',
        },
        {
          q: 'How can I hire a service?',
          a: 'You can review our plans, choose the solution you need and contact us directly on WhatsApp to talk about your project.',
        },
        {
          q: 'Can I request a custom quote?',
          a: 'Of course. If you need specific features or have a project that differs from the published options, write to us so we can assess your needs.',
        },
      ],
    },
    cta: {
      title: 'Ready to build your next website?',
      sub: "Tell us your idea and let's build a digital solution for your business together.",
      button: 'Request your project on WhatsApp',
    },
  },
};
