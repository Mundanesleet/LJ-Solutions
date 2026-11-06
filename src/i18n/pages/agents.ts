// Copy for the Agentes de IA page (Stitch "LJ Solutions — Agentes de IA").
// Prices come from src/data/pricing.ts.
import type { Locale } from '../config';

const es = {
  heroImageAlt: 'Persona usando WhatsApp en su celular en una oficina al anochecer',
  ctaQuote: 'Cotizar por WhatsApp',
  ctaPlans: 'Ver planes y precios',
  what: {
    eyebrow: 'Definición & flujo',
    title: '¿Qué es un agente de IA para WhatsApp?',
    sub: 'Es un asistente inteligente que conversa con tus clientes mediante WhatsApp, comprende sus solicitudes y responde de acuerdo con la información y las instrucciones de tu negocio.',
    steps: [
      {
        title: 'El cliente escribe',
        desc: 'El usuario inicia una conversación habitual por WhatsApp, sin necesidad de apps adicionales ni formularios externos.',
      },
      {
        title: 'El agente comprende',
        desc: 'La inteligencia artificial interpreta la consulta semánticamente y reconoce de inmediato lo que necesita el cliente.',
      },
      {
        title: 'El agente responde',
        desc: 'Proporciona información estructurada, resuelve dudas específicas y orienta al usuario con el tono de voz de tu marca.',
      },
      {
        title: 'Se gestiona la solicitud',
        desc: 'Según su configuración, puede ayudar a gestionar pedidos, canalizar consultas especializadas o registrar reservas de citas.',
      },
    ],
    trace: {
      title: 'Trazabilidad de conversación',
      active: 'Agente activo',
      userLabel: 'Entrada usuario',
      userTime: '14:02:18',
      userMessage: '“¿Tienen disponible la consultoría estratégica para el próximo jueves?”',
      intent: 'Intención detectada: Agendamiento de citas',
      entity: 'Entidad: Consultoría estratégica · Parámetro: Jueves próximo',
      latency: '180ms',
      aiLabel: 'Respuesta generada por IA',
      aiTime: '14:02:19',
      aiMessage:
        'Sí, contamos con disponibilidad para consultoría este jueves en dos franjas: 10:00 am y 3:30 pm. ¿Cuál de estos horarios se adapta mejor a tu agenda?',
      sync: 'Sincronización con base de datos del negocio',
      verified: 'Verificado',
    },
  },
  capabilities: {
    eyebrow: 'Capacidades operativas',
    title: 'Mucho más que responder mensajes.',
    sub: 'Desde atender a tus clientes hasta gestionar pedidos y reservas, nuestros agentes inteligentes ayudan a simplificar las tareas de tu negocio.',
    items: [
      {
        badge: 'Disponible en agente básico y solución integral',
        badgeIcon: '',
        title: 'Atención al cliente',
        desc: 'Responde consultas, proporciona información y orienta a tus clientes mediante conversaciones naturales en WhatsApp.',
        points: [
          'Respuestas inmediatas y estructuradas según la base de conocimiento y manuales de tu negocio.',
          'Detección precisa de intenciones y vocabulario específico en lenguaje natural.',
          'Tono de voz personalizado y adaptable a la identidad formal o cercana de tu marca.',
        ],
        alt: 'Celular con una conversación de WhatsApp Business atendida por un asistente de IA',
      },
      {
        badge: 'Exclusivo en solución integral con agenda',
        badgeIcon: 'event_available',
        title: 'Agenda y reservas',
        desc: 'Facilita la programación de citas y permite que tus clientes consulten horarios disponibles y soliciten sus reservas sin fricción ni esperas.',
        points: [
          'Sincronización en tiempo real con calendarios corporativos y agendas de profesionales.',
          'Confirmaciones instantáneas por WhatsApp con recordatorios y detalles de la cita.',
          'Selección intuitiva de franjas horarias y servicios disponibles en segundos.',
        ],
        alt: 'Tableta con un calendario de citas y un celular con la confirmación por WhatsApp',
      },
      {
        badge: 'Configurable según el modelo de negocio',
        badgeIcon: 'tune',
        title: 'Gestión de pedidos',
        desc: 'Permite que tus clientes consulten productos, indiquen cantidades y realicen solicitudes mediante una conversación clara y ordenada.',
        points: [
          'Registro estructurado de solicitudes con discriminación de ítems y cantidades.',
          'Cálculo automático de montos totales y cotizaciones instantáneas en COP.',
          'Recopilación autónoma de datos de entrega y confirmación directa en el chat.',
        ],
        alt: 'Mano sosteniendo un celular con un pedido resumido por un asistente de WhatsApp',
      },
      {
        badge: 'Integración en solución con catálogo',
        badgeIcon: 'grid_view',
        title: 'Información de productos',
        desc: 'Facilita la consulta de productos, precios, características y disponibilidad mediante un catálogo conectado a la experiencia de atención.',
        points: [
          'Fichas técnicas enriquecidas con fotografía real y descripciones detalladas.',
          'Precios actualizados en moneda local (COP) e indicadores de disponibilidad en stock.',
          'Envío automático de recomendaciones personalizadas directamente a WhatsApp.',
        ],
        alt: 'Catálogo de productos en línea junto a un chat de WhatsApp que comparte un producto',
      },
    ],
  },
  impact: {
    eyebrow: 'Impacto real',
    title: 'Tu negocio puede atender de una manera más inteligente.',
    sub: 'Incorporar inteligencia artificial en tus canales de contacto directo permite profesionalizar la experiencia de usuario y optimizar el tiempo de tu equipo.',
    items: [
      {
        icon: 'hourglass_empty',
        title: 'Ahorro de tiempo',
        desc: 'Reduce la necesidad de responder manualmente las mismas preguntas una y otra vez, liberando horas productivas para tu equipo.',
      },
      {
        icon: 'thumb_up',
        title: 'Mejor atención',
        desc: 'Ofrece respuestas organizadas, datos correctos y una experiencia de conversación más consistente en cada interacción.',
      },
      {
        icon: 'hub',
        title: 'Organización',
        desc: 'Ayuda a centralizar consultas, clasificar intenciones de los clientes y mantener un registro estructurado de cada solicitud.',
      },
      {
        icon: 'trending_up',
        title: 'Más oportunidades comerciales',
        desc: 'Facilita que los clientes conozcan tus productos en el momento en que muestran interés y avancen ágilmente en su proceso de compra.',
      },
    ],
    phone: {
      name: 'Atención LJ Solutions',
      status: 'Flujo automatizado',
      label: 'Respuesta inmediata:',
      message:
        'Estimado cliente, su solicitud sobre el paquete web ha sido registrada con el código #LJ-4092. Le enviamos los detalles a continuación.',
      reply: '¡Excelente, muchas gracias por la claridad!',
      actionsLabel: 'Acciones disponibles:',
      actions: ['Descargar ficha de servicio', 'Hablar con un asesor comercial'],
      aria: 'Ejemplo de conversación automatizada en WhatsApp',
    },
  },
  plans: {
    eyebrow: 'Propuesta comercial',
    title: 'Encuentra el agente ideal para tu negocio.',
    sub: 'Tenemos diferentes soluciones de automatización según las necesidades de tu empresa y el alcance que requieras implementar.',
    investment: 'Inversión única de implementación',
    basic: {
      tag: 'Solución esencial',
      title: 'Agente IA para WhatsApp básico',
      desc: 'Un asistente inteligente para atender consultas, responder preguntas frecuentes y proporcionar información de tu negocio a través de WhatsApp.',
      includes: 'Incluye:',
      features: [
        'Atención automatizada mediante WhatsApp',
        'Respuestas a consultas frecuentes',
        'Información sobre el negocio',
        'Conversaciones configuradas según las necesidades de la empresa',
      ],
      cta: 'Solicitar agente básico',
    },
    full: {
      tag: 'Solución integral',
      title: 'Agente IA con agenda, catálogo y página web',
      desc: 'Una solución más completa que integra atención mediante WhatsApp, presentación de productos, gestión de citas y presencia web para tu negocio.',
      includes: 'Incluye todo el paquete avanzado:',
      features: [
        'Agente IA para WhatsApp',
        'Catálogo de productos o servicios',
        'Gestión de agenda y solicitudes de citas',
        'Página web integrada con arquitectura moderna',
        'Experiencia digital conectada para los clientes',
      ],
      cta: 'Solicitar solución completa',
    },
    message: (title: string, price: string) => `Hola! Me interesa el "${title}" (${price} COP).`,
  },
  method: {
    eyebrow: 'Metodología de trabajo',
    title: 'De la idea a tu asistente inteligente.',
    sub: 'Un proceso claro y transparente diseñado para garantizar que tu agente represente con exactitud la propuesta de tu negocio.',
    steps: [
      {
        title: 'Conocemos tu negocio',
        desc: 'Identificamos cómo atiendes a tus clientes actualmente y qué procesos o consultas específicas deseas automatizar.',
      },
      {
        title: 'Configuramos tu agente',
        desc: 'Definimos la información, las instrucciones corporativas y el comportamiento del asistente para asegurar coherencia.',
      },
      {
        title: 'Realizamos pruebas',
        desc: 'Comprobamos los flujos de conversación y ajustamos las respuestas según las necesidades y casos de borde acordados.',
      },
      {
        title: 'Implementamos',
        desc: 'Ponemos en marcha la solución en tu línea y te acompañamos durante su adopción para garantizar su correcto funcionamiento.',
      },
    ],
  },
  faq: {
    intro: 'Respuestas transparentes a las dudas habituales antes de integrar un agente conversacional inteligente en tu negocio.',
    message: 'Hola LJ Solutions, tengo una pregunta sobre los agentes de IA.',
    items: [
      {
        q: '¿Qué es un agente de inteligencia artificial para WhatsApp?',
        a: 'Es un sistema basado en procesamiento de lenguaje natural que se conecta a WhatsApp para mantener conversaciones con tus clientes de forma autónoma, interpretando intenciones y ofreciendo información precisa basada en las directrices de tu empresa.',
      },
      {
        q: '¿Necesito tener un negocio para utilizarlo?',
        a: 'Está diseñado principalmente para empresas, emprendimientos, marcas comerciales y profesionales independientes que gestionan un flujo continuo de consultas sobre productos o servicios a través de WhatsApp.',
      },
      {
        q: '¿Puede responder preguntas sobre mis productos?',
        a: 'Sí. Configuramos la base de conocimiento del agente con tus listas de productos, características técnicas, condiciones de entrega, precios y preguntas frecuentes para que proporcione datos exactos.',
      },
      {
        q: '¿Puede recibir pedidos de mis clientes?',
        a: 'Sí. El agente puede guiar al usuario a través del catálogo, solicitar las cantidades requeridas, recopilar la información de envío y registrar el resumen del pedido para tu posterior procesamiento.',
      },
      {
        q: '¿Puede gestionar citas y reservas?',
        a: 'En la solución que incluye agenda y presencia web, el agente consulta la disponibilidad de horarios configurados y guía al usuario para agendar citas o sesiones diagnósticas de manera organizada.',
      },
      {
        q: '¿Puedo personalizar las respuestas del agente?',
        a: 'Totalmente. Ajustamos el tono de comunicación (formal, cercano, corporativo), el vocabulario técnico específico de tu sector y los límites sobre qué temas debe responder o derivar a una persona de tu equipo.',
      },
      {
        q: '¿Qué diferencia hay entre el agente básico y la solución completa?',
        a: 'El agente básico se enfoca en resolver preguntas frecuentes y entregar información clave del negocio en WhatsApp. La solución completa añade un catálogo digital estructurado, sistema de gestión de citas y reservas, y una página web profesional integrada con la conversación.',
      },
    ],
  },
  cta: {
    label: 'Inicia tu automatización',
    title: 'Tu próximo asistente puede ser inteligente.',
    sub: 'Cuéntanos cómo funciona tu negocio y encontremos la mejor manera de automatizar su atención con tecnología de vanguardia.',
  },
};

const en: typeof es = {
  heroImageAlt: 'Person using WhatsApp on their phone in an office at dusk',
  ctaQuote: 'Get a quote on WhatsApp',
  ctaPlans: 'See plans and pricing',
  what: {
    eyebrow: 'Definition & flow',
    title: 'What is an AI agent for WhatsApp?',
    sub: "It's a smart assistant that talks with your customers on WhatsApp, understands their requests and answers according to your business's information and instructions.",
    steps: [
      {
        title: 'The customer writes',
        desc: 'The user starts a normal WhatsApp conversation, with no extra apps or external forms.',
      },
      {
        title: 'The agent understands',
        desc: 'Artificial intelligence interprets the meaning of the question and immediately recognizes what the customer needs.',
      },
      {
        title: 'The agent answers',
        desc: "It provides structured information, resolves specific questions and guides the user in your brand's tone of voice.",
      },
      {
        title: 'The request is handled',
        desc: 'Depending on its setup, it can help manage orders, route specialized questions or record appointment bookings.',
      },
    ],
    trace: {
      title: 'Conversation trace',
      active: 'Agent active',
      userLabel: 'User input',
      userTime: '14:02:18',
      userMessage: '“Do you have the strategy consultation available next Thursday?”',
      intent: 'Detected intent: Appointment booking',
      entity: 'Entity: Strategy consultation · Parameter: Next Thursday',
      latency: '180ms',
      aiLabel: 'AI-generated reply',
      aiTime: '14:02:19',
      aiMessage:
        'Yes, we have consultation availability this Thursday in two slots: 10:00 am and 3:30 pm. Which of these times works best for you?',
      sync: 'Synced with the business database',
      verified: 'Verified',
    },
  },
  capabilities: {
    eyebrow: 'Operational capabilities',
    title: 'Much more than answering messages.',
    sub: 'From serving your customers to managing orders and bookings, our smart agents help simplify your business tasks.',
    items: [
      {
        badge: 'Available in the basic agent and the full solution',
        badgeIcon: '',
        title: 'Customer service',
        desc: 'Answers questions, provides information and guides your customers through natural conversations on WhatsApp.',
        points: [
          "Instant, structured answers based on your business's knowledge base and manuals.",
          'Accurate detection of intents and specific vocabulary in natural language.',
          "A custom tone of voice that adapts to your brand's formal or friendly identity.",
        ],
        alt: 'Phone with a WhatsApp Business conversation handled by an AI assistant',
      },
      {
        badge: 'Exclusive to the full solution with scheduling',
        badgeIcon: 'event_available',
        title: 'Scheduling and bookings',
        desc: 'Makes booking appointments easy and lets your customers check available times and request bookings without friction or waiting.',
        points: [
          "Real-time sync with company calendars and professionals' schedules.",
          'Instant WhatsApp confirmations with reminders and appointment details.',
          'Intuitive selection of available time slots and services in seconds.',
        ],
        alt: 'Tablet with an appointment calendar and a phone showing the WhatsApp confirmation',
      },
      {
        badge: 'Configurable to your business model',
        badgeIcon: 'tune',
        title: 'Order management',
        desc: 'Lets your customers browse products, specify quantities and place requests through a clear, orderly conversation.',
        points: [
          'Structured request records with items and quantities broken down.',
          'Automatic totals and instant quotes in COP.',
          'Autonomous collection of delivery details and confirmation right in the chat.',
        ],
        alt: 'Hand holding a phone with an order summarized by a WhatsApp assistant',
      },
      {
        badge: 'Included in the catalog solution',
        badgeIcon: 'grid_view',
        title: 'Product information',
        desc: 'Makes it easy to check products, prices, features and availability through a catalog connected to the customer service experience.',
        points: [
          'Rich product sheets with real photography and detailed descriptions.',
          'Up-to-date prices in local currency (COP) and stock availability indicators.',
          'Automatic personalized recommendations sent straight to WhatsApp.',
        ],
        alt: 'Online product catalog next to a WhatsApp chat sharing a product',
      },
    ],
  },
  impact: {
    eyebrow: 'Real impact',
    title: 'Your business can serve customers more intelligently.',
    sub: "Bringing artificial intelligence into your direct contact channels lets you professionalize the user experience and make better use of your team's time.",
    items: [
      {
        icon: 'hourglass_empty',
        title: 'Time savings',
        desc: 'Reduces the need to answer the same questions by hand over and over, freeing up productive hours for your team.',
      },
      {
        icon: 'thumb_up',
        title: 'Better service',
        desc: 'Delivers organized answers, correct information and a more consistent conversation experience in every interaction.',
      },
      {
        icon: 'hub',
        title: 'Organization',
        desc: "Helps centralize questions, classify customers' intents and keep a structured record of every request.",
      },
      {
        icon: 'trending_up',
        title: 'More sales opportunities',
        desc: 'Helps customers learn about your products the moment they show interest and move quickly through their purchase.',
      },
    ],
    phone: {
      name: 'LJ Solutions Support',
      status: 'Automated flow',
      label: 'Instant reply:',
      message: 'Dear customer, your request about the web package has been registered with code #LJ-4092. Here are the details.',
      reply: 'Great, thank you for the clarity!',
      actionsLabel: 'Available actions:',
      actions: ['Download service sheet', 'Talk to a sales advisor'],
      aria: 'Example of an automated WhatsApp conversation',
    },
  },
  plans: {
    eyebrow: 'Commercial proposal',
    title: 'Find the right agent for your business.',
    sub: "We have different automation solutions depending on your company's needs and the scope you want to implement.",
    investment: 'One-time implementation investment',
    basic: {
      tag: 'Essential solution',
      title: 'Basic WhatsApp AI agent',
      desc: 'A smart assistant to handle questions, answer FAQs and provide information about your business on WhatsApp.',
      includes: 'Includes:',
      features: [
        'Automated customer service on WhatsApp',
        'Answers to frequent questions',
        'Information about the business',
        "Conversations configured to the company's needs",
      ],
      cta: 'Request the basic agent',
    },
    full: {
      tag: 'Full solution',
      title: 'AI agent with scheduling, catalog and website',
      desc: 'A more complete solution that combines WhatsApp customer service, product presentation, appointment management and a web presence for your business.',
      includes: 'Includes the full advanced package:',
      features: [
        'WhatsApp AI agent',
        'Product or service catalog',
        'Schedule and appointment request management',
        'Integrated website with modern architecture',
        'A connected digital experience for customers',
      ],
      cta: 'Request the full solution',
    },
    message: (title: string, price: string) => `Hi! I'm interested in the "${title}" (${price} COP).`,
  },
  method: {
    eyebrow: 'How we work',
    title: 'From idea to your smart assistant.',
    sub: "A clear, transparent process designed to make sure your agent accurately represents your business's offer.",
    steps: [
      {
        title: 'We learn your business',
        desc: 'We identify how you serve your customers today and which processes or specific questions you want to automate.',
      },
      {
        title: 'We configure your agent',
        desc: "We define the information, company instructions and the assistant's behavior to ensure consistency.",
      },
      {
        title: 'We test',
        desc: 'We check the conversation flows and adjust the answers to the agreed needs and edge cases.',
      },
      {
        title: 'We implement',
        desc: 'We launch the solution on your line and support you through adoption to make sure it works properly.',
      },
    ],
  },
  faq: {
    intro: 'Straight answers to the usual questions before bringing a smart conversational agent into your business.',
    message: 'Hi LJ Solutions, I have a question about AI agents.',
    items: [
      {
        q: 'What is an artificial intelligence agent for WhatsApp?',
        a: "It's a system based on natural language processing that connects to WhatsApp to hold conversations with your customers on its own, interpreting intents and providing accurate information based on your company's guidelines.",
      },
      {
        q: 'Do I need to have a business to use it?',
        a: 'It is designed mainly for companies, startups, commercial brands and independent professionals who handle a steady flow of questions about products or services on WhatsApp.',
      },
      {
        q: 'Can it answer questions about my products?',
        a: "Yes. We configure the agent's knowledge base with your product lists, technical features, delivery terms, prices and FAQs so it provides accurate information.",
      },
      {
        q: 'Can it take orders from my customers?',
        a: 'Yes. The agent can guide the user through the catalog, ask for the required quantities, collect shipping information and record the order summary for you to process.',
      },
      {
        q: 'Can it manage appointments and bookings?',
        a: 'In the solution that includes scheduling and a web presence, the agent checks the configured availability and guides the user to book appointments or diagnostic sessions in an organized way.',
      },
      {
        q: "Can I customize the agent's answers?",
        a: 'Absolutely. We adjust the tone (formal, friendly, corporate), the technical vocabulary of your industry and the limits on which topics it should answer or hand off to a person on your team.',
      },
      {
        q: "What's the difference between the basic agent and the full solution?",
        a: 'The basic agent focuses on answering frequent questions and delivering key business information on WhatsApp. The full solution adds a structured digital catalog, an appointment and booking system, and a professional website integrated with the conversation.',
      },
    ],
  },
  cta: {
    label: 'Start automating',
    title: 'Your next assistant can be smart.',
    sub: "Tell us how your business works and let's find the best way to automate your customer service with cutting-edge technology.",
  },
};

export const agents: Record<Locale, typeof es> = { es, en };
