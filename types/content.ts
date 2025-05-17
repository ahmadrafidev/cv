export interface Profile {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    google_scholar: string;
  };
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  link?: string;
}

export interface Talk {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
}

export interface Teaching {
  title: string;
  institution: string;
  period: string;
  role: string;
  description: string;
}

export interface ContentData {
  profile: Profile;
  education: {
    education: Education[];
  };
  experience: {
    experience: Experience[];
  };
  skills: {
    skills: Skill[];
  };
  research: {
    research_interests: string[];
  };
  publications: {
    publications: Publication[];
  };
  talks: {
    conference_talks: Talk[];
    workshop_presentations: Talk[];
    panel_discussions: Talk[];
  };
  teaching: {
    university_courses: Teaching[];
    workshops_training: Teaching[];
    mentoring: Teaching[];
  };
} 