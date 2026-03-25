import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CoursesSection from './components/CoursesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CoursesSection />
      <ContactSection />

      <footer className="py-12 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-950 border-t">
        © 2026 Diego Hernández Ramírez • Hecho con React + Tailwind + Framer Motion
      </footer>
    </div>
  );
}

export default App;