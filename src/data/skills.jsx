import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si'

export const skillCategories = [
  {
    title: 'Frontend',
    description:
      'React, JavaScript, HTML, CSS, responsive design, UI components, and data visualization.',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive design', 'Tailwind CSS', 'Component architecture']
  },
  {
    title: 'Backend',
    description: 'Node.js, APIs, authentication, databases, and server-side logic.',
    skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Tools',
    description: 'Version control, editors, API testing, and AI-assisted development.',
    skills: ['Git', 'GitHub', 'VS Code', 'PowerShell', 'Postman', 'AI coding tools']
  },
  {
    title: 'Currently learning',
    description: 'The next layer of production-grade skill.',
    skills: ['TypeScript', 'Next.js', 'Testing', 'System design', 'Cloud deployment']
  }
]

export const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiExpress />, title: 'Express', href: 'https://expressjs.com' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' }
]