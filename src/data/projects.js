export const projects = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    problem:
      'Teams juggle projects, deadlines, and tasks across fragmented tools with no single overview.',
    description:
      'A full-stack productivity platform for organizing projects, tracking tasks, and monitoring progress from one workspace.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    role: 'Full-stack developer',
    result: 'One dashboard for planning, tracking, and shipping work.',
    image: '/images/projects/taskflow.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/your-name/taskflow',
    demoUrl: 'https://example.com',
    featured: true
  },
  {
    id: 'promptlab',
    title: 'PromptLab',
    problem:
      'Prompt writers lack a structured workspace to organize, test, and compare prompts side by side.',
    description:
      'An AI-powered workspace for creating, organizing, and testing prompts with saved collections, search, tags, and response comparison.',
    stack: ['React', 'JavaScript', 'REST API'],
    role: 'Frontend developer',
    result: 'A practical workspace for prompt experimentation and iteration.',
    image: '/images/projects/promptlab.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/your-name/promptlab',
    demoUrl: 'https://example.com',
    featured: true
  },
  {
    id: 'devstats',
    title: 'DevStats',
    problem:
      'GitHub activity and contribution data are scattered across pages and hard to summarize at a glance.',
    description:
      'A dashboard that displays GitHub repositories, contributions, languages, and activity through the public GitHub API.',
    stack: ['React', 'JavaScript', 'GitHub API'],
    role: 'Frontend developer',
    result: 'A live view of development activity in one responsive dashboard.',
    image: '/images/projects/devstats.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/your-name/devstats',
    demoUrl: 'https://example.com',
    featured: true
  },
  {
    id: 'gymkear',
    title: 'GymKear',
    problem:
      'Gym websites are usually static brochures — no quick way to browse programs, pricing, or signup paths.',
    description:
      'A modern, conversion-focused fitness site on Next.js that keeps programs and pricing fast to load and easy to navigate.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    role: 'Frontend developer',
    result: 'A fast, SEO-friendly website built to turn visitors into members.',
    image: '/images/projects/gymkear.webp',
    liveUrl: 'https://gym-kear.vercel.app',
    githubUrl: 'https://github.com/Sambasivarao-Mamidi/GymKear',
    featured: false
  },
  {
    id: 'prepzone',
    title: 'PrepZone',
    problem:
      'HPCL aspirants have to stitch together scattered question banks with no way to rehearse the real exam.',
    description:
      'An exam-prep platform with 28 full-length HPCL mock tests, 2,500+ practice questions, smart analytics, and leaderboards behind a freemium sign-in flow.',
    stack: ['React', 'JavaScript', 'Auth'],
    role: 'Full-stack developer',
    result: 'A monetized practice platform that mirrors the real HPCL test experience.',
    image: '/images/projects/prepzone.webp',
    liveUrl: 'https://prep-five-kappa.vercel.app',
    githubUrl: 'https://github.com/Sambasivarao-Mamidi/prep',
    featured: false
  },
  {
    id: 'attendance',
    title: 'Attendance',
    problem:
      'Manual attendance is slow and spoofable, and most IoT setups never surface telemetry or live results.',
    description:
      'An edge-to-cloud facial-recognition attendance system — HOG/dlib face matching with blink-liveness detection on a Raspberry Pi, live Firebase sync, and a React dashboard with remote enrollment and hardware telemetry.',
    stack: ['Python', 'React', 'Firebase', 'OpenCV'],
    role: 'Full-stack developer',
    result: 'Blink-verified attendance streamed live from edge hardware to a web dashboard.',
    image: '/images/projects/attendance.webp',
    liveUrl: 'https://attendance-project-main.vercel.app',
    githubUrl: 'https://github.com/Sambasivarao-Mamidi/Attendance_Project-main',
    featured: false
  },
  {
    id: 'cropyeild',
    title: 'CropYeild',
    problem:
      'Farmers rarely know expected yields or fertilizer needs before planting season begins.',
    description:
      'A Flask web app with trained machine-learning models that predict crop yield and fertilizer recommendations from soil and weather inputs.',
    stack: ['Python', 'Flask', 'ML', 'Vercel'],
    role: 'Full-stack developer',
    result: 'Data-driven yield and fertilizer guidance behind a simple web UI.',
    image: '/images/projects/cropyeild.webp',
    liveUrl: 'https://crop-yeild-green.vercel.app',
    githubUrl: 'https://github.com/Sambasivarao-Mamidi/CropYeild',
    featured: false
  }
]

export const featuredProjects = projects.filter((project) => project.featured)
export const secondaryProjects = projects.filter((project) => !project.featured)