// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: {
    url: string;
  };
  linkedinLink: string;
  profileSummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: Date;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelinetype: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techused: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issueddate: string;
  link: string;
  iconname: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
