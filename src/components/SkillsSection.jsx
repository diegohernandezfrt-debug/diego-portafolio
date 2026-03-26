
import { motion } from 'framer-motion';

const skillsData = [
  { 
    id: 1, 
    title: "Desarrollo Web", 
    desc: "HTML, CSS, Tailwind, React, PHP y Bootstrap. Sitios modernos y rápidos.", 
    img: "/image/habilidades-1.jpg" 
  },
  { 
    id: 2, 
    title: "C++ y C#", 
    desc: "Programación orientada a objetos y desarrollo de aplicaciones de escritorio.", 
    img: "/image/habilidades2.png" 
  },
  { 
    id: 3, 
    title: "Java", 
    desc: "Desarrollo web y aplicaciones con Spring Boot y Java SE.", 
    img: "/image/Habilidades3.jpg" 
  },
  { 
    id: 4, 
    title: "Python", 
    desc: "Automatización, procesamiento de datos y scripts potentes.", 
    img: "/image/Habilidades4.jpg" 
  },
  { 
    id: 5, 
    title: "Kotlin + Android", 
    desc: "Desarrollo de aplicaciones móviles nativas.", 
    img: "/image/Habilidades5.jpg" 
  },
  { 
    id: 6, 
    title: "Bases de Datos", 
    desc: "MySQL, diseño de esquemas y conexión con aplicaciones.", 
    img: "/image/Habilidades6.jpg" 
  }
];

function FlipCard({ skill }) {
  return (
    <div className="perspective h-[420px] cursor-pointer group">
      <motion.div
        className="card-inner relative w-full h-full"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* === FRENTE (IMAGEN) === */}
        <div className="backface-hidden absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={skill.img} 
            alt={skill.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-3xl font-bold tracking-tight">{skill.title}</h3>
          </div>
        </div>

        {/* === REVERSO (TEXTO) === */}
        <div className="backface-hidden absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center p-10 text-white rotate-y-180 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center">{skill.title}</h3>
          <p className="text-center text-lg leading-relaxed max-w-[280px]">
            {skill.desc}
          </p>
          <div className="mt-8 w-12 h-1 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Habilidades Prácticas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map(skill => (
            <FlipCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
