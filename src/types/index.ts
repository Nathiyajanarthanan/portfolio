export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  features?: string[];
  challenges?: string[];
  screenshots?: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  company?: string;
  description: string;
}
