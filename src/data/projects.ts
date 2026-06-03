import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "ai-placement-prediction",
    title: "AI Placement Prediction System",
    description: "An AI-powered system that predicts placement outcomes for students based on their academic performance, skills, and extracurricular activities. Uses machine learning algorithms to provide actionable insights for career planning.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/",
    demo: "https://demo.com/",
    features: [
      "Predicts student placement probability",
      "Identifies key skill gaps",
      "Generates personalized learning paths",
      "Interactive dashboard for faculty"
    ],
    challenges: [
      "Handling imbalanced datasets effectively",
      "Optimizing the ML model for real-time inference",
      "Integrating Python backend with React frontend seamlessly"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    ]
  },
 {
  id: "wayconnect",
  title: "WayConnect Platform",
  description:
    "WayConnect is a web-based platform developed using Python Flask that enables seamless communication, information sharing, and user interaction through a centralized digital environment. The platform focuses on providing an efficient, responsive, and user-friendly experience while ensuring scalability and performance.",
  technologies: [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "SQLite"
  ],
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  github: "https://github.com/Nathiyajanarthanan/wayconnect",
  demo: "https://wayconnect-frontend.onrender.com",
  features: [
    "User authentication system",
    "Responsive web interface",
    "Information management",
    "Secure data handling",
    "Flask-based backend architecture"
  ]
},
{
  id: "e-district-portal",
  title: "E-District Service Portal",
  description:
    "A Python Flask-based e-Governance portal designed to digitize public services and improve citizen accessibility. The system enables users to submit applications, upload documents, track request status, and access government services through a centralized online platform.",
  technologies: [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "SQLite"
  ],
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  github: "https://github.com/Nathiyajanarthanan/e-district",
  demo: "https://e-district-client.onrender.com/",
  features: [
    "Online application submission",
    "Document upload management",
    "Application tracking system",
    "Citizen service dashboard",
    "Secure authentication and authorization"
  ]
}
];
