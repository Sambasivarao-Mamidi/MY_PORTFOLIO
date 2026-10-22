import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiFigma,
  SiPython
} from 'react-icons/si'

export const skillCategories = [
  {
    title: 'Languages',
    description: 'Core programming and markup languages.',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python', 'HTML5', 'CSS3']
  },
  {
    title: 'Frontend',
    description: 'UI frameworks, styling, and responsive design.',
    skills: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design']
  },
  {
    title: 'Backend & Databases',
    description: 'Server-side runtime, APIs, and data stores.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'Firebase', 'RESTful APIs']
  },
  {
    title: 'Tools & Competencies',
    description: 'Development workflow, deployment, and design tools.',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman', 'Figma']
  }
]

export const techLogos = [
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org' },
  { node: <SiExpress />, title: 'Express', href: 'https://expressjs.com' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com' },
  { node: <SiFirebase />, title: 'Firebase', href: 'https://firebase.google.com' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
  { node: <SiPostman />, title: 'Postman', href: 'https://www.postman.com' },
  { node: <SiFigma />, title: 'Figma', href: 'https://www.figma.com' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' }
]
