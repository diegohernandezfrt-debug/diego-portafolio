import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: "TaskFlow SaaS",
    desc: "Sistema completo de gestión de tareas estilo Notion + Trello. Incluye autenticación, drag & drop, proyectos, roles y tiempo real.",
    img: "/image/Dashboard-TaskFlow-Saas.png",
    tech: ["React", "Supabase", "Tailwind", "Framer Motion"],
    live: "https://taskflow-saas-q4zt.onrender.com",
    github: "https://github.com/diegohernandezfrt-debug/taskflow-saas",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Endless Runner Game",
    desc: "Juego endless runner 2D con puntuación, obstáculos y power-ups. Desarrollado en Godot.",
    img: "https://img.itch.zone/aW1hZ2UvNDUyNjU5MC8yNjk4MDE3Mi5wbmc=/original/IBIbmn.png",
    tech: ["Godot 4", "GDScript"],
    live: "https://diefrank.itch.io/dh-endless-runner-duck-mobile",
    github: "https://github.com/diegohernandezfrt-debug/DHEndlessRunner",
    category: "game"
  },
  {
    id: 3,
    title: "Inventory Management System",
    desc: "Fullstack web app para gestionar productos, stock y movimientos con autenticación.",
    img: "/image/Dashboard-System-Inventory3.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "https://dh-inventory-system-fullstack.vercel.app/",
    github: "https://github.com/diegohernandezfrt-debug/inventory-system-fullstack",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Tower Defense 2D",
    desc: "Juego completo con oleadas, torres mejorables y UI pulida.",
    img: "https://img.itch.zone/aW1nLzI1NzUxMDc3LmpwZw==/original/tQuTRF.jpg",
    tech: ["Godot 4", "GDScript"],
    live: "https://diefrank.itch.io/dhtowerdefense",
    github: "https://github.com/diegohernandezfrt-debug/DHTowerDefense",
    category: "game"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="proyectos-reales" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Proyectos Destacados
        </motion.h2>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">
          Haz clic en "Ver Demo" para probarlos en vivo
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map(project => (
            <motion.div
              key={project.id}
              whileHover={{ y: -12 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="relative h-64">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-black/60 text-white rounded-full">
                  {project.category === 'fullstack' ? 'Fullstack' : 'Game'}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition-all"
                  >
                    🎮 Ver Demo
                  </button>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="flex-1 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 py-4 rounded-2xl text-center font-semibold"
                  >
                    💻 Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        url={selectedProject?.live}
        isGame={selectedProject?.category === 'game'}
        isExternal={selectedProject?.live?.includes('render.com') || selectedProject?.live?.includes('onrender.com')}
      />
    </section>
  );
}