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
    id: 'shopease',
    title: 'ShopEase',
    problem:
      'Small stores need a clean product catalog with browsing, filtering, and cart management.',
    description:
      'A responsive online store with product browsing, filtering, cart state, and a full checkout flow.',
    stack: ['React', 'JavaScript', 'CSS'],
    role: 'Frontend developer',
    result: 'A complete shopping experience end to end.',
    image: '/images/projects/shopease.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/your-name/shopease',
    demoUrl: 'https://example.com',
    featured: false
  },
  {
    id: 'weatherflow',
    title: 'WeatherFlow',
    problem:
      'Weather data is raw and hard to read without a friendly interface and location handling.',
    description:
      'An API-driven weather app with location search, forecasts, and responsive data presentation.',
    stack: ['React', 'JavaScript', 'Weather API'],
    role: 'Frontend developer',
    result: 'Clear, current weather for any location in one screen.',
    image: '/images/projects/weatherflow.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/your-name/weatherflow',
    demoUrl: 'https://example.com',
    featured: false
  },
  {
    id: 'quicknotes',
    title: 'QuickNotes',
    problem:
      'Quick notes get lost between apps; users want a simple local editor without sign-up.',
    description:
      'A lightweight notes app using local storage with categories, search, and autosave.',
    stack: ['React', 'JavaScript', 'Local Storage'],
    role: 'Frontend developer',
    result: 'Fast, offline-friendly note-taking with zero setup.',
    image: '/images/projects/quicknotes.webp',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/your-name/quicknotes',
    demoUrl: 'https://example.com',
    featured: false
  }
]

export const featuredProjects = projects.filter((project) => project.featured)
export const secondaryProjects = projects.filter((project) => !project.featured)