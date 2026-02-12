# South Bay Rehab and Performance

A modern, responsive single-page application built for a local chiropractic clinic to showcase their services, educational videos, and clinic information. This project demonstrates proficiency in React development, custom hooks, performance optimization, and modern web development best practices.

## Live Demo

**[View Live Site](https://jomelbautista.github.io/react-tkhmovement/)**

## Features

- **Responsive Design** - Mobile-first approach using React Bootstrap for seamless experience across all devices
- **Active Navigation Tracking** - Custom scroll spy hook highlights the current section in navigation
- **Video Integration** - Embedded YouTube videos with intelligent autoplay management
- **Optimized Performance** - React.memo for component memoization and custom hooks for reusable logic
- **Accessibility** - ARIA labels and semantic HTML for improved screen reader support
- **Reusable Components** - Modular architecture makes content updates simple and maintainable
- **Centralized Configuration** - Constants file for easy management of URLs and external links

## Tech Stack

**Core:**
- React 18.2
- React Bootstrap 5.2
- React Icons

**Key Patterns & Concepts:**
- Custom Hooks (useScrollSpy, useMediaQuery, useVideoAutoplay, useOnScreen)
- React.memo for performance optimization
- IntersectionObserver API
- Component composition
- Responsive design patterns

## Project Structure

```
src/
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── data/            # Data arrays for dynamic content
├── constants/       # External URLs and configuration
├── pages/           # Page-level components
└── assets/          # Images and videos
```

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/jomelbautista/react-tkhmovement.git
cd react-tkhmovement
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## Key Technical Implementations

### Custom Hooks
- **useScrollSpy** - Tracks which section is currently in viewport for active nav highlighting
- **useVideoAutoplay** - Manages video play/pause based on visibility
- **useMediaQuery** - Responsive behavior based on screen size
- **useOnScreen** - IntersectionObserver wrapper for visibility detection

### Performance Optimizations
- Memoized pure components (service cards, video cards, education cards)
- Lazy loading of images and videos
- Efficient re-render prevention with React.memo

## Screenshots

![Homepage](https://user-images.githubusercontent.com/21297405/213908206-3e3375fe-cd3d-4986-a60b-383beeee6d0c.png)
![Services Section](https://user-images.githubusercontent.com/21297405/213908240-6cb123bb-6d5e-4063-8618-2798414757d0.png)
![About Section](https://user-images.githubusercontent.com/21297405/213908222-91dca49b-5ed0-4d04-8547-23d3685f980f.png)

## Deployment

This project is deployed using GitHub Pages. To deploy:

```bash
npm run deploy
```

## Contact

**Jomel Bautista**
- GitHub: [@jomelbautista](https://github.com/jomelbautista)

## License

This project was created for South Bay Rehab and Performance clinic.
