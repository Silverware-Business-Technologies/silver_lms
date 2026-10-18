export type IconName =
  | "Fingerprint"
  | "Video"
  | "DoorOpen"
  | "Network"
  | "SunMedium"
  | "Code2"
  | "Workflow"
  | "Cable"
  | "SquareTerminal"
  | "BadgeCheck";

export type TelemetryStat = {
  value: string;
  label: string;
};

export type Category = {
  title: string;
  icon: IconName;
  description: string;
  tracks: number;
  href: string;
};

export type Course = {
  code: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  rating: number;
  reviews: number;
  modules: number;
  lessons: number;
  duration: string;
  price: number;
};

export type AcademyStep = {
  label: string;
  icon: IconName;
  title: string;
  description: string;
  complete?: boolean;
};

export type Instructor = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  modules: string;
  students: string;
  initials: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const academy = {
  name: "Silverware Academy",
  description:
    "The premier technical engineering and certification institution for enterprise hardware, digital surveillance, and renewable energy in West Africa.",
  hero: {
    eyebrow: "HANDS-ON ENGINEERING TRACK",
    title: "Build the skills behind modern technology.",
    description:
      "Learn biometrics, electronic security, IT infrastructure, renewable energy, and software engineering from industry practitioners in Nigeria.",
    primaryAction: "Explore Courses",
    secondaryAction: "How Academy Works",
  },
  telemetry: {
    hostname: "bench-rack-04.lagos.silverware.internal",
    badge: "LIVE SIMULATOR",
    image: "/images/simulator_bench.jpg",
    imageAlt:
      "Nigerian technicians working on biometric access and network hardware in a bright Lagos lab",
    handshake: "TCP/IP Reader #01: Wiegand 26-bit Handshake OK",
    latencyUnit: "ms",
    voltageLabel: "ACCESS BUS VOLTAGE",
    voltageValue: "13.82 VDC",
    voltageStatus: "STABLE",
    voltageProgress: 85,
    storageLabel: "NVR STORAGE POOL",
    storageUsed: 18.4,
    storageTotal: 24,
    storageUnit: "TB",
    storageTag: "H.265+",
    command: "$ stream-rtsp --feed=cam-ch04 --codec=h265 --fps=30",
    connectionStatus: "CONNECTED",
  },
  // TODO: Replace these placeholder statistics with verified launch numbers.
  stats: [
    { value: "14 Labs", label: "Physical Bench Units" },
    { value: "98.4%", label: "Field Certification Rate" },
    { value: "₦1.2M+", label: "Avg Field Tech Placement" },
  ] satisfies TelemetryStat[],
  categories: [
    {
      title: "Biometrics & Identity",
      icon: "Fingerprint",
      description:
        "Facial & fingerprint access modules, optical matching engines, and card readers.",
      tracks: 4,
      href: "#courses",
    },
    {
      title: "CCTV & Surveillance",
      icon: "Video",
      description:
        "IP streams, NVR architecture, PTZ controllers & enterprise storage calculations.",
      tracks: 6,
      href: "#courses",
    },
    {
      title: "Access Control",
      icon: "DoorOpen",
      description:
        "Turnstiles, magnetic strikes, break-glass circuits, and relay logic matrices.",
      tracks: 5,
      href: "#courses",
    },
    {
      title: "IT Infrastructure",
      icon: "Network",
      description:
        "VLAN segmentation, fiber optic fusion splicing, and server rack engineering.",
      tracks: 7,
      href: "#courses",
    },
    {
      title: "Solar PV & Inverters",
      icon: "SunMedium",
      description:
        "Clean microgrid calculations, lithium BMS sizing, charge controller design.",
      tracks: 5,
      href: "#courses",
    },
    {
      title: "Full-Stack Software",
      icon: "Code2",
      description:
        "IoT APIs, telemetry dashboards, Golang daemons & microservice deployment.",
      tracks: 8,
      href: "#courses",
    },
  ] satisfies Category[],
  courses: [
    {
      code: "SEC-BIO-101",
      title: "Biometric Access Control Fundamentals",
      description:
        "End-to-end wiring, RS-485 and Wiegand protocols, optical fingerprint readers, and central controller programming.",
      image: "/images/biometric_course.jpg",
      imageAlt:
        "Nigerian technician testing a biometric access reader at a workshop bench",
      rating: 4.9,
      reviews: 184,
      modules: 6,
      lessons: 28,
      duration: "4h 30m Practical",
      price: 45000,
    },
    {
      code: "SEC-CCTV-202",
      title: "CCTV Installation & IP Surveillance",
      description:
        "Field topology design, RTSP video streaming, PoE switch load budgeting, dynamic DNS, and remote monitoring.",
      image: "/images/cctv_course.jpg",
      imageAlt:
        "CCTV monitoring wall with network video recorders and camera hardware in a test lab",
      rating: 4.8,
      reviews: 240,
      modules: 8,
      lessons: 34,
      duration: "6h 15m Practical",
      price: 52000,
    },
    {
      code: "PWR-SLR-305",
      title: "Solar PV & Inverter Systems Engineering",
      description:
        "Solar panel string voltage formulas, MPPT sizing, Lithium BMS calibration, grounding rods, and surge protection.",
      image: "/images/solar_course.jpg",
      imageAlt:
        "Technician inspecting a solar inverter and lithium battery rack in a technical lab",
      rating: 4.9,
      reviews: 112,
      modules: 5,
      lessons: 24,
      duration: "5h 00m Practical",
      price: 48000,
    },
  ] satisfies Course[],
  steps: [
    {
      label: "STEP 01",
      icon: "Workflow",
      title: "Choose a technical track",
      description:
        "Select specialized infrastructure tracks aligned with West African industrial demand, from biometric security to solar microgrids.",
    },
    {
      label: "STEP 02",
      icon: "Cable",
      title: "Learn with real hardware & diagrams",
      description:
        "Interact with live field telemetry, schematic wiring diagrams, and real-time simulator benches replicating physical gear.",
    },
    {
      label: "STEP 03",
      icon: "SquareTerminal",
      title: "Practice labs & assessments",
      description:
        "Solve real-world fault simulations, configure live IP subnets, diagnose wiring loop drops, and submit practical benchmarks.",
    },
    {
      label: "STEP 04",
      icon: "BadgeCheck",
      title: "Earn enterprise-verified certificate",
      description:
        "Receive cryptographic credential IDs recognized by telecommunication firms, corporate security groups, and contractors.",
      complete: true,
    },
  ] satisfies AcademyStep[],
  // TODO: Replace placeholder instructor bios with confirmed faculty profiles.
  instructors: [
    {
      name: "Engr. Babatunde Alabi",
      role: "Principal Biometrics Architect",
      experience: "14+ YRS EXP",
      bio: "Former Technical Director at West African Security Systems. Designed national border biometric capture units and multi-site enterprise access platforms across Nigeria and Ghana.",
      modules: "12 Modules",
      students: "2,400+ Students",
      initials: "BA",
    },
    {
      name: "Engr. Taiwo Adeyemi",
      role: "Lead Solutions Architect",
      experience: "11+ YRS EXP",
      bio: "Specialist in renewable microgrids and industrial telemetry. Led grid-resilient power installations for Tier-3 data centers and high-density industrial parks in Lagos State.",
      modules: "9 Modules",
      students: "1,890+ Students",
      initials: "TA",
    },
  ] satisfies Instructor[],
  cta: {
    eyebrow: "ADMISSIONS OPEN FOR NEXT COHORT",
    title: "Ready to build practical technology skills?",
    description:
      "Join thousands of tech practitioners mastering real hardware and high-availability enterprise stacks.",
    primaryAction: "Get Started Now",
    secondaryAction: "Download Syllabus PDF",
  },
  footer: {
    headquartersLabel: "Lagos Headquarters:",
    headquarters:
      "Plot 14B, Commercial Avenue, Victoria Island, Lagos State, Nigeria",
    email: "telemetry@silverwareacademy.edu.ng",
    columns: [
      {
        title: "PLATFORM",
        links: [
          { label: "All Certifications", href: "#courses" },
          { label: "Interactive Labs", href: "#how-it-works" },
          { label: "Wiring Telemetry", href: "#" },
          { label: "Course Catalog", href: "#courses" },
          { label: "Enterprise Billing", href: "#" },
        ],
      },
      {
        title: "ORGANIZATION",
        links: [
          { label: "About Academy", href: "#" },
          { label: "Instructors & Faculty", href: "#instructors" },
          { label: "Accreditation Partners", href: "#" },
          { label: "Careers at Silverware", href: "#" },
          { label: "Contact Support", href: "mailto:telemetry@silverwareacademy.edu.ng" },
        ],
      },
      {
        title: "LEGAL & TRUST",
        links: [
          { label: "Terms of Service", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Credential Verification", href: "#" },
          { label: "Lab Safety Standards", href: "#" },
          { label: "System Status", href: "#" },
        ],
      },
    ] satisfies FooterColumn[],
    systemHealth: "SYSTEM HEALTH: 99.98%",
    build: "BUILD: v4.8.2-NG",
  },
} as const;

export const formatNaira = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
