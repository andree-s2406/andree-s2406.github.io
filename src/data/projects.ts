export interface ProjectScreenshot {
  src: string;
  title: string;
  caption: string;
}

export interface ProjectModule {
  id: string;
  label: string;
  eyebrow: string;
  summary: string;
  businessValue: string;
  technicalDetail: string;
  stack: string[];
}

export interface ProjectData {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  status: string;
  featured: boolean;
  available: boolean;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  architecture: string[];
  repoUrl: string | null;
  repoVisibilityNote: string;
  liveUrl: string | null;
  screenshots: ProjectScreenshot[];
  iconUrl?: string;
}

export const PROFILE = {
  monogram: 'AR',
  name: 'Andrés Rodríguez',
  handle: '@andree-s2406',
  role: 'Desarrollador Full-Stack & Automatización',
  headline: 'Construyo software que ordena operaciones reales.',
  subheadline:
    'Diseño y programo aplicaciones web, extensiones e integraciones pensadas para el uso diario: desde logística e-commerce hasta bibliotecas digitales y reservas en tiempo real.',
  about: [
    'Me enfoco en resolver cuellos de botella concretos donde el software ahorra horas de trabajo manual y evita errores operativos.',
    'Trabajo de punta a punta: arquitectura de backend, bases de datos multi-tenant, seguridad OAuth/webhooks, interfaces rápidas y despliegue en producción.',
  ],
  githubUrl: 'https://github.com/andree-s2406',
  email: 'andresfeliperodriguezmora448@gmail.com',
  location: 'Argentina',
};

export const DESPAX_MODULES: ProjectModule[] = [
  {
    id: 'pdf-engine',
    label: 'Motor de Etiquetas PDF',
    eyebrow: '01 / Procesamiento de archivos',
    summary: 'Analiza, reordena y rotula lotes de etiquetas de envío en segundos.',
    businessValue:
      'En lugar de cruzar manualmente cada etiqueta de Correo Argentino, Andreani, OCA o e-Pick con su pedido, Despax agrupa las hojas por producto/variante e imprime el detalle exacto de empaque sobre cada rótulo.',
    technicalDetail:
      'Procesamiento en memoria con PyMuPDF (fitz), límites estrictos anti-DoS (MAX_PAGES = 500), exportación de resúmenes operativos a Excel (OpenPyXL) y soporte para impresoras térmicas 10x15 cm o A4.',
    stack: ['Python', 'PyMuPDF', 'OpenPyXL', 'Flask'],
  },
  {
    id: 'shared-stock',
    label: 'Stock Vinculado & Webhooks',
    eyebrow: '02 / Sincronización asíncrona',
    summary: 'Mantiene sincronizado el inventario entre publicaciones que comparten insumos físicos.',
    businessValue:
      'Si dos publicaciones distintas (por ejemplo, producto principal y repuesto/funda) comparten la misma materia prima, cada venta o cancelación ajusta automáticamente el stock de la contraparte sin sobreventas.',
    technicalDetail:
      'Worker en segundo plano con Redis + RQ, claves compuestas de idempotencia en CockroachDB para reintentos de webhooks, buffer de seguridad configurable y verificación HMAC-SHA256.',
    stack: ['Redis', 'RQ Worker', 'CockroachDB', 'Webhooks HMAC'],
  },
  {
    id: 'chrome-ext',
    label: 'Extensión Chrome MV3',
    eyebrow: '03 / Integración en navegador',
    summary: 'Rotula etiquetas directamente dentro de los portales de Tiendanube y correos.',
    businessValue:
      'Evita descargar y subir archivos entre ventanas: el operador genera y rotula sus etiquetas desde el propio panel de Tiendanube, Conexa, OCA, Andreani o Correo Argentino.',
    technicalDetail:
      'Manifest V3 con service worker en background, content scripts inyectados en el mundo MAIN/ISOLATED para interceptar flujos PDF y manipulación directa en cliente con pdf-lib.',
    stack: ['Chrome MV3', 'JavaScript', 'pdf-lib', 'Service Worker'],
  },
  {
    id: 'security-multitenant',
    label: 'Seguridad & Multi-Tenant',
    eyebrow: '04 / Arquitectura en producción',
    summary: 'Aislamiento estricto por cuenta, cifrado de credenciales y cumplimiento OAuth.',
    businessValue:
      'Cada tienda opera en su propio espacio aislado con reglas, promociones (como 2x1), códigos de barra de depósito y lotes históricos independientes.',
    technicalDetail:
      'Tokens OAuth 2.0 cifrados en reposo con AES-128 (Fernet), cookies HttpOnly/Secure, rate limiting por usuario e IP, prevención de path traversal y webhooks GDPR (store_redact / customers_redact).',
    stack: ['OAuth 2.0', 'AES-128 Fernet', 'SQLAlchemy', 'Sentry'],
  },
];

export const DESPAX_VIDEOS = [
  '01 · Primeros pasos, perfil y conexión de tiendas',
  '02 · Rotulado, diagnóstico y visor de hoja en vivo',
  '03 · Asociación manual e historial de lotes',
  '04 · Reportes Excel y control de pedidos',
  '05 · Promociones, reglas y asistente IA',
  '06 · Códigos de barra, escáner y stock vinculado',
  '07 · Extensión de Chrome Despax',
];

export const PROJECTS: Record<'despax' | 'sorbeBeauty' | 'digiteca', ProjectData> = {
  despax: {
    slug: 'despax',
    name: 'Despax',
    tagline: 'Organizador, rotulador inteligente de etiquetas y sincronización de stock para e-commerce.',
    role: 'Proyecto principal · Arquitectura Full-Stack & Extensión',
    status: 'En producción',
    featured: true,
    available: true,
    summary:
      'Plataforma multi-tenant que automatiza el despacho diario de tiendas online: procesa PDFs de etiquetas de envío, cruza órdenes de Tiendanube y Mercado Libre, imprime comandas de empaque y sincroniza stock vinculado en segundo plano.',
    problem:
      'Cuando un e-commerce despacha decenas o cientos de pedidos diarios, las etiquetas de los correos salen desordenadas y sin detalle de qué producto va en cada paquete. Armar cada envío manualmente genera demoras, errores de talle/color y quiebres de stock entre productos que comparten insumos.',
    solution:
      'Despax centraliza el flujo: recibe el PDF de etiquetas, consulta las órdenes reales vía API, reordena las hojas en serie por producto y estampa la comanda de empaque en cada etiqueta. Además, suma una Extensión de Chrome, escáner de códigos de barra para depósito y un worker asíncrono para stock vinculado y promociones.',
    highlights: [
      'Compatible con Correo Argentino, Andreani, OCA y e-Pick (térmica 10x15 cm y A4).',
      'Integración oficial OAuth 2.0 con Tiendanube (App ID 40950) y Mercado Libre.',
      'Stock vinculado bidireccional vía webhooks y worker RQ con idempotencia.',
      'Extensión de Chrome (Manifest V3) para operar directo sobre portales de logística.',
      'Motor de reglas, promociones 2x1, exportación a Excel y analítica con IA opcional (Gemini / Groq).',
      'Módulo de depósito con generación y lectura de códigos de barra.',
    ],
    stack: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'CockroachDB',
      'Redis + RQ',
      'PyMuPDF',
      'OpenPyXL',
      'Cloudflare R2',
      'Sentry',
      'Chrome Extension MV3',
      'JavaScript',
    ],
    architecture: [
      'Aislamiento multi-tenant estricto por user_id y store_id en base de datos y almacenamiento.',
      'Cifrado en reposo AES-128 (Fernet) para tokens OAuth y verificación HMAC-SHA256 en webhooks.',
      'Cola de trabajos asíncrona con Redis + RQ para webhooks de órdenes y cancelaciones.',
      'Protección anti-DoS en PDFs (límite de 500 páginas) y sanitización contra path traversal.',
    ],
    repoUrl: 'https://github.com/andree-s2406/lista',
    repoVisibilityNote: 'Repositorio privado en producción (código fuente bajo solicitud).',
    liveUrl: 'https://lista-zdxo.onrender.com/landing',
    screenshots: [
      {
        src: '/images/despax/02_main.png',
        title: 'Analizador de Pedidos y Etiquetas',
        caption: 'Pantalla operativa principal: carga de PDF, organización de hojas y panel de diagnóstico en vivo.',
      },
      {
        src: '/images/despax/03_panel_etiquetas.png',
        title: 'Panel de Etiquetas',
        caption: 'Configuración de rotulado, formatos de impresión y opciones de asociación de órdenes.',
      },
      {
        src: '/images/despax/04_panel_diagnostico.png',
        title: 'Diagnóstico y Control de Calidad',
        caption: 'Validación previa a la impresión con detección automática de páginas, órdenes y transportistas.',
      },
      {
        src: '/images/despax/06_admin_productos.png',
        title: 'Reglas y Promociones',
        caption: 'Administración de promociones (como 2x1), reglas de etiquetas en Tiendanube y productos de Mercado Libre.',
      },
      {
        src: '/images/despax/07_historial_lotes.png',
        title: 'Historial de Lotes',
        caption: 'Trazabilidad de lotes procesados para auditoría y reimpresión rápida en depósito.',
      },
      {
        src: '/images/despax/08_perfil.png',
        title: 'Perfil y Conexión de Tiendas',
        caption: 'Gestión de cuenta, suscripción y vinculación OAuth con Tiendanube y Mercado Libre.',
      },
      {
        src: '/images/despax/01_login.png',
        title: 'Acceso Seguro',
        caption: 'Inicio de sesión con protección de fuerza bruta y sesiones aisladas por cuenta.',
      },
      {
        src: '/images/despax/05_user_menu.png',
        title: 'Navegación de Cuenta',
        caption: 'Acceso rápido a catálogo, códigos de barra, tutorial interactivo y configuración.',
      },
    ],
  },
  sorbeBeauty: {
    slug: 'sorbe-beauty',
    name: 'Sorbe Beauty',
    tagline: 'Plataforma web y PWA de reservas online y gestión en tiempo real para centro de estética.',
    role: 'Desarrollo Full-Stack & PWA',
    status: 'En producción',
    featured: false,
    available: true,
    summary:
      'Sistema de turnos online pensado para que las clientas reserven tratamientos en minutos desde el celular y el equipo administre agenda, profesionales y recordatorios en tiempo real.',
    problem:
      'La coordinación manual de turnos por mensajes genera superposiciones de horarios, olvidos de citas y pérdida de tiempo administrativo al consultar disponibilidad.',
    solution:
      'Una web rápida e instalable como PWA donde cada clienta explora servicios, ve disponibilidad real y reserva su turno, mientras el panel privado sincroniza cambios al instante vía Pusher y dispara recordatorios por email.',
    highlights: [
      'Catálogo público con buscador, detalle de tratamientos y ranking dinámico de servicios más solicitados (30 días).',
      'Portal de clientas: registro, perfil, historial de "Mis turnos" y recuperación de contraseña.',
      'Sincronización en tiempo real entre clientes y administración mediante Pusher.',
      'Notificaciones transaccionales y recordatorios automáticos con Resend + cron.',
      'Panel de administración con selector alfabético con búsqueda rápida de clientas y gestión de imágenes en Cloudinary.',
      'PWA instalable (Service Worker + manifest) optimizada para uso móvil y SEO dinámico.',
    ],
    stack: [
      'PHP 8.2',
      'CockroachDB',
      'PDO PostgreSQL',
      'Pusher (Realtime)',
      'Resend',
      'Cloudinary',
      'Docker',
      'HTML / CSS / JS',
      'PWA',
    ],
    architecture: [
      'Contenedor Docker desplegado en Render con servidor PHP 8.2 y router dedicado.',
      'Persistencia en CockroachDB con caché temporal en disco para acelerar la carga pública.',
      'Broadcast de eventos en tiempo real vía Pusher tras mutaciones de agenda.',
    ],
    repoUrl: null,
    repoVisibilityNote: 'Código fuente privado (propiedad empresarial). Podés probar el sitio en vivo.',
    liveUrl: 'https://sorbe-beauty.onrender.com/public/servicios.html',
    screenshots: [],
    iconUrl: '/images/sorbe-beauty-icon.svg',
  },
  digiteca: {
    slug: 'digiteca',
    name: 'Digiteca',
    tagline: 'Biblioteca digital institucional con visor seguro de PDFs, control por roles y sincronización en tiempo real.',
    role: 'Desarrollo Full-Stack · Educación',
    status: 'En producción',
    featured: false,
    available: true,
    summary:
      'Plataforma web de gestión y lectura bibliográfica digital desarrollada para la Escuela Técnica N° 29 D.E. 6 "Reconquista de Buenos Aires", orientada a estudiantes, docentes y directivos.',
    problem:
      'El acceso al material técnico y pedagógico dependía de copias físicas o archivos sueltos difíciles de organizar, sin un visor protegido ni control de roles institucionales.',
    solution:
      'Una biblioteca digital centralizada con catálogo filtrable, visor interactivo integrado con PDF.js mediante Blob URLs en memoria (sin descarga directa), listas personales de lectura, estadísticas y actualización en tiempo real.',
    highlights: [
      'Visor seguro en línea con PDF.js y carga en memoria mediante Blob URLs (bloquea rutas directas y barras de descarga).',
      'Control de Acceso Basado en Roles (RBAC): admin, preceptor, profesor y alumno.',
      'Sincronización en tiempo real con Pusher WebSockets + BroadcastChannel entre pestañas.',
      'Catálogo con búsqueda, filtros, ranking de libros destacados y biblioteca personal de lecturas.',
      'Modo claro/oscuro nativo con variables CSS y animaciones vectoriales (Morphicons + Lucide).',
      'Documentación técnica completa (API, arquitectura, modelo relacional y manual de usuario).',
    ],
    stack: [
      'Node.js',
      'Express.js',
      'CockroachDB',
      'PostgreSQL (pg)',
      'PDF.js',
      'Pusher',
      'BroadcastChannel',
      'Multer',
      'HTML5 / CSS3 / JS',
    ],
    architecture: [
      'API REST modular en Express.js con compresión GZIP, rate limiting y cabeceras HTTP de seguridad.',
      'Pool de conexiones a CockroachDB Serverless resistente a cold starts con reintentos automáticos.',
      'Estrategia híbrida: metadatos estructurados en BD relacional y binarios PDF protegidos en servidor.',
    ],
    repoUrl: 'https://github.com/andree-s2406/digiteca',
    repoVisibilityNote: 'Repositorio público en GitHub.',
    liveUrl: 'https://digiteca-nueva.onrender.com',
    screenshots: [],
    iconUrl: '/images/digiteca-logo.png',
  },
};

export const VERIFIED_STACK = [
  {
    group: 'Backend & APIs',
    items: ['Python', 'Flask', 'Node.js', 'Express.js', 'PHP 8.2', 'SQLAlchemy'],
  },
  {
    group: 'Datos & Asíncrono',
    items: ['CockroachDB', 'PostgreSQL', 'Redis', 'RQ Worker', 'SQLite', 'Cloudflare R2'],
  },
  {
    group: 'Frontend & Plataforma',
    items: ['HTML5', 'CSS3 Modular', 'JavaScript (ES6+)', 'PDF.js', 'PWA / Service Workers', 'Chrome Extension MV3'],
  },
  {
    group: 'Integraciones & Seguridad',
    items: ['Tiendanube OAuth', 'Mercado Libre API', 'Pusher Realtime', 'Resend', 'Cloudinary', 'Sentry', 'AES-128 / HMAC'],
  },
];
