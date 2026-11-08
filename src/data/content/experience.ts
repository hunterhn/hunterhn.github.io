import type { Job } from "./types";

export const experience: Job[] = [
  {
    role: { es: "DevOps Engineer", en: "DevOps Engineer" },
    company: "BairesDev",
    period: { es: "abr 2022 – Presente", en: "Apr 2022 – Present" },
    location: { es: "Remoto", en: "Remote" },
    bullets: {
      es: [
        "Diseño y opero infraestructura cloud en GCP y AWS.",
        "Mantengo la infraestructura como código con Terraform, trabajo con contenedores y armo los pipelines de CI/CD.",
        "Me encargo de la seguridad y la observabilidad, y persigo los incidentes que aparecen en producción.",
      ],
      en: [
        "I design and run cloud infrastructure on GCP and AWS.",
        "I keep infrastructure as code with Terraform, work with containers and build the CI/CD pipelines.",
        "I handle security and observability, and I chase down incidents in production.",
      ],
    },
    tech: ["GCP", "AWS", "Terraform", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    role: {
      es: "DevOps & Business Intelligence Architect",
      en: "DevOps & Business Intelligence Architect",
    },
    company: "ASAP - Tu App de Mensajería",
    period: { es: "dic 2020 – feb 2022", en: "Dec 2020 – Feb 2022" },
    location: { es: "Panamá, Panamá", en: "Panama City, Panama" },
    bullets: {
      es: [
        "Armé la arquitectura DevOps y de inteligencia de negocio para una plataforma de mensajería.",
      ],
      en: [
        "I set up the DevOps and business intelligence architecture for a messaging platform.",
      ],
    },
    tech: ["DevOps", "Business Intelligence", "Databases"],
  },
  {
    role: { es: "IT Manager", en: "IT Manager" },
    company: "Yoytec Computer S.A.",
    period: { es: "abr 2016 – dic 2020", en: "Apr 2016 – Dec 2020" },
    location: { es: "Panamá", en: "Panama" },
    bullets: {
      es: [
        "Definí los requerimientos de software nuevo como Product Owner y dirigí los proyectos de desarrollo.",
        "Implanté y administré varios sistemas: VMware vSphere, control de acceso RFID Biostar2, CCTV IP, PBX Elastix, correo iRedMail y firewalls pfSense.",
        "Segmenté y reorganicé la red, y reduje la latencia un 35%.",
        "Monté redundancia WAN con antenas AirFiber y conmutación automática por OpenVPN entre sedes.",
        "Lideré el desarrollo de 3 módulos satélite para el sistema legado.",
        "Capacité al equipo y a los usuarios de los productos.",
      ],
      en: [
        "I defined the new software requirements as Product Owner and led the development projects.",
        "I set up and administered several systems: VMware vSphere, Biostar2 RFID access control, IP CCTV, Elastix PBX, iRedMail and pfSense firewalls.",
        "I segmented and reorganized the network, and cut latency by 35%.",
        "I set up WAN redundancy with AirFiber antennas and automatic OpenVPN failover between sites.",
        "I led the development of 3 satellite modules for the legacy system.",
        "I trained the team and the product users.",
      ],
    },
    tech: ["VMware vSphere", "pfSense", "OpenVPN", "Elastix", "RFID", "CCTV"],
  },
  {
    role: { es: "Consultor IT", en: "IT Consultant" },
    company: "HAZSK",
    period: { es: "ene 2016 – mar 2018", en: "Jan 2016 – Mar 2018" },
    location: { es: "Panamá", en: "Panama" },
  },
  {
    role: {
      es: "Auditor de Riesgo Tecnológico",
      en: "Technology Risk Auditor",
    },
    company: "CNBS Honduras",
    period: { es: "abr 2012 – ene 2016", en: "Apr 2012 – Jan 2016" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Audité el cumplimiento y la seguridad de la información en instituciones financieras.",
        "Hice pruebas de hacking ético, verifiqué vulnerabilidades y redacté reportes de hallazgos.",
        "Busqué patrones, relaciones y causas de irregularidades en datos bancarios.",
        "Verifiqué los procesos de seguridad de la información y de las transacciones.",
        "Apliqué la normativa del sistema financiero (prevención de lavado de dinero y regulaciones bancarias).",
        "Procesé datos de sistemas heterogéneos (SQL Server, Oracle, Informix, MySQL, AS400) con .NET, procedimientos almacenados y Java para las estadísticas económicas.",
      ],
      en: [
        "I audited compliance and information security at financial institutions.",
        "I ran ethical hacking tests, checked vulnerabilities and wrote findings reports.",
        "I looked for patterns, relations and causes of irregularities in banking data.",
        "I checked the information and transaction security processes.",
        "I applied financial system regulations (money laundering prevention and banking regulations).",
        "I processed data across heterogeneous systems (SQL Server, Oracle, Informix, MySQL, AS400) with .NET, stored procedures and Java for economic statistics.",
      ],
    },
    tech: [
      "Information Security",
      "Ethical Hacking",
      "SQL Server",
      "Oracle",
      "Informix",
      "MySQL",
      "AS400",
      ".NET",
      "Java",
      "AML",
    ],
  },
  {
    role: {
      es: "Capacitador de Tecnologías en Desarrollo Web",
      en: "Web Development Technologies Trainer",
    },
    company: "Medcom Panama",
    period: { es: "may 2014", en: "May 2014" },
    location: { es: "Panamá", en: "Panama" },
    bullets: {
      es: [
        "Capacité al equipo de desarrollo en HTML5, CSS3, Bootstrap, JavaScript, jQuery y PHP.",
        "Para el proyecto final armé una interfaz interactiva con notificaciones y formularios en tiempo real sobre una base de datos.",
      ],
      en: [
        "I trained the development team in HTML5, CSS3, Bootstrap, JavaScript, jQuery and PHP.",
        "For the final project I built an interactive interface with real-time notifications and forms over a database.",
      ],
    },
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "PHP"],
  },
  {
    role: {
      es: "Administrador de Servidores e Infraestructura",
      en: "Servers & Infrastructure Administrator",
    },
    company: "Banco de Occidente S.A.",
    period: { es: "ene 2011 – abr 2012", en: "Jan 2011 – Apr 2012" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Analicé y diseñé, con una mirada de conjunto, los sistemas de seguridad y el perímetro de la DMZ.",
        "Administré las redes externas: ASA, tunneling, VPN, políticas de seguridad y NAT.",
        "Administré servidores Linux (Red Hat, CentOS), con automatización de procesos y conexiones autónomas por SSH.",
        "Administré Windows Server 2003/2008, MSSQL/MySQL y la virtualización con VMware ESXi.",
        "Creé e implementé una 'mini nube' con SAN y varios servidores conectados por VMware.",
        "Analicé y diseñé la nueva banca en línea, y monté una granja de servidores IIS en una nube virtual Windows 2008 con NAT inverso.",
        "Implementé un sistema IVR conectado a Asterisk para las transacciones automáticas de los clientes.",
        "Implementé NAS/SFTP, un sitio interno con Joomla y el monitoreo de transacciones.",
      ],
      en: [
        "I analyzed and designed the security systems and the DMZ perimeter, taking in the whole picture.",
        "I administered the external networks: ASA, tunneling, VPN, security policies and NAT.",
        "I administered Linux servers (Red Hat, CentOS), with process automation and autonomous SSH connections.",
        "I administered Windows Server 2003/2008, MSSQL/MySQL and VMware ESXi virtualization.",
        "I created and implemented a 'mini cloud' with a SAN and several servers connected through VMware.",
        "I analyzed and designed the new online banking, and set up an IIS server farm on a Windows 2008 virtual cloud with reverse NAT.",
        "I implemented an IVR system connected to Asterisk for automatic client transactions.",
        "I implemented NAS/SFTP, an internal Joomla site and transaction monitoring.",
      ],
    },
    tech: [
      "Cisco ASA",
      "VPN",
      "NAT",
      "Linux",
      "Red Hat",
      "CentOS",
      "Windows Server",
      "MSSQL",
      "MySQL",
      "VMware ESXi",
      "SAN",
      "Asterisk",
      "Joomla",
      "IIS",
    ],
  },
  {
    role: {
      es: "Analista Desarrollador de Sistemas — Líder de Equipo",
      en: "System Analyst Developer — Team Leader",
    },
    company: "Banco de Occidente S.A.",
    period: { es: "ene 2010 – ene 2011", en: "Jan 2010 – Jan 2011" },
    bullets: {
      es: [
        "Lideré y organicé el equipo de desarrollo. Asigné tareas y analicé los sistemas nuevos.",
        "Definí el estándar para desarrollar los nuevos sistemas de la institución.",
        "Analicé y diseñé la nueva banca en línea y los nuevos kioscos de información.",
        "Creé el framework que automatizó la transaccionalidad sobre WebServices seguros; fue la base de la banca en línea y de los sistemas que vinieron después.",
        "Creé un sistema de cobranzas que aumentó las ganancias del banco.",
      ],
      en: [
        "I led and organized the development team. I assigned tasks and analyzed the new systems.",
        "I set the standard for building new software systems at the institution.",
        "I analyzed and designed the new online banking system and the new information kiosks.",
        "I created the framework that automated transactionality over secure WebServices; it became the base for online banking and for the systems that came later.",
        "I created a collections system that increased the bank's profit.",
      ],
    },
    tech: ["WebServices", ".NET", "Software Architecture"],
  },
  {
    role: {
      es: "Consultor de Implementación Moodle",
      en: "Moodle Implementation Consultant",
    },
    company: "MIDEH",
    period: { es: "dic 2009 – jul 2010", en: "Dec 2009 – Jul 2010" },
    bullets: {
      es: [
        "Implementé la plataforma Moodle para pruebas en línea en escuelas públicas de Honduras.",
        "Edité y ajusté Moodle para primaria y secundaria.",
        "Implementé las modalidades en línea y offline.",
        "Capacité a los empleados de MIDEH en el uso de la plataforma.",
      ],
      en: [
        "I implemented the Moodle platform for online tests in Honduran public schools.",
        "I edited and adjusted Moodle for elementary and junior high.",
        "I implemented both online and offline modes.",
        "I trained MIDEH employees on the platform.",
      ],
    },
    tech: ["Moodle", "PHP", "MySQL", "Linux"],
  },
  {
    role: {
      es: "Analista Desarrollador de Sistemas",
      en: "System Analyst Developer",
    },
    company: "Banco de Occidente Honduras",
    period: { es: "feb 2008 – ene 2010", en: "Feb 2008 – Jan 2010" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Analicé sistemas nuevos y diseñé las interfaces de comunicación entre sistemas (RPG, .NET, Java) por archivos, sockets IP y RPC.",
        "Automaticé el intercambio de datos con empresas externas mediante importación de archivos planos.",
        "Automaticé tareas con .NET y PHP enlazando el core bancario en AS400.",
        "Programé completo un IVR con Ruby y PHP (DTMF, archivos planos y WebServices entre entornos).",
        "Diseñé e implementé la comunicación .NET–AS400/DB2 y el sistema de comunicación con terceros basado en sockets y WebServices.",
        "Armé un cliente/servidor de sockets con hilos para administrar las rutas de transacciones y leer con buffer los archivos AS400.",
      ],
      en: [
        "I analyzed new systems and designed the communication interfaces between systems (RPG, .NET, Java) via files, IP sockets and RPC.",
        "I automated data exchange with external companies through flat-file import processing.",
        "I automated tasks with .NET and PHP linking the AS400 banking core.",
        "I programmed an entire IVR with Ruby and PHP (DTMF, flat files and WebServices across environments).",
        "I designed and implemented the .NET–AS400/DB2 communication and the third-party communication system based on sockets and WebServices.",
        "I built a socket client/server with threads to manage transaction paths and read AS400 files through a buffer.",
      ],
    },
    tech: [
      ".NET",
      "RPG",
      "Java",
      "PHP",
      "Ruby",
      "MSSQL",
      "AS400",
      "DB2",
      "WebServices",
      "Sockets",
    ],
  },
  {
    role: {
      es: "Consultor / Desarrollador",
      en: "Consultant / Developer",
    },
    company: "Independiente",
    period: { es: "ago 2004 – feb 2008", en: "Aug 2004 – Feb 2008" },
    bullets: {
      es: [
        "Desarrollé sistemas por mi cuenta, instalé redes y configuré routers y antenas satelitales.",
        "Diseñé sitios de intranet y sitios web públicos (honduracing.com, viveenlaunah.com, ktrachos.net).",
      ],
      en: [
        "I developed software on my own, installed networks and configured routers and satellite antennas.",
        "I designed intranet sites and public websites (honduracing.com, viveenlaunah.com, ktrachos.net).",
      ],
    },
  },
  {
    role: {
      es: "Transformación y Carga de Datos",
      en: "Data Transformation & Loader",
    },
    company: "TransUnion Honduras",
    period: { es: "feb 2006 – may 2006", en: "Feb 2006 – May 2006" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Recolecté información de distintas empresas.",
        "Escribí scripts automáticos para organizar y procesar la información.",
        "Convertí los datos a la estructura del buró de crédito.",
      ],
      en: [
        "I gathered information from different companies.",
        "I wrote automatic scripts to organize and process the information.",
        "I converted the data to the credit bureau structure.",
      ],
    },
    tech: ["Data Processing", "Scripting"],
  },
];

