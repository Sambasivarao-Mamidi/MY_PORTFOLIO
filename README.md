# Portfolio Website

A modern, animated portfolio built with React, Vite, and Tailwind CSS. Features interactive WebGL effects, smooth animations, and a clean dark theme.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- **3D/Effects**: Custom WebGL components (PixelSnow, Grainient, TechText)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Features

- **Hero Section** - Interactive TechText animation with draggable letters and click effects
- **About Section** - Animated stats, service cards, and pixel snow background
- **Skills Section** - Technology showcase with logo loop and specular cards
- **Projects Section** - Featured projects with spotlight effects
- **Contact Section** - Social links with animated pixel snow
- **Responsive Design** - Optimized for desktop and mobile
- **Reduced Motion Support** - Respects user preferences

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Lint

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── hero/       # Hero section components
│   ├── projects/   # Project display components
│   ├── sections/   # Page sections
│   ├── skills/     # Skills section components
│   └── ui/         # Base UI components
├── data/           # Static data (projects, skills, profile)
├── hooks/          # Custom React hooks
├── pages/          # Page components
└── styles/         # Global styles
```

## License

MIT License - feel free to use this project for inspiration.
