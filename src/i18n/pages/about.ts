// Copy for the Nosotros page (Stitch "LJ Solutions — Nosotros").
// Only confirmed facts about the founder: name, role, email and WhatsApp.
import type { Locale } from '../config';

const es = {
  ctaWhatsapp: 'Conversar por WhatsApp',
  role: 'Fundador & Desarrollador',
  who: {
    imageAlt: 'Estudio de tecnología con luz cálida naranja sobre paredes oscuras',
    commitmentLabel: 'Compromiso',
    commitment: 'Cercanía técnica y foco en resultados tangibles.',
    eyebrow: 'Quiénes somos',
    title: 'Ingeniería directa, sin complejidad innecesaria.',
    p1: 'Nacimos con la premisa clara de que la tecnología solo tiene valor si genera resultados comprobables en el día a día de un negocio. No creemos en el software abstracto ni en soluciones sobrecargadas que ralentizan a los equipos.',
    p2: 'Nuestro enfoque pragmático convierte necesidades operativas complejas en herramientas intuitivas y funcionales. Trabajamos mano a mano con cada cliente, asegurando claridad en los procesos, solidez técnica en el código y una ejecución orientada al crecimiento.',
    values: [
      { icon: 'precision_manufacturing', title: 'Precisión técnica', desc: 'Arquitecturas estables, limpias y adaptadas a la escala de cada operación.' },
      { icon: 'handshake', title: 'Cercanía real', desc: 'Comunicación continua, directa y sin intermediarios que diluyan el proyecto.' },
    ],
  },
  founder: {
    photoAlt: 'Retrato en blanco y negro de Alejandro Sossa, fundador de LJ Solutions',
    cardLabel: 'Liderazgo',
    eyebrow: 'Liderazgo & visión',
    title: 'Detrás de LJ Solutions',
    quote:
      '«Soy Alejandro, fundador de LJ Solutions. Me enfoco en desarrollar soluciones digitales que combinan tecnología, diseño y funcionalidad para ayudar a los negocios a crecer y organizar mejor sus operaciones».',
    body: 'Trabajo directamente con cada cliente, asegurando claridad técnica, código sólido y un canal de comunicación directo de principio a fin.',
    cta: 'Conversar directamente',
    signature: 'Alejandro Sossa — Fundador',
  },
  pillars: {
    eyebrow: 'Qué hacemos',
    title: 'Tres pilares estratégicos de desarrollo y automatización',
    sub: 'Soluciones modulares diseñadas para resolver puntos críticos de visibilidad, atención y control operativo.',
    items: [
      {
        route: 'webDev' as const,
        icon: 'devices',
        title: 'Desarrollo Web de Alto Impacto',
        desc: 'Sitios corporativos y plataformas web ultra rápidos, optimizados para conversión, SEO técnico y navegación fluida en todos los dispositivos.',
        tag: 'Velocidad · Conversión',
      },
      {
        route: 'aiAgents' as const,
        icon: 'smart_toy',
        title: 'Agentes de Inteligencia Artificial',
        desc: 'Atención, ventas y gestión automatizada vía WhatsApp con modelos contextuales que responden como tu mejor asesor durante las 24 horas del día.',
        tag: 'WhatsApp · IA conectada',
      },
      {
        route: 'management' as const,
        icon: 'dataset',
        title: 'Sistemas de Gestión a Medida',
        desc: 'Plataformas centralizadas para control de inventarios, seguimiento de pedidos y operaciones internas, diseñadas con base en la lógica exacta de tu empresa.',
        tag: 'Inventarios · Operación',
      },
    ],
  },
  method: {
    eyebrow: 'Metodología',
    title: 'Nuestra forma de trabajar',
    sub: 'Principios de colaboración rigurosos para entregar soluciones que operan con total independencia y solvencia.',
    steps: [
      {
        title: 'Diagnóstico honesto',
        desc: 'Analizamos a fondo los cuellos de botella de tu operación. Si una herramienta no es necesaria, te lo decimos con transparencia.',
      },
      {
        title: 'Desarrollo ágil',
        desc: 'Iteraciones cortas y entregas continuas sin burocracia ni fricción. Ves avances funcionales desde las primeras semanas.',
      },
      {
        title: 'Acompañamiento cercano',
        desc: 'Soporte técnico directo sin tickets impersonales. Hablas directamente con quien construye tu plataforma.',
      },
      {
        title: 'Entrega con autonomía',
        desc: 'Capacitación exhaustiva y código documentado. Tu equipo conserva control absoluto de la tecnología implementada.',
      },
    ],
  },
  channel: {
    eyebrow: 'Canal oficial',
    title: 'Información de contacto corporativo',
    sub: 'Atención directa para cotizaciones, diagnósticos de proyectos o consultas sobre soluciones a la medida.',
    person: 'Contacto directo',
    email: 'Correo electrónico',
    whatsapp: 'WhatsApp oficial',
    cardTitle: 'Comunícate hoy mismo',
    cardBody: 'Respondemos de forma personalizada para evaluar el alcance y los requerimientos de tu iniciativa.',
    ctaWhatsapp: 'Escribir por WhatsApp',
    ctaEmail: 'Enviar un correo',
  },
  cta: {
    title: 'Construyamos juntos la próxima etapa de tu negocio.',
    sub: 'Estamos listos para escuchar tu proyecto y diseñar la solución que tu operación necesita.',
  },
};

const en: typeof es = {
  ctaWhatsapp: 'Chat on WhatsApp',
  role: 'Founder & Developer',
  who: {
    imageAlt: 'Technology studio with warm orange light on dark walls',
    commitmentLabel: 'Commitment',
    commitment: 'Close technical partnership and a focus on tangible results.',
    eyebrow: 'Who we are',
    title: 'Straightforward engineering, without unnecessary complexity.',
    p1: "We started from a clear premise: technology only has value if it delivers provable results in a business's day-to-day. We don't believe in abstract software or bloated solutions that slow teams down.",
    p2: 'Our pragmatic approach turns complex operational needs into intuitive, practical tools. We work hand in hand with every client, ensuring clear processes, technically solid code and growth-oriented execution.',
    values: [
      { icon: 'precision_manufacturing', title: 'Technical precision', desc: 'Stable, clean architectures adapted to the scale of each operation.' },
      { icon: 'handshake', title: 'Real closeness', desc: 'Continuous, direct communication with no intermediaries diluting the project.' },
    ],
  },
  founder: {
    photoAlt: 'Black-and-white portrait of Alejandro Sossa, founder of LJ Solutions',
    cardLabel: 'Leadership',
    eyebrow: 'Leadership & vision',
    title: 'Behind LJ Solutions',
    quote:
      '“I’m Alejandro, founder of LJ Solutions. I focus on building digital solutions that combine technology, design and functionality to help businesses grow and organize their operations better.”',
    body: 'I work directly with every client, ensuring technical clarity, solid code and a direct line of communication from start to finish.',
    cta: 'Talk to me directly',
    signature: 'Alejandro Sossa — Founder',
  },
  pillars: {
    eyebrow: 'What we do',
    title: 'Three strategic pillars of development and automation',
    sub: 'Modular solutions designed to solve critical points of visibility, customer service and operational control.',
    items: [
      {
        route: 'webDev' as const,
        icon: 'devices',
        title: 'High-Impact Web Development',
        desc: 'Ultra-fast business websites and web platforms, optimized for conversion, technical SEO and smooth navigation on every device.',
        tag: 'Speed · Conversion',
      },
      {
        route: 'aiAgents' as const,
        icon: 'smart_toy',
        title: 'Artificial Intelligence Agents',
        desc: 'Automated customer service, sales and management on WhatsApp with contextual models that answer like your best advisor, 24 hours a day.',
        tag: 'WhatsApp · Connected AI',
      },
      {
        route: 'management' as const,
        icon: 'dataset',
        title: 'Custom Management Systems',
        desc: "Centralized platforms for inventory control, order tracking and internal operations, designed around your company's exact logic.",
        tag: 'Inventory · Operations',
      },
    ],
  },
  method: {
    eyebrow: 'Method',
    title: 'How we work',
    sub: 'Rigorous collaboration principles to deliver solutions that run with full independence and reliability.',
    steps: [
      {
        title: 'Honest diagnosis',
        desc: "We dig into your operation's bottlenecks. If a tool isn't necessary, we tell you openly.",
      },
      {
        title: 'Agile development',
        desc: 'Short iterations and continuous delivery, with no red tape or friction. You see working progress from the first weeks.',
      },
      {
        title: 'Close support',
        desc: 'Direct technical support, no impersonal tickets. You talk directly with the person building your platform.',
      },
      {
        title: 'Hand-off with autonomy',
        desc: 'Thorough training and documented code. Your team keeps full control of the technology delivered.',
      },
    ],
  },
  channel: {
    eyebrow: 'Official channel',
    title: 'Business contact information',
    sub: 'Direct attention for quotes, project assessments or questions about tailored solutions.',
    person: 'Direct contact',
    email: 'Email',
    whatsapp: 'Official WhatsApp',
    cardTitle: 'Get in touch today',
    cardBody: 'We reply personally to assess the scope and requirements of your project.',
    ctaWhatsapp: 'Write on WhatsApp',
    ctaEmail: 'Send an email',
  },
  cta: {
    title: "Let's build the next stage of your business together.",
    sub: "We're ready to hear about your project and design the solution your operation needs.",
  },
};

export const about: Record<Locale, typeof es> = { es, en };
