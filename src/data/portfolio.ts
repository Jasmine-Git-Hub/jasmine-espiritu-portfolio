import introAIPDF from '../assets/IntrotoModernAIUpdate20260409-31-mxhvn3.pdf';
import shePDF from '../assets/e-certificate_ShecreateswithAI_127-127.pdf';
import virtualAssistantPDF from '../assets/VirtualAssistant101.pdf';
import brandingPDF from '../assets/BrandingwithAI.pdf';
import cybersecurityCert from '../assets/cert-cybersecurity-awareness.jpg';
import aiIotCert from '../assets/cert-community-ai-iot.png';
import aiResearchCert from '../assets/cert-ai-research-ecosystems.jpg';

export const profile = {
  firstName: 'Jasmine',
  lastName: 'Espiritu',
  fullName: 'Jasmine Michaela Espiritu',
  role: 'BSIT Student · Project Manager · Programmer',
  emails: ['designedbyjasmine0@gmail.com', 'jmyapespiritu@gmail.com'],
  linkedin: 'https://www.linkedin.com/in/jasmine-michaela-espiritu-8b3b65353',
  github: 'https://github.com/Jasmine-Git-Hub',
  // 👉 Your CV lives at public/cv.pdf (served at /cv.pdf). Replace that file to update it.
  cv: '/cv.pdf',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export type Project = {
  index: string;
  title: string;
  /** Optional long-form title shown under the headline (e.g. a thesis title). */
  fullTitle?: string;
  kind: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  live?: boolean;
};

export const projects: Project[] = [
  {
    index: '01',
    title: 'AI Succession & Skills Gap System',
    fullTitle:
      'Design and Development of a Web-Based Merchandising Performance Management System for SMEs to Improve Employee Performance through AI-Powered Succession Planning and Skills Gap Analysis',
    kind: 'Capstone · Project Manager & Programmer',
    description:
      'Our capstone: a performance management platform for small and medium enterprises. I led the five-person team as Project Manager through five Scrum sprints, and trained the machine-learning models in Python, Scikit-learn and Jupyter Notebook. A Flask REST API serves the models to the web app, where they power skills gap analysis and succession planning. The AI only supports decisions; HR makes the final call.',
    tags: ['React', 'TypeScript', 'PHP', 'MySQL', 'Python', 'Scikit-learn', 'Flask API', 'Agile Scrum'],
    links: [{ label: 'View Live', href: 'https://performance.mms-tmglt.com/login' }],
    featured: true,
    live: true,
  },
  {
    index: '02',
    title: 'FinTrac Mobile App',
    kind: 'Android · Personal Finance',
    description: 'A mobile finance tracker for logging income and expenses, with real-time cloud sync.',
    tags: ['Java', 'Android Studio', 'Firebase'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Jasmine-Git-Hub/FinTrac' },
      {
        label: 'Get the APK',
        href: 'https://drive.google.com/drive/folders/1QwRfeG9PJOezF6WXKQDNLKMFMu-x7wws?usp=sharing',
      },
    ],
  },
  {
    index: '03',
    title: 'CrimsonCloudHR',
    kind: 'Web · Job Portal',
    description:
      'A web-based job portal that connects applicants and employers, from job listings to applications.',
    tags: ['TypeScript', 'React', 'Firebase'],
    links: [{ label: 'GitHub', href: 'https://github.com/Jasmine-Git-Hub/CrimsonCloudHR' }],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  href?: string;
  linkLabel?: string;
};

// Credentials earned by completing a course or assessment
export const certifications: Certificate[] = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    href: 'https://www.credly.com/badges/f0cd1a6a-8d41-4e5b-8bff-677ba345a2c5',
    linkLabel: 'Verify',
  },
  { title: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy', date: 'Feb 2026', href: introAIPDF },
];

// Certificates of attendance / participation
export const trainings: Certificate[] = [
  { title: 'AI-Driven Research Ecosystems', issuer: 'Bestlink College of the Philippines', date: 'Oct 2026', href: aiResearchCert },
  {
    title: 'Community AI-IoT Projects: Tackling Real Problems with Solutions',
    issuer: 'Bestlink College of the Philippines',
    date: 'Oct 2026',
    href: aiIotCert,
  },
  {
    title: 'Cybersecurity Awareness',
    issuer: 'Cybersecurity Society of the Philippines × Bestlink College',
    date: 'Oct 2026',
    href: cybersecurityCert,
  },
  { title: 'Mindset, Money, Machines: Financial Literacy in the Age of AI', issuer: 'DICT ILCDB', date: 'May 2026' },
  { title: 'Branding in the Age of AI', issuer: 'DICT ILCDB', date: 'Apr 2026', href: brandingPDF },
  { title: 'She Creates with AI: Turning Ideas into Prompts', issuer: 'DICT ILCDB', date: 'Mar 2026', href: shePDF },
  { title: 'Virtual Assistance 101 & Smart Work Habits', issuer: 'DICT ILCDB', date: 'Mar 2026', href: virtualAssistantPDF },
];

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
  {
    group: 'Backend / AI',
    items: ['Python', 'Scikit-learn', 'Flask', 'REST APIs', 'Java', 'PHP', 'MySQL', 'Firebase'],
  },
  {
    group: 'Tools',
    items: ['Git & GitHub', 'Vercel', 'Jupyter Notebook', 'Postman', 'XAMPP', 'VS Code', 'Android Studio', 'ClickUp'],
  },
  {
    group: 'Professional',
    items: ['Project Management', 'Agile Scrum', 'Leadership', 'Communication', 'Time Management', 'Prompt Engineering'],
  },
];
